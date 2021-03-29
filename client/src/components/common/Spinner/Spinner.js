import React from "react";
import PropTypes from "prop-types";
import { SpinnerContainer, Loader, CircleSvg, Circle } from "./style";

Spinner.propTypes = {
  isLoading: PropTypes.bool,
  margin: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

Spinner.defaultProps = {
  size: 65,
  margin: "40px",
  isLoading: false,
  anchor: "center",
};

function Spinner(props) {
  const display = props.isLoading ? "flex" : "none";
  const color = "#447AEF";

  return (
    <SpinnerContainer display={display} margin={props.margin}>
      <Loader size={props.size}>
        <CircleSvg viewBox="25 25 50 50">
          <Circle cx="50" cy="50" r="15" fill="none" color={color} />
        </CircleSvg>
      </Loader>
    </SpinnerContainer>
  );
}

export default React.memo(Spinner);
