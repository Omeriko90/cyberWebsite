import React from "react";
import PropTypes from "prop-types";
import { BaseIcon } from "./style";
import { SIZE } from "constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  hoverColor: PropTypes.string,
  size: PropTypes.oneOf([
    SIZE.xxs,
    SIZE.xs,
    SIZE.small,
    SIZE.medium,
    SIZE.large,
    SIZE.xl,
    SIZE.xxl,
  ]),
  onClick: PropTypes.func,
  withAnimation: PropTypes.bool,
};
Icon.defaultProps = {
  color: "inherit",
  size: SIZE.medium,
};

function Icon(props) {
  let fontSize;
  let padding;
  let animationType = props.withAnimation
    ? "pl-spin 1s infinite linear"
    : "none";

  switch (props.size) {
    case SIZE.xxs:
      fontSize = 10;
      padding = 3;
      break;
    case SIZE.xs:
      fontSize = 12;
      padding = 4;
      break;
    case SIZE.small:
      fontSize = 14;
      padding = 5;
      break;
    case SIZE.medium:
      fontSize = 15;
      padding = 6;
      break;
    case SIZE.large:
      fontSize = 16;
      padding = 6;
      break;
    case SIZE.xl:
      fontSize = 18;
      padding = 7;
      break;
    case SIZE.xxl:
      fontSize = 20;
      padding = 8;
      break;
    default:
      fontSize = null;
      padding = 0;
      break;
  }

  return (
    // <BaseIcon
    //   className={"icon-" + props.name}
    //   fontSize={fontSize}
    //   color={props.color}
    //   cursor={props.onClick ? "pointer" : "inherit"}
    //   onClick={props.onClick}
    //   hoverColor={props.hoverColor}
    //   animationName={animationType}
    //   bgColor={props.bgColor}
    //   padding={props.bgColor ? padding : 0}
    // />
    <FontAwesomeIcon icon={props.iconName} color={props.color} />
  );
}

export default Icon;
