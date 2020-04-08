import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Cat } from "../logo.svg";
import Icon from "react-icons-kit";
import { home } from "react-icons-kit/feather/home";
import { user } from "react-icons-kit/feather/user";
import { bell } from "react-icons-kit/feather/bell";
import { bookmark } from "react-icons-kit/feather/bookmark";
import { NavLink } from "react-router-dom";
import { COLORS } from "../constants";

const Sidebar = () => {
  return (
    <>
      <Route>
        <StyledContainer>
          <ul>
            <Cat />
            <li>
              <NavigationLink exact to="/">
                <Icon size={32} class="icon" icon={home}></Icon>Home
              </NavigationLink>
            </li>
            <li>
              <NavigationLink exact to="/profile">
                <Icon size={32} class="icon" icon={user}></Icon>Profile
              </NavigationLink>
            </li>
            <li>
              <NavigationLink exact to="/notifications">
                <Icon size={32} class="icon" icon={bell}></Icon>Notifications
              </NavigationLink>
            </li>
            <li>
              <NavigationLink exact to="/bookmarks">
                <Icon size={32} class="icon" icon={bookmark}></Icon>Bookmarks
              </NavigationLink>
            </li>
          </ul>
        </StyledContainer>
      </Route>
    </>
  );
};

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  margin: 7px;
  color: black;
  font-size: 20px;
  font-weight: bold;
  font-family: sans-serif;
  display: flex;

  &.active {
    color: ${COLORS.primary};
  }
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 0.25;
  ul {
    list-style: none;
  }
  li {
    .icon {
      padding-right: 16px;
      margin-top: -6px;
    }
    padding: 10px;
    background: white;
    &:hover {
      background: ${COLORS.secondary};
      border: 1px solid ${COLORS.secondary};
      border-radius: 50px;
    }
  }
`;

export default Sidebar;
