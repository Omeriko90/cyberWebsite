import React, { useEffect, useState } from "react";
import { Container } from "./style";
import Table from "components/common/Table";
import { useUser } from "hooks";
import { SORT_TYPE } from "constant";

function UserProjects() {
  const { getProjects, getProjectsColumn, isUserProjectsLoaded } = useUser();
  const [userProjects, setUserProjects] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {}, []);

  useEffect(() => {
    if (isUserProjectsLoaded) {
      setUserProjects(getProjects(SORT_TYPE.asc, ""));
      setColumns(getProjectsColumn());
    }
  }, [isUserProjectsLoaded]);

  const handleSort = (columnName, sortType) => {
    setUserProjects(getProjects(sortType, columnName));
  };

  return (
    <Container>
      {isUserProjectsLoaded && columns.length > 0 && (
        <Table columns={columns} data={userProjects} onSort={handleSort} />
      )}
    </Container>
  );
}

export default UserProjects;
