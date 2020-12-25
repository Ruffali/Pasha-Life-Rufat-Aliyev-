import React from "react";
import classes from "./Email.module.scss";

import SideBar from "../../components/SideBar/SideBar";
import LinkMold from "../../components/LinkMold/LinkMold";

const Email = () => {
    return (
        <div className={classes.email}>
            <SideBar/>
            <LinkMold link={"Email"}/>
        </div>
    )
}

export default Email;