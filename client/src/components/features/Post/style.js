import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  height: 230px;
  width: 870px;
`;

export const PostImgContainer = styled.div`
  display: flex;
  margin-inline-end: 21px;
`;

export const PostImg = styled.img`
  display: flex;
  width: 240px;
  height: 230px;
`;

export const PostBaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0px;
`;

export const PostHeaderContainer = styled.div`
  display: flex;
  margin-bottom: 26px;
`;

export const PostTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const PostHeadlineContainer = styled.div`
  display: flex;
  margin-bottom: 6px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;

  & > :first-child {
    margin-inline-end: 6px;
  }
`;

export const PostDateContainer = styled.div`
  display: flex;
`;

export const PostContent = styled.div`
  display: flex;
  color: #2b2b2b;
  font-size: 14px;
`;

export const PostButtonsContainer = styled.div`
  border-radius: 8px;
  background: #f1f1f8 0% 0% no-repeat padding-box;
`;
