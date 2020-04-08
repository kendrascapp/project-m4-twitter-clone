import React from "react";
import styled from "styled-components";
import CircularProgress from "material-ui-core/CircularProgress";
import Icon from "react-icons-kit";
import { mapPin } from "react-icons-kit/feather/mapPin";
import { calendar } from "react-icons-kit/feather/calendar";

const Profile = ({ currentUser, status }) => {
  console.log(currentUser, status);
  return (
    <>
      {status === "loading" ? (
        <CircularProgress />
      ) : (
        Object.values(currentUser).map((value) => {
          const dateFormat = new Date(value.joined);
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
          let yearNumber = dateFormat.getFullYear();
          return (
            <>
              <Wrapper>
                <Banner src={value.bannerSrc}></Banner>
                <Avatar src={value.avatarSrc}></Avatar>
                <div class="name">{value.displayName}</div>
                <div class="handle">@{value.handle}</div>
                <div class="bio">{value.bio}</div>
                <div class="locationDate" />
                <div class="location">
                  <Icon size={18} class="icon" icon={mapPin}></Icon>
                  {value.location}
                </div>
                <div class="date">
                  <Icon size={18} class="icon" icon={calendar}></Icon>
                  {"Joined " + monthName + " " + yearNumber}
                </div>
                <div class="followInfo">
                  <div class="follow">
                    <span>1</span> Following{" "}
                  </div>
                  <div class="follow">
                    <span>1</span> Followers
                  </div>
                </div>
                <div class="usersContent">
                  <div class="tweets">Tweets</div>
                  <div class="media">Media</div>
                  <div class="likes">Likes</div>
                </div>
              </Wrapper>
            </>
          );
        })
      )}
    </>
  );
};

const Banner = styled.img`
  display: block;
  max-width: 100%;
  max-height: 300px;
  width: auto;
  height: auto;
`;

const Avatar = styled.img`
  width: 98px;
  height: 98px;
  border-radius: 50%;
  margin-top: -50px;
  margin-left: 20px;
  border: 3px solid white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .name,
  .handle,
  .bio,
  .date,
  .location,
  .tweets,
  .media,
  .likes {
    font-family: sans-serif;
  }
  .name {
    font-weight: bold;
  }
  .handle {
    font-size: 14px;
    color: #696969;
  }
  .handle,
  .bio,
  .date {
    padding-bottom: 10px;
  }
  .location {
    padding-right: 10px;
  }
  .locationDate {
    display: flex;
    flex-direction: row;
    color: #696969;
    .icon {
      margin-right: 5px;
    }
  }
  .followInfo {
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    .follow {
      font-family: sans-serif;
      padding-right: 5px;
      color: #696969;
      span {
        font-family: sans-serif;
        font-weight: bold;
        color: black;
      }
    }
  }
  .usersContent {
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default Profile;
