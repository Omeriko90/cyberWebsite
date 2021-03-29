import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const LogInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  position: relative;
  align-items: center;
  margin: 200px auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  margin: 60px 0px 100px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 25px;

  & > :not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  margin: 0 auto;
  width: 300px;
`;

export const ErrorContainer = styled.div`
  display: flex;
  margin-top: 5px;
`;

export const BackgroundContainer = styled.div`
  background-image: url("/images/logIn.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;
