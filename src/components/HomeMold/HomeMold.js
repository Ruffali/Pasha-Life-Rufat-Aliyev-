import React from "react";
import HomeTop from "../HomeTop/HomeTop";
import classes from "./HomeMold.module.scss";

import Search from "../Search/Search";
import StructureAndBoxes from "../StructureAndBoxes/StructureAndBoxes";

const HomeMold = () => {
    return (
        <div className={classes.home_mold}>
            <HomeTop />
            <Search />
            <StructureAndBoxes />
        </div>
    )
}

export default HomeMold;