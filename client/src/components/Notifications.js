import React from "react";
import styled from "styled-components";
import cat2 from "./cat2.png";

const Notifications = () => {
  return (
    <>
      <StyledText>NotifiCATions</StyledText>
      <PostImage src={cat2} alt="cat2" />
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

export default Notifications;
