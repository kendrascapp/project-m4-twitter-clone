import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

function TweetSubmit({ setStatus }) {
  const [tweet, setTweet] = useState("");
  const handleSubmit = (event) => {
    const data = JSON.stringify({ status: tweet });
    event.preventDefault();
    fetch("/api/tweet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setStatus("loading");
        setTweet("");
      });
  };

  return (
    <>
      <TweetForm>
        <div>
          <form onSubmit={(event) => handleSubmit(event)}>
            <label>
              <textarea
                class="tweetBox"
                type="text"
                wrap="hard"
                placeholder="What's happening?"
                value={tweet}
                onChange={(e) => setTweet(e.target.value)}
              >
                <TweetText
                  type="text"
                  placeholder="write something..."
                  maxLength="280"
                  value={tweet}
                  onChange={(e) => setTweet(e.target.value)}
                ></TweetText>
              </textarea>
            </label>
            <input type="submit" className="meowBtn" value="Submit"></input>
          </form>
        </div>
      </TweetForm>
    </>
  );
}

const TweetText = styled.textarea`
  color: ${(tweet) => {
    const limit = tweet.value;
    if (limit.length >= 5 && limit.length <= 199) {
      return "magenta";
    } else if (limit.length >= 200 && limit.length <= 249) {
      return "red";
    } else if (limit.length >= 250 && limit.length <= 280) {
      return "hsl(258deg, 100%, 50%)";
    }
  }};
`;

const TweetForm = styled.div`
  border: 1px solid #ededed;
  form {
    display: flex;
    flex-direction: column;
    border-bottom: 8px solid #ededed;
    .tweetBox {
      width: 100%;
      height: 100px;
      padding: 20px;
      resize: none;
      font-size: 16px;
      font-family: sans-serif;
      border: none;
    }
    .meowBtn {
      align-self: flex-end;
      height: 50px;
      width: 100px;
      border-radius: 50px;
      color: white;
      font-size: 14px;
      background: ${COLORS.primary};
      font-family: sans-serif;
      text-transform: uppercase;
      font-weight: 800;
      margin-bottom: 8px;
    }
  }
`;

export default TweetSubmit;
