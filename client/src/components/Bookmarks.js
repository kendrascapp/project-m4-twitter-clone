import React from "react";
import styled from "styled-components";
import cat1 from "./cat1.png";

const Bookmarks = () => {
  return (
    <>
      <StyledText>Bookmarks</StyledText>
      <PostImage src={cat1} alt="cat1" />
    </>
  );
};

const PostImage = styled.img`
  width: 800px;
  height: 400px;
  border-radius: 10px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;

const StyledText = styled.div`
  color: black;
  font-size: 40px;
  font-weight: bold;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
`;

export default Bookmarks;
