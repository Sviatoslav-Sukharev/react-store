import React from "react";
import Header from "../../components/Header/Header";
import "./Page.css";

const Page = ({children}) => {
  return (
    <div className="Page">
      <Header />
      <div className="main">
        {children}
      </div>
    </div>
  );
}

export default Page;