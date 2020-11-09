import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Form.css";
import { useStateValue } from "./StateProvider";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

function Form() {
  const classes = useStyles();
  //Get the dispatch function to be able to update the Global State
  const [, dispatch] = useStateValue();
  /* Used to get the latest uploaded file name, so we can update the Global State with it,
  so we can display it whenever or where ever we need. */
  const [fileName, setFileName] = useState("");

  //When a file is uploaded we save the file name in this component state.
  const handleChange = (e) => {
    //This is used to get only the name of the file not the full path.
    const name = e.target.value.replace(/.*[\/\\]/, "");
    setFileName(name);
  };

  /*On submitting the form we save the file name in the Global State to be displayed in 
  the File Details Component */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_FILE",
      file: fileName,
    });
    setFileName("");
  };

  return (
    <div className="form">
      <form className={classes.container} noValidate onSubmit={handleSubmit}>
        <TextField
          label="From Date"
          type="date"
          className="form__date"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          label="To Date"
          type="date"
          className="form__date"
          InputLabelProps={{
            shrink: true,
          }}
        />

        {
          /* In order to implement the upload button in a good looking way, so we'll instead
          style a label & hide the actual input tag as its complicated to edit it, & then we
          trigger the click events on the label & make the action to apply on the input. */
          //You can check the styles in Form.css file.
        }
        <div className="customInputFile">
          <input
            type="file"
            id="files"
            class="hidden"
            accept=".xlsx,.xls,.csv"
            onChange={handleChange}
          />
          {(fileName) ? (
            <label for="files">{fileName}</label>
          ) : (
            <label for="files">Field to Update an Excel File</label>
          )}
        </div>

        <button className="form__submitBtn" type="submit">
          Consult
        </button>
      </form>
    </div>
  );
}

export default Form;
