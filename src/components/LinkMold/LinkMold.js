import React from "react";
import classes from "./LinkMold.module.scss"

const LinkMold = ({ link }) => {
    return (
        <div className={classes.link_mold}>{link}</div>
    )
}

export default LinkMold;