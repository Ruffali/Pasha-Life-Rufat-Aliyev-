import React from "react";
import classes from "./Settings.module.scss";

import SideBar from "../../components/SideBar/SideBar";
import LinkMold from "../../components/LinkMold/LinkMold";

const Settings = () => {
    return (
        <div className={classes.settings}>
            <SideBar/>
            <LinkMold link={"Settings"}/>
        </div>
    )
}

export default Settings;