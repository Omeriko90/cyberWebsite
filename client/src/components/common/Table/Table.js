import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import {
  TableContainer,
  TableHeaderContainer,
  TableHeaderRowContainer,
  TableHeaderCellContainer,
  TableBodyContainer,
  TableRowContainer,
  TableCellContainer,
  SortIcon,
  FilterByContainer,
  StatisticsContainer,
  NotOverDueContainer,
  ScoreContainer,
  NoResultContainer,
} from "./style";
import { useTable, useSortBy, useFilters } from "react-table";
import Text from "components/common/Text";
import SearchInput from "components/common/SearchInput";
import SelectInput from "../SelectInput/SelectInput";
import { SIZE } from "constant";
import { useUser } from "hooks";

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
};

function Table(props) {
  const [searchValue, setSearchValue] = useState("");
  const [columnOptions, setColumnOptions] = useState([]);
  const [filterColumn, setFilterColumn] = useState("");
  const [averageScore, setAverageScore] = useState(0);
  const [notOverDuePercent, setNotOverDuePercent] = useState(0);
  const columns = useMemo(() => props.columns, []);
  const data = props.data;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy
  );
  const { getNotOverDueProjectsPercent, getAverageProjectsScore } = useUser();

  useEffect(() => {
    const columnOptions = getColumnsOptions();
    setColumnOptions(getColumnsOptions());
    columnOptions.length > 0 && setFilterColumn(columnOptions[0]);
  }, []);

  useEffect(() => {
    setAverageScore(getAverageProjectsScore(rows));
    setNotOverDuePercent(getNotOverDueProjectsPercent(rows));
  }, [rows]);

  const getColumnsOptions = () => {
    const tableColumns = columns[0].columns;
    return tableColumns.map((column) => {
      return { label: column.accessor, value: column.Header };
    });
  };

  const handleSearchInputChange = (value) => {
    setFilter(filterColumn?.value, value);
    setSearchValue(value);
  };

  const handleFilterColumnChange = (filterColumn) => {
    setFilterColumn(filterColumn);
  };

  const isBooleanCell = (cell) => {
    return cell.column.Header === "madeDadeline";
  };

  return (
    <>
      <FilterByContainer>
        <SelectInput
          options={columnOptions}
          value={filterColumn}
          onChange={handleFilterColumnChange}
        />
        <SearchInput
          value={searchValue}
          placeholder={"Search..."}
          onSearch={handleSearchInputChange}
          isQuickSearch
          width={"100%"}
          size={SIZE.medium}
        />
      </FilterByContainer>
      {rows?.length > 0 && (
        <StatisticsContainer>
          <ScoreContainer>
            <Text>Average Score: </Text>
            <Text>{averageScore}</Text>
          </ScoreContainer>
          <NotOverDueContainer>
            <Text>On Time Projects Percent: </Text>
            <Text>{notOverDuePercent}%</Text>
          </NotOverDueContainer>
        </StatisticsContainer>
      )}

      {rows?.length > 0 ? (
        <TableContainer {...getTableProps()}>
          <TableHeaderContainer>
            {headerGroups.map((headerGroup) => (
              <TableHeaderRowContainer {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableHeaderCellContainer
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <Text>{column.render("Header")}</Text>
                    <SortIcon>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </SortIcon>
                  </TableHeaderCellContainer>
                ))}
              </TableHeaderRowContainer>
            ))}
          </TableHeaderContainer>
          <TableBodyContainer {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              const isGoodProject = row.cells[2].value > 70;
              return (
                <TableRowContainer
                  key={`table-row-${index}`}
                  {...row.getRowProps()}
                  goodProject={isGoodProject}
                >
                  {row.cells.map((cell, index) => (
                    <TableCellContainer
                      key={`table-cell=${index}`}
                      {...cell.getCellProps()}
                    >
                      {isBooleanCell(cell) ? (
                        <Text>{cell.value.toString()}</Text>
                      ) : (
                        <Text>{cell.render("Cell")}</Text>
                      )}
                    </TableCellContainer>
                  ))}
                </TableRowContainer>
              );
            })}
          </TableBodyContainer>
        </TableContainer>
      ) : (
        <NoResultContainer>
          <Text size={SIZE.xxl} color={"#231f20"}>
            No Results found. Please try different filter.{" "}
          </Text>
        </NoResultContainer>
      )}
    </>
  );
}

export default Table;
