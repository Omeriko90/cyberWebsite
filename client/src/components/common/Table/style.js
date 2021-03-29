import styled from "styled-components";

export const TableCellContainer = styled.td`
  display: flex;
  padding: 20px;
  width: 200px;
  border: solid black;
  border-width: 1px 1px 0 0;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => props.cursor};
`;

export const TableHeaderCellContainer = styled.th`
  display: flex;
  padding: 20px;
  width: 200px;
  border: solid black;
  border-width: 1px 1px 0 0;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => props.cursor};
`;

export const TableRowContainer = styled.tr`
  display: flex;
  background-color: ${(props) => (props.goodProject ? "#37C998" : "#FA6D6D")};

  & > :first-child {
    border-left: 1px solid black;
  }
`;

export const TableHeaderRowContainer = styled.tr`
  display: flex;

  & > :first-child {
    border-left: 1px solid black;
  }
`;

export const TableColumnContainer = styled.th``;

export const TableBodyContainer = styled.tbody``;

export const TableHeaderContainer = styled.thead``;

export const TableContainer = styled.table``;

export const SortIcon = styled.span`
  display: flex;
`;

export const FilterByContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  & > :first-child {
    margin-inline-end: 10px;
  }
`;

export const StatisticsContainer = styled.div`
  display: flex;
  margin-bottom: 20px;

  & > :first-child {
    margin-inline-end: 20px;
  }
`;

export const ScoreContainer = styled.div`
  display: flex;

  & > :first-child {
    margin-inline-end: 5px;
  }
`;

export const NotOverDueContainer = styled.div`
  display: flex;

  & > :first-child {
    margin-inline-end: 5px;
  }
`;

export const NoResultContainer = styled.div`
  display: flex;
  justify-content: center;
`;
