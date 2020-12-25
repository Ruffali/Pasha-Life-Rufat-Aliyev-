import React from "react";
import classes from "./Personal.module.scss";

import PersonalMold from "../../components/PersonalMold/PersonalMold";
import SideBar from "../../components/SideBar/SideBar";

const Personal = () => {
   
    return (
        <div className={classes.personal_page}>
            <SideBar/>
            <PersonalMold/>
        </div>
    )
}

export default Personal;