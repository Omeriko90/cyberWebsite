import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import {
  BaseTabs,
  TabsWrapper,
  TabWrapper,
  TabIndicatorWrapper,
  TabIndicator,
} from "./style";
import { COLOR, SIZE } from "constant";
import Tab from "./Tab";

Tabs.propTypes = {
  height: PropTypes.string,
  size: PropTypes.oneOf([SIZE.small, SIZE.medium, SIZE.large, SIZE.xl]),
  color: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  activeIndex: PropTypes.number,
  withPadding: PropTypes.bool,
  withMargin: PropTypes.bool,
  onChange: PropTypes.func,
  customElement: PropTypes.element,
  isDisableAll: PropTypes.bool,
};

Tabs.defaultProps = {
  height: "100%",
  size: SIZE.large,
  activeIndex: 0,
  withPadding: true,
  withMargin: true,
  isDisableAll: false,
};

function Tabs(props) {
  const [selectedTab, setSelectedTab] = useState();
  const [indicatorDimensions, setIndicatorDimensions] = useState({
    width: 0,
    offset: 0,
  });
  const indexesItems = props.items.map((item, i) => ({ ...item, index: i }));
  const tabsRef = useRef(null);
  const activeColor = "#447AEF";

  useEffect(() => {
    const width = selectedTab?.offsetWidth || 0;
    const offset = selectedTab?.offsetLeft;

    setIndicatorDimensions({ width: width, offset: offset });
  }, [selectedTab]);

  useEffect(() => {
    setSelectedTab(tabsRef.current.childNodes[props.activeIndex]);
  }, [tabsRef, props.activeIndex]);

  useEffect(() => {
    updateSelectedTab(props.activeIndex);
  }, [props.activeIndex]);

  const handleTabClick = (item, index) => {
    updateSelectedTab(index);
    props.onChange && props.onChange(item);
  };

  const updateSelectedTab = (index) => {
    const newSelectedTab = tabsRef.current.childNodes[index];
    setSelectedTab(newSelectedTab);
  };

  return (
    <BaseTabs>
      <TabsWrapper ref={tabsRef}>
        {indexesItems.map((item, i) => {
          return (
            <TabWrapper key={i}>
              <Tab
                index={i}
                label={item.label}
                size={props.size}
                type={props.type}
                iconPosition={props.iconPosition}
                color={
                  item.index === props.activeIndex ? activeColor : props.color
                }
                activeColor={activeColor}
                onClick={() => handleTabClick(item, i)}
              />
            </TabWrapper>
          );
        })}
        {props.customElement}
      </TabsWrapper>
      <TabIndicatorWrapper>
        <TabIndicator
          bgColor={activeColor}
          width={indicatorDimensions.width}
          left={indicatorDimensions.offset}
        />
      </TabIndicatorWrapper>
    </BaseTabs>
  );
}

export default React.memo(Tabs);
