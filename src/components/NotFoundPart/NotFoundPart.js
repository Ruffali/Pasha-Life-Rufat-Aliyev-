import React from "react";
import classes from "./NotFoundPart.module.scss";
import { Link } from "react-router-dom";

const NotFoundPart = () => {
    return (
        <div className={classes.not_found_part}>
            <Link className={classes.home} to="/">Dashboard</Link>
            404
        </div>
    )
}

export default NotFoundPart;