import React from "react";
import { u1F4A3 as Bomb } from "react-icons-kit/noto_emoji_regular/u1F4A3";
import Icon from "react-icons-kit";

function ErrorPage() {
  return (
    <>
      <div>
        <h1>Uh oh! Refresh this page right meow!</h1>
        <Icon size={500} icon={Bomb}></Icon>
      </div>
    </>
  );
}

export default ErrorPage;
