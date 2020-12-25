import React from "react";
import classes from "./HomeTop.module.scss";
import ProfilePicture from "../ProfilePicture/ProfilePicture";

import natification from "./img/notification.png";
import person from "./img/person.svg";

const HomeTop = () => {
    return (
        <div className={classes.home_top}>
            <div className={classes.natification}>
                <img src={natification} alt="natification"/>
                <span></span>
            </div>
            <ProfilePicture img={person} alt={"person"} />
        </div>
    )
}

export default HomeTop;