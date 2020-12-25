import React from "react";
import classes from "./Contacts.module.scss";

import SideBar from "../../components/SideBar/SideBar";
import LinkMold from "../../components/LinkMold/LinkMold";

const Contacts = () => {
    return (
        <div className={classes.contacts}>
            <SideBar/>
            <LinkMold link={"Contacts"}/>
        </div>
    )
}

export default Contacts;