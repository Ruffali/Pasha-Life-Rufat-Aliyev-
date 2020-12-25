import React from "react";
import classes from "./SideBar.module.scss";

import SideBarHead from "../../components/SideBarHead/SideBarHead";
import SideBarMenu from "../SideBarMenu/SideBarMenu";

const SideBar = () => {
    return (
        <div className={classes.side_bar}>
            <SideBarHead/>
            <SideBarMenu/>
        </div>
    )
}

export default SideBar;