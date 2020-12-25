import React from "react";
import classes from "./Chat.module.scss";

import SideBar from "../../components/SideBar/SideBar";
import LinkMold from "../../components/LinkMold/LinkMold";

const Chat = () => {
    return (
        <div className={classes.chat}>
            <SideBar/>
            <LinkMold link={"Chat"}/>
        </div>
    )
}

export default Chat;