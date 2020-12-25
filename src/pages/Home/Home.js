import React from "react";
import classes from "./Home.module.scss";

import HomeMold from "../../components/HomeMold/HomeMold";
import SideBar from "../../components/SideBar/SideBar";

const Home = () => {
    return (
        <div className={classes.home_page}>
            <SideBar/>
            <HomeMold/>
        </div>
    )
}

export default Home;