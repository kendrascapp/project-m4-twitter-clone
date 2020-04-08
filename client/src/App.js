import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Bookmarks from "./components/Bookmarks";
import HomeFeed from "./components/HomeFeed";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import TweetDetails from "./components/TweetDetails";
import Sidebar from "./components/Sidebar";
import { CurrentUser } from "./components/CurrentUserContext";
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";
const App = () => {
  const { currentUser, status } = React.useContext(CurrentUser);
  return (
    <BigContainer>
      <BrowserRouter>
        <GlobalStyles />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <HomeFeed />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/bookmarks">
            <Bookmarks />
          </Route>
          <Route path="/tweet/:tweetId">
            <TweetDetails />
          </Route>
          <Route exact path="/:profileId">
            <Profile currentUser={currentUser} status={status}></Profile>
          </Route>
        </Switch>
      </BrowserRouter>
    </BigContainer>
  );
};
const BigContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default App;
