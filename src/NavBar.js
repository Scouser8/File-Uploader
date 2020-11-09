import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./NavBar.css";
import { useHistory } from "react-router";

/* Styles for the NavBar from Material UI */
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "#F5F5F5",
  },
});

function NavBar() {
  const classes = useStyles();

  //Update the value to put it in the Parent Tabs tag to switch between inner tabs
  const [value, setValue] = useState(0);

  //Using history hook to be able to change the page' pathname.
  //You'll find it in the onClick on each tab which is -> history.push()
  const history = useHistory();

  /* When switching between inner tabs, this triggers a change event on the Parent Tabs tag 
    & a value is passed, so we can use it to pass it to the value property to reflect the 
    switching actually to users. Notice: event must be passed, if not this will result in a bug 
    during navigation. */
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="navbar">
      <Paper className={classes.root}>
        <Tabs value={value} onChange={handleChange} indicatorColor="secondary">
          <Tab
            className="navbar__tab"
            label="File Upload"
            onClick={() => history.push("/")}
          />

          <Tab
            className="navbar__tab"
            label="Statistics"
            onClick={() => history.push("/Statistics")}
          />

          <Tab
            className="navbar__tab"
            label="Summary"
            onClick={() => history.push("/Summary")}
          />
        </Tabs>
      </Paper>
    </div>
  );
}

export default NavBar;
