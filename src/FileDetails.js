import React from "react";
import "./FileDetails.css";
import { useStateValue } from "./StateProvider";

function FileDetails() {
  //Get the file name from the Global State to display it, or a message if it's not uploaded yet.
  const [{ file }] = useStateValue();

  return (
    <div className="fileDetails">
      <h2 className="fileDetails__title">File Details</h2>
      <div className="fileDetails__info">
        <i className="fa fa-file-alt fileDetails__info__logo"></i>
        {file ? (
          <p className="fileDetails__info__fileName">{file}</p>
        ) : (
          <p className="fileDetails__info__fileName">No File Uploaded Yet</p>
        )}
      </div>
      
    </div>
  );
}

export default FileDetails;
