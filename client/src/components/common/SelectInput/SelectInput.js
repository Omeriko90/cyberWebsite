import React, { useRef } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { SelectContainer } from "./style";

SelectInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onMenuOpen: PropTypes.func,
  onMenuClose: PropTypes.func,
  options: PropTypes.array.isRequired, //an array of object contains label and value for every option [{label: '', value: ''}]
  selectedValue: PropTypes.object,
  iconInlineMargin: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.string,
  errorMsg: PropTypes.string,
  colorStyles: PropTypes.object,
  value: PropTypes.object,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

SelectInput.defaultProps = {
  placeholder: "",
};

function SelectInput(props) {
  const self = useRef(null);

  return (
    <SelectContainer>
      <Select
        onChange={props.onChange}
        onMenuClose={props.onMenuClose}
        onMenuOpen={props.onMenuOpen}
        options={props.options}
        styles={props.colorStyles}
        value={props.value}
        placeholder={props.placeholder}
        isDisabled={props.disabled}
        isClearable
        menuPortalTarget={self.current?.closest(".MuiDialog-root")}
        menuPlacement={"auto"}
      />
      <div style={{ visibility: "hidden" }} ref={self} />
    </SelectContainer>
  );
}

export default SelectInput;
