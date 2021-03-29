import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 100px;
  padding: 10px 50px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  margin-inline-end: 15px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  & > :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const LogOutButtonContainer = styled.div`
  display: flex;
  align-self: flex-end;
`;
