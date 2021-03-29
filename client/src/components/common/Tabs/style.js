import styled from "styled-components";

//Tabs
export const BaseTabs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: ${(props) => props.height};
  width: 100%;

  &::-webkit-scrollbar {
    /** WebKit */
    display: none;
  }
`;

export const TabsWrapper = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const TabWrapper = styled.div`
  height: inherit;
  display: flex;
  max-width: 400px;
  ${(props) => (props.activeBgColor ? `border-radius: 16px` : ``)};
  background-color: ${(props) => props.activeBgColor};

  :not(:first-child):not(:last-child) {
    ${(props) => props.margin}
  }

  :first-child {
    margin-inline-end: ${(props) => props.inlineMargin}px;
  }

  :last-child {
    margin-inline-start: ${(props) => props.inlineMargin}px;
  }

  &:hover {
    background-color: #f9f9f9;
    border-radius: 16px;
  }

  & > * {
    white-space: nowrap;
    ${(props) => props.padding};
  }
`;

export const MoreWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.color};
  margin-inline-start: ${(props) => props.inlineMargin}px;
  white-space: nowrap;

  div:first-child {
    margin-inline-end: 4px;
  }

  &:hover {
    color: ${(props) => props.hoverColor};
  }

  &:active {
    color: ${(props) => props.hoverColor};
  }
`;
export const TabIndicatorWrapper = styled.div`
  width: 100%;
`;

export const TabIndicator = styled.div`
  display: block;
  position: absolute;
  top: -25px;
  height: 3px;
  background-color: ${(props) => props.bgColor};
  z-index: 2;
  width: ${(props) => props.width}px;
  left: ${(props) => props.left}px;
`;

//Tab
export const BaseTab = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.color};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.activeColor};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  margin-block-end: 6px;
`;
