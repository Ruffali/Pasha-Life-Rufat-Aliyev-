import React from "react";
import classes from "./Tasks.module.scss";

import SideBar from "../../components/SideBar/SideBar";
import LinkMold from "../../components/LinkMold/LinkMold";

const Tasks = () => {
    return (
        <div className={classes.tasks}>
            <SideBar/>
            <LinkMold link={"Tasks"}/>
        </div>
    )
}

export default Tasks;