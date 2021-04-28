import Contacts from "components/Contacts";
import Conversations from "components/Conversations";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className='h-100 d-flex flex-column'>
        <div className="d-flex flex-column flex-grow-1">
          <Conversations></Conversations>
        </div>
        <div className="d-flex flex-column flex-grow-1">
          <Contacts></Contacts>
        </div>
      </div>
    </>
  )
};

export default Sidebar;
