import React, { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./style";
import LogoImg from "images/logo.svg";
import SearchInput from "components/common/SearchInput";
import Tabs from "components/common/Tabs";
import Text from "components/common/Text";
import { SIZE } from "constant";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Icon from "../../common/Icon/Icon";

function AppHeader(props) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const color = "#9C9C9C";
  const handleTabChange = (tab) => {
    setSelectedTabIndex(tab?.index);
  };

  return (
    <S.Container>
      <S.LogoContainer>
        <S.Logo src={LogoImg} />
      </S.LogoContainer>
      <S.SearchInputContainer>
        <SearchInput
          width={"544px"}
          placeholder={"Search..."}
          withBorder={false}
        />
      </S.SearchInputContainer>
      <S.TabsContainer>
        <Tabs
          items={tabs}
          onChange={handleTabChange}
          activeIndex={selectedTabIndex}
          color={color}
        />
      </S.TabsContainer>
      <S.LogInContainer>
        <S.IconContainer>
          <Icon iconName={faUser} color={color} />
        </S.IconContainer>
        <Text size={SIZE.meduim} color={color}>
          Log In
        </Text>
      </S.LogInContainer>
    </S.Container>
  );
}

const tabs = [{ label: "Home" }, { label: "Posts" }, { label: "Portal" }];

export default AppHeader;
