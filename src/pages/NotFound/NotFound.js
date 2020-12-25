import React from "react";
import classes from "./NotFound.module.scss";

import SideBar from "../../components/SideBar/SideBar";
import NotFoundPart from "../../components/NotFoundPart/NotFoundPart";

const NotFound = () => {
    return (
        <div className={classes.not_found}>
            <SideBar/>
            <NotFoundPart />
        </div>
    )
}

export default NotFound;