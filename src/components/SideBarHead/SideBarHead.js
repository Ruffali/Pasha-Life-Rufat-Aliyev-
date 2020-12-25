import React from "react";
import classes from "./SideBarHead.module.scss";

import person from "./img/person.svg";
import ImgAndInfo from "../ImgAndInfo/ImgAndInfo";

const SideBarHead = () => {
    return (
        <>
            <div className={classes.side_bar_head}>
                <ImgAndInfo person={person} alt={"person"} name={"Pasha Life"} email={"Pashalife@mail.com"}/>
            </div>
        </>
    )
}

export default SideBarHead;