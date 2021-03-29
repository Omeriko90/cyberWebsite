import React from "react";
import PropTypes from "prop-types";
import * as S from "./style";
import { SIZE } from "constant";
import Text from "components/common/Text";
import moment from "moment";
import Icon from "components/common/Icon";
import { faTag, faHeart } from "@fortawesome/free-solid-svg-icons";
import { COLOR } from "constant";
import Button from "components/common/Button";

function Post(props) {
  return (
    <S.PostContainer>
      <S.PostImgContainer>
        <S.PostImg src={props.postImg} />
      </S.PostImgContainer>
      <S.PostBaseContainer>
        <S.PostHeaderContainer>
          <S.PostTitleContainer>
            <S.PostHeadlineContainer>
              <Text size={SIZE.large} color={"black"}>
                {props.postHeadline}
              </Text>
            </S.PostHeadlineContainer>
            <S.CategoryContainer>
              <Icon iconName={faTag} color={"#2B2B2B"} />
              <Text size={SIZE.medium} underline>
                {props.postCategory}
              </Text>
            </S.CategoryContainer>
          </S.PostTitleContainer>
          <S.PostDateContainer>
            <Text size={SIZE.medium} color={"#9C9C9C"}>
              {moment(props.postCreatedOn).format("LL")}
            </Text>
          </S.PostDateContainer>
        </S.PostHeaderContainer>
        <S.PostContent>{props.postContent}</S.PostContent>
        <S.PostButtonsContainer>
          <Button
            text={"Like"}
            color={COLOR.secondary}
            size={SIZE.small}
            iconName={faHeart}
          />
        </S.PostButtonsContainer>
      </S.PostBaseContainer>
    </S.PostContainer>
  );
}

export default Post;
