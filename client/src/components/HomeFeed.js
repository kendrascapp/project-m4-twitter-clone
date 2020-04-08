import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CircularProgress from "material-ui-core/CircularProgress";
import TweetSubmit from "./TweetSubmit";
import Icon from "react-icons-kit";
import { repeat } from "react-icons-kit/feather/repeat";
import { messageCircle } from "react-icons-kit/feather/messageCircle";
import { heart } from "react-icons-kit/feather/heart";
import { upload } from "react-icons-kit/feather/upload";
import ErrorPage from "./ErrorPage";
import { Link } from "react-router-dom";
import Retweet from "./Retweet";

const HomeFeed = () => {
  const [currentHomeFeed, setCurrentHomeFeed] = useState({});
  const [status, setStatus] = useState("loading");
  const [time, setTime] = useState("1000ms");
  const [error, setError] = useState("error");

  useEffect(() => {
    if (status === "loading") {
      fetch("/api/me/home-feed")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setCurrentHomeFeed(data);
          setStatus("idle");
        })
        .catch((error) => {
          console.log(error);
          return setError("error"), setTime("2000ms");
        });
    }
  }, [status]);

  return (
    <>
      <Feed>
        <div class="title">Home</div>
        <TweetSubmit setStatus={setStatus} />
        {status === "loading" && time < "2000ms" ? (
          <CircularProgress />
        ) : error === "error" && status === "loading" && time === "2000ms" ? (
          <ErrorPage />
        ) : (
          currentHomeFeed.tweetIds.map((tweetId) => {
            const tweetInfo = currentHomeFeed.tweetsById[tweetId];
            const dateFormat = new Date(tweetInfo.timestamp);
            let monthNumber = dateFormat.getMonth();
            let monthNames = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ];
            let monthName = monthNames[monthNumber];
            let dayNumber = dateFormat.getDate();
            function nth(n) {
              return (
                ["st", "nd", "rd"][((((n + 90) % 100) - 10) % 10) - 1] || "th"
              );
            }
            return (
              <>
                <OneTweet>
                  <img class="avatarImg" src={tweetInfo.author.avatarSrc} />
                  <div class="tweetContent">
                    <div class="handleTimeCont">
                      <div class="name">{tweetInfo.author.displayName}</div>
                      <div class="handle">@{tweetInfo.author.handle}</div>
                      <div class="time">
                        {monthName + " " + dayNumber + nth(dayNumber)}
                      </div>
                    </div>
                    <Link to={`/tweet/${tweetId}`}>
                      <div class="tweetBody">{tweetInfo.status}</div>
                    </Link>
                    {tweetInfo.media.length > 0 ? (
                      <PostImage src={tweetInfo.media[0].url}></PostImage>
                    ) : (
                      <></>
                    )}
                  </div>
                  <TweetIcons>
                    <a href="#">
                      <Icon size={18} class="icon" icon={repeat}></Icon>
                    </a>
                    <a href="#">
                      <Icon size={18} class="icon" icon={messageCircle}></Icon>
                    </a>
                    <a href="#">
                      <Icon size={18} class="icon" icon={heart}></Icon>
                    </a>
                    <a href="#">
                      <Icon size={18} class="icon" icon={upload}></Icon>
                    </a>
                  </TweetIcons>
                </OneTweet>
              </>
            );
          })
        )}
      </Feed>
    </>
  );
};

const TweetIcons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #ededed;
`;

const Feed = styled.div`
  display: flex;
  flex-grow: 0.25;
  flex-direction: column;
  max-width: 700px;
  .title {
    font-size: 20px;
    font-weight: bold;
    font-family: sans-serif;
    border-left: 1px solid #ededed;
    border-right: 1px solid #ededed;
    border-top: 1px solid #ededed;
    padding: 15px;
  }
`;

const OneTweet = styled.div`
  padding: 20px;
  border: 1px solid #ededed;
  .avatarImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .tweetContent {
    margin: -45px 0 0 55px;
  }
  .handleTimeCont {
    display: flex;
    .handle {
      font-family: sans-serif;
      padding-right: 20px;
      padding-left: 10px;
      font-size: 16px;
    }
    .name {
      font-family: sans-serif;
      font-weight: bold;
      font-size: 16px;
    }
    .time {
      font-family: sans-serif;
      font-size: 16px;
    }
  }
  .tweetBody {
    font-family: sans-serif;
    font-size: 16px;
    padding: 5px 0px;
  }
`;

const PostImage = styled.img`
  width: 400px;
  height: 200px;
  border-radius: 10px;
`;

export default HomeFeed;
