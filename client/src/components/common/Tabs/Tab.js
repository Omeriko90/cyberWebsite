import React from "react";
import PropTypes from "prop-types";
import { SIZE } from "constant";
import { BaseTab, IconWrapper } from "./style";
import Icon from "components/common/Icon";
import Text from "components/common/Text";

Tab.propTypes = {
  label: PropTypes.string,
  index: PropTypes.number.isRequired,
  size: PropTypes.oneOf([SIZE.small, SIZE.medium, SIZE.large, SIZE.xl])
    .isRequired,
  icon: PropTypes.string,
  color: PropTypes.string,
  activeColor: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.string,
};

Tab.defaultProps = {
  isDisabled: false,
};

function Tab(props) {
  const disabledColor = "#cacaca";
  const color = props.isDisabled ? disabledColor : props.color;
  const activeColor = props.isDisabled ? disabledColor : props.activeColor;

  const handleClick = () => {
    if (!props.isDisabled && props.onClick) {
      props.onClick(props.index);
    }
  };

  return (
    <BaseTab
      color={color}
      activeColor={activeColor}
      onClick={handleClick}
      title={props.label}
    >
      {props.icon && (
        <IconWrapper>
          <Icon name={props.icon} size={props.size} />
        </IconWrapper>
      )}
      <Text ellipsis size={SIZE.medium}>
        {props.label}
      </Text>
    </BaseTab>
  );
}

export default React.memo(Tab);

const TAB_TEXT_SIZE = {
  [SIZE.small]: SIZE.xs,
  [SIZE.medium]: SIZE.medium,
  [SIZE.large]: SIZE.large,
  [SIZE.xl]: SIZE.xl,
};
