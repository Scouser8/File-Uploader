import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./SideBar.css";
import { useStateValue } from "./StateProvider";

function SideBar() {
  //Get the dispatch function to be able to update the Global State
  const [, dispatch] = useStateValue();

  /* On clicking on a product on the sidebar, we set the file in Global State to null
   to not have the old file being available for the wrong product. Ofcourse this is just
   a temporary solution as you might need the file of the previous product if you go back
   to it */
  const handleClick = () => {
    dispatch({
      type: "SET_FILE",
      file: null,
    });
  };

  return (
    <div className="sidebar-container">
    {/* A ready component used from React sidenav */}
      <SideNav
        className="sidebar-container__sidebar"
        onSelect={(selected) => {
          /*The product name will be automatically passed on Selection, so we can save it,
            & use it globally to display the product name in the feeds, or use it in the future.*/
          dispatch({
            type: "UPDATE_PRODUCT",
            product: selected,
          });
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="Computers" className="sidebar__sidenav">
          <NavItem className="n-item" eventKey="Computers">
            <NavIcon onClick={handleClick}>
              <i className="fa fa-laptop" style={{ fontSize: "2em" }} />
            </NavIcon>
            <NavText>Computers</NavText>
          </NavItem>
          <NavItem className="n-item" eventKey="Mobile Phones">
            <NavIcon onClick={handleClick}>
              <i className="fa fa-fw fa-mobile" style={{ fontSize: "2.5em" }} />
            </NavIcon>
            <NavText>Mobile Phones</NavText>
          </NavItem>

          <span className="last"></span>

          <NavItem className="sidebar-container__logout">
            <NavIcon>
              <i
                class="fa fa-fw fa-power-off"
                style={{ fontSize: "2em", marginTop: "13px" }}
              />
            </NavIcon>
            <NavText
              className="sidebar__text"
              style={{ fontSize: "18px", fontWeight: "600" }}
            >
              Logout
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}

export default SideBar;
