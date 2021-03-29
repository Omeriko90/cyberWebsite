import styled from "styled-components";

export const BaseText = styled.div`
  ${(props) => (props.display ? `display: ${props.display};` : ``)}
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => (props.color ? props.color : "inherit")};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  text-decoration: ${(props) =>
    props.textDecoration ? props.textDecoration : "inherit"};
  white-space: ${(props) => (props.whiteSpace ? props.whiteSpace : "inherit")};
  overflow: ${(props) => (props.overflow ? props.overflow : "inherit")};
  line-height: ${(props) => props.lineHeight}px;
  text-overflow: ${(props) =>
    props.textOverflow ? props.textOverflow : "inherit"};
  text-transform: ${(props) => (props.textCase ? props.textCase : `inherit`)};
  word-break: ${(props) => props.wordBreak};
  ${(props) =>
    props.lineClamp &&
    `
    display: -webkit-box;
    -webkit-line-clamp: ${props.lineClamp};
    -webkit-box-orient: vertical;  
    overflow: hidden;`}
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : ``)}
  ${(props) =>
    props.hoverStyle
      ? `
  &:hover{
    cursor:pointer;
   ${props.hoverStyle};
  }`
      : ``}
`;
