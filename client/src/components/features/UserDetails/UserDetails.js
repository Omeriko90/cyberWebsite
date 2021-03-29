import React, { useEffect, useState } from "react";
import {
  Container,
  Avatar,
  AvatarContainer,
  DetailsContainer,
  LogOutButtonContainer,
} from "./style";
import { useUser } from "hooks";
import Text from "components/common/Text";
import { useDispatch } from "react-redux";
import { getUserProjects } from "store/actions";
import { useHistory } from "react-router";
import Button from "components/common/Button";
import { COLOR, SIZE } from "constant";

function UserDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { getUserDetails } = useUser();
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const details = getUserDetails();
    if (details) {
      setUserDetails(details);
    } else if (!details && localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      setUserDetails(user);
      dispatch(getUserProjects(localStorage.getItem("user_token")));
    } else {
      history.push("/");
    }
  }, []);

  const handleLogOut = () => {
    localStorage.setItem("user", "");
    localStorage.setItem("user_token", "");
    history.push("/");
  };

  return (
    <Container>
      <AvatarContainer>
        <Avatar src={userDetails?.avatar} />
      </AvatarContainer>
      <DetailsContainer>
        <Text>Name: {userDetails?.name}</Text>
        <Text>Team: {userDetails?.Team}</Text>
        <Text>Joined at: {userDetails?.joinedAt}</Text>
      </DetailsContainer>
      <LogOutButtonContainer>
        <Button
          size={SIZE.large}
          color={COLOR.secondary}
          text={"Log out"}
          onClick={handleLogOut}
        />
      </LogOutButtonContainer>
    </Container>
  );
}

export default UserDetails;
