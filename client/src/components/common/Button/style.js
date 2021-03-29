import styled from "styled-components";

export const BaseButton = styled.button`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  text-align: center;
  text-transform: capitalize;
  padding-top: ${(props) => props.paddingBlock}px;
  padding-bottom: ${(props) => props.paddingBlock}px;
  padding-inline-end: ${(props) => props.paddingInLine}px;
  padding-inline-start: ${(props) => props.paddingInLine}px;
  border-radius: ${(props) => props.borderRadius};
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.lineHeight};
  font-family: arimo, arial;
  border: 1px solid;
  ${(props) => props.baseStyle};
  cursor: ${(props) => props.cursor};
  outline: none;
  ${(props) => props.baseStyle};
  &:hover {
    ${(props) => props.hoverStyle}
  }
  &:active {
    ${(props) => props.activeStyle}
  }
  height: fit-content;
  width: ${(props) => props.width};
  justify-content: center;
  max-width: 100%;
`;

export const IconContainer = styled.div`
  align-self: center;
  display: flex;
  margin-inline-start: ${(props) => props.marginInlineStart};
  margin-inline-end: ${(props) => props.marginInlineEnd};
  margin-bottom: ${(props) => props.marginBottom};
`;
