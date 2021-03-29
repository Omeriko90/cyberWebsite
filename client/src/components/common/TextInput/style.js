import styled from "styled-components";

export const BaseTextInput = styled.input`
  font-size: ${(props) => props.fontSize};
  font-family: arimo, arial;
  background-color: transparent !important;
  border: none;
  color: ${(props) => props.textColor};
  ${(props) => (props.maxWidth ? `max-width: ${props.maxWidth}` : ``)};
  ${(props) => (props.lineHeight ? `line-height:${props.lineHeight};` : "")};
  ${(props) => (props.textAlign ? `text-align:${props.textAlign}` : "")};
  width: 100%;
  padding: 0;
  outline-width: 0;
`;

export const InputContainer = styled.div`
  ${(props) => (props.width ? `width:${props.width};` : "width: 100%")}
  cursor: ${(props) => props.cursor};
  user-select: ${(props) => props.userSelect};
  pointer-events: ${(props) => props.pointerEvents};
  border-radius: ${(props) => props.borderRadius};
  display: flex;
  align-items: center;
  & > input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px yellow inset;
  }
`;

export const TextIconGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-self: baseline;
  width: -webkit-fill-available;
  ${(props) => (props.withBorder ? `border: 1px solid #c2c8cc;` : "")}
  box-sizing: border-box;
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  align-items: center;
  padding-inline-start: ${(props) => props.paddingInlineStart};
  ${(props) => props.focusStyle};
`;

export const InputComponentAndError = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "100%")};
  flex-direction: column;
  border: ${(props) => props.focusStyle};
  border-radius: 4px;
`;

export const ErrorMsgContainer = styled.div`
  margin-top: 4px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-self: center;
  padding-inline-start: ${(props) => props.paddingInlineStart};
  padding-inline-end: ${(props) => props.paddingInlineEnd};
`;
