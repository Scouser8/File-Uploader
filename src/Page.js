import React from "react";
import "./Page.css";
import Feeds from "./Feeds";
import SideBar from "./SideBar";
import { useStateValue } from "./StateProvider";

function Page() {
    /*Get the product name from Global State the we saved in the SideBar component when 
        selecting a specific product. */
  const [{ product }] = useStateValue();

  return (
    /* The page content container, dividing it into two parts to be able to apply styling
      in a better way using display:flex, so we have the SideBar which is fixed in the page
      on the left side, while on the right side we have our Navigation Bar (Tabs) & the inner 
      rendered pages including the File Upload tab */
    <div className="page">
      <div className="page__left">
        <SideBar />
      </div>
      <div className="page__right">
        <div className="page__right__content">
        {/* This is used as a title to determine which product we are working on. */}
          <h2>{product}</h2>
          <Feeds />
        </div>
      </div>
    </div>
  );
}

export default Page;
