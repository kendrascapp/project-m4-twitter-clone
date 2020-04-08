import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Icon from "react-icons-kit";
import { repeat } from "react-icons-kit/feather/repeat";
import { messageCircle } from "react-icons-kit/feather/messageCircle";
import { heart } from "react-icons-kit/feather/heart";
import { upload } from "react-icons-kit/feather/upload";
import Retweet from "./Retweet";

const Tweet = () => {
  const params = useParams();
  const [tweet, setTweet] = useState("");

  useEffect(() => {
    fetch(`/api/tweet/${params.tweetId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTweet(data);
      });
  }, []);

  return (
    <>
      <Feed>
        <div class="title">Tweet Details</div>
        {Object.values(tweet).map((tweet) => {
          const dateFormat = new Date(tweet.timestamp);
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
                <img class="avatarImg" src={tweet.author.avatarSrc} />
                <div class="tweetContent">
                  <div class="handleTimeCont">
                    <div class="name">{tweet.author.displayName}</div>
                    <div class="handle">@{tweet.author.handle}</div>
                    <div class="time">
                      {monthName + " " + dayNumber + nth(dayNumber)}
                    </div>
                  </div>
                  <div class="tweetBody">{tweet.status}</div>
                  <PostImage src={tweet.media[0].url}></PostImage>
                </div>
                <TweetIcons>
                  <a href="#">
                    <Icon size={18} icon={repeat}></Icon>
                  </a>
                  <Retweet></Retweet>
                  <a href="#">
                    <Icon size={18} icon={messageCircle}></Icon>
                  </a>
                  <a href="#">
                    <Icon size={18} icon={heart}></Icon>
                  </a>
                  <a href="#">
                    <Icon size={18} icon={upload}></Icon>
                  </a>
                </TweetIcons>
              </OneTweet>
            </>
          );
        })}
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
  max-width: 900px;
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
  width: 600px;
  height: 300px;
  border-radius: 10px;
`;

export default Tweet;
