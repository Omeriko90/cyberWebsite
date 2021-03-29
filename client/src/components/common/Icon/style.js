import styled from "styled-components";

export const BaseIcon = styled.i`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "inherit")};
  color: ${(props) => (props.color ? props.color : "inherit")};
  cursor: ${(props) => (props.cursor ? props.cursor : "inherit")};
  animation: ${(props) => props.animationName};

  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  padding: ${(props) => `${props.padding}px`};
  &:hover {
    color: ${(props) => props.hoverColor};
  }

  @keyframes pl-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
