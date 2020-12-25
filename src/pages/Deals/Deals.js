import React from "react";
import classes from "./Deals.module.scss";

import SideBar from "../../components/SideBar/SideBar";
import LinkMold from "../../components/LinkMold/LinkMold";

const Deals = () => {
    return (
        <div className={classes.deals}>
            <SideBar/>
            <LinkMold link={"Deals"}/>
        </div>
    )
}

export default Deals;