import React from "react";
import classes from "./Back.module.scss";
import { Link } from "react-router-dom";

import back from "./img/back.svg"

const Back = () => {
    return (
        <Link className={classes.back} to="/">
            <div className={classes.img_div}>
                <img src={back} alt="back" />
            </div>
            Geri qayıt
        </Link>
    )
}

export default Back;