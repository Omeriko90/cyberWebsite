import React from "react";
import PropTypes from "prop-types";
import { BaseText } from "./style";
import { SIZE } from "constant";

Text.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf([
    SIZE.xxs,
    SIZE.xs,
    SIZE.small,
    SIZE.medium,
    SIZE.large,
    SIZE.xl,
    SIZE.xxl,
  ]),
  ellipsis: PropTypes.bool,
  bold: PropTypes.bool,
  preWrap: PropTypes.bool,
  underline: PropTypes.bool,
  onClick: PropTypes.func,
  withWordBreak: PropTypes.bool,
};
Text.defaultProps = {
  size: SIZE.medium,
  ellipsis: false,
  bold: false,
  preWrap: false,
  underline: false,
  withWordBreak: true,
};

function Text(props) {
  const wordBreak = props.withWordBreak ? "break-word" : "";
  let fontSize;
  let fontFamily = "arimo, arial";
  let whiteSpace = props.preWrap ? "pre-wrap" : props.ellipsis ? "nowrap" : "";
  let overflow = props.ellipsis ? "hidden" : "";
  let textOverflow = props.ellipsis ? "ellipsis" : "";
  let fontWeight = props.bold ? 700 : 400;
  let textDecoration = props.underline ? "underline" : null;
  let hoverStyle = null;
  let cursor = props.onClick ? "pointer" : null;
  let lineHeight;

  switch (props.size) {
    case SIZE.xxs:
      fontSize = 12;
      lineHeight = 16;
      break;
    case SIZE.xs:
      fontSize = 13;
      lineHeight = 17;
      break;
    case SIZE.small:
      fontSize = 14;
      lineHeight = 20;
      break;
    case SIZE.medium:
      fontSize = 15;
      lineHeight = 20;
      break;
    case SIZE.large:
      fontSize = 20;
      lineHeight = 24;
      break;
    case SIZE.xl:
      fontSize = 24;
      lineHeight = 24;
      break;
    case SIZE.xxl:
      fontSize = 28;
      lineHeight = 24;
      break;
    default:
      fontSize = 14;
      break;
  }

  return (
    <BaseText
      fontSize={fontSize}
      color={props.color}
      fontFamily={fontFamily}
      whiteSpace={whiteSpace}
      overflow={overflow}
      textOverflow={textOverflow}
      textDecoration={textDecoration}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      hoverStyle={hoverStyle}
      onClick={props.onClick}
      textCase={props.textCase}
      cursor={cursor}
      wordBreak={wordBreak}
      display={props.display}
      lineClamp={props.lineClamp}
    >
      {props.children}
    </BaseText>
  );
}

export default React.memo(Text);
