import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectProjects } from "store/selectors";
import { SORT_TYPE } from "constant";
import { getUserProjects } from "store/actions";

const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const projects = useSelector(selectProjects);
  console.log(user);
  const [isUserProjectsLoaded, setIsUserProjectsLoaded] = useState(false);

  useEffect(() => {
    if (user && user.token) {
      localStorage.setItem("user_token", user.token);
      localStorage.setItem("user", JSON.stringify(user.personalDetails));
      dispatch(getUserProjects(user.token));
    }
  }, [user]);

  useEffect(() => {
    projects[0] && setIsUserProjectsLoaded(true);
  }, [projects]);

  const getUserDetails = () => {
    return user?.personalDetails;
  };

  const getUserToken = () => {
    const token = localStorage.getItem("user_token");
    return token ? token : "";
  };

  const getProjects = (sortType, sortColumn) => {
    const column = sortColumn || "id";
    if (sortType === SORT_TYPE.asc) {
      return projects?.sort((projectA, projectB) =>
        projectA[sortColumn] > projectB[column] ? 1 : -1
      );
    }

    return projects?.sort((projectA, projectB) =>
      projectA[sortColumn] > projectB[column] ? -1 : 1
    );
  };

  const getNumberOfSuccessfulProjects = (projectsArr) => {
    return projectsArr?.filter((project) => project.cells[5].value).length;
  };

  const getNotOverDueProjectsPercent = (projectsArr) => {
    const numberOfSuccessfulProjects = getNumberOfSuccessfulProjects(
      projectsArr
    );
    return (numberOfSuccessfulProjects / projectsArr?.length) * 100;
  };

  const getTotalProjectsScore = (projectsArr) => {
    let score = 0;
    projectsArr.forEach((project) => {
      score += project.cells[2].value;
    });

    return score;
  };

  const getAverageProjectsScore = (projectsArr) => {
    const numberOfSuccessfulProjects = getTotalProjectsScore(projectsArr);

    return numberOfSuccessfulProjects / projects?.length;
  };

  const getProjectsColumn = () => {
    const columns = Object.keys(projects[0]).map((key) => {
      return {
        Header: key,
        accessor: key,
        sortType: "basic",
      };
    });
    return [{ Header: "Projects", columns }];
  };

  return {
    getUserDetails,
    getUserToken,
    getProjects,
    getNotOverDueProjectsPercent,
    getAverageProjectsScore,
    getProjectsColumn,
    isUserProjectsLoaded,
  };
};

export default useUser;
