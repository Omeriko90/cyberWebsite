import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SIZE } from "constant";
import debounce from "lodash.debounce";
import TextInput from "components/common/TextInput";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
  isQuickSearch: PropTypes.bool, //if true - search after every key pressed. if false - search only after enter key pressed
  placeholder: PropTypes.string,
  size: PropTypes.oneOf([SIZE.small, SIZE.medium, SIZE.large, SIZE.xl]),
  rounded: PropTypes.bool,
  width: PropTypes.string,
  lineHeight: PropTypes.bool,
  autoFocus: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  onClearInput: PropTypes.func,
  onKeyUp: PropTypes.func,
  minSearchLength: PropTypes.number,
  withDebounce: PropTypes.bool,
  maxCharactersLength: PropTypes.number,
  withBorder: PropTypes.bool,
};

SearchInput.defaultProps = {
  rounded: false,
  lineHeight: true,
  autoFocus: false,
  minSearchLength: 1,
  size: SIZE.medium,
  withDebounce: true,
  withBorder: true,
};

const iconType = {
  magnify: "magnify_",
  remove: "x-small",
};
const FAST_TYPING_IN_MS = 500;

function SearchInput(props) {
  const [searchIcon, setSearchIcon] = useState(iconType.magnify);
  const [value, setValue] = useState(props.value || "");

  useEffect(() => {
    initSearchIcon(props.value || "");
    handleResetSearch();
  }, [props.value]);

  const handleResetSearch = () => {
    props.value === undefined && setValue(props.value);
  };

  const handleOnClickIcon = (element) => {
    if (searchIcon === iconType.remove) {
      setValue("");
      setSearchIcon(iconType.magnify);
      if (props.onClearInput) {
        props.onClearInput();
      }
    } else {
      element.focus();
    }
  };

  const handleOnChange = (value) => {
    initSearchIcon(value);
    setValue(value);
    debouncedQuickSearch(value);
  };

  const debouncedQuickSearch = debounce(
    (value) => {
      if (props.onSearch && props.isQuickSearch) {
        props.onSearch(value);
      }
    },
    props.withDebounce ? FAST_TYPING_IN_MS : 0
  );

  const handleOnKeyUp = (event) => {
    const searchValue = event.target.value;
    if (event.keyCode === 13 && !props.isQuickSearch && props.onSearch) {
      props.onSearch && props.onSearch(searchValue);
      if (searchValue.length > 0) {
        setSearchIcon(iconType.remove);
      } else {
        setSearchIcon(iconType.magnify);
      }
    } else {
      props.onKeyUp && props.onKeyUp(event);
    }
  };

  const initSearchIcon = (value) => {
    if (value.length > 0) {
      setSearchIcon(iconType.remove);
    } else {
      setSearchIcon(iconType.magnify);
    }
  };

  const handleOnFocus = (event) => {
    if (props.onFocus) {
      props.onFocus(event);
    }
  };

  const handleOnBlur = (value) => {
    if (props.onBlur) {
      props.onBlur(value);
    }
  };

  const handleOnKeyDown = (e) => {
    value && setSearchIcon(iconType.remove);
  };

  return (
    <TextInput
      placeholder={props.placeholder}
      rounded={props.rounded}
      width={props.width}
      value={value}
      lineHeight={props.lineHeight}
      autoFocus={props.autoFocus}
      onClickIcon={handleOnClickIcon}
      onChange={handleOnChange}
      onKeyUp={handleOnKeyUp}
      onKeyDown={handleOnKeyDown}
      onBlur={handleOnBlur}
      onFocus={handleOnFocus}
      size={props.size}
      withBorder={props.withBorder}
      iconName={faSearch}
      bgColor={"#F1F1F8"}
      iconColor={"#2B2B2B"}
    ></TextInput>
  );
}

export default React.memo(SearchInput);
