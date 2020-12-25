import React from "react";
import classes from "./ImgAndInfo.module.scss";
import ProfilePicture from "../ProfilePicture/ProfilePicture";

const ImgAndInfo = ({person, alt, name, email}) => {
    return (
        <>
            <div className={classes.side_bar_head}>
                <ProfilePicture img={person} alt={alt}/>
                <div className={classes.info}>
                    <div className={classes.name}>
                        {name}
                    </div>
                    <div className={classes.email}>
                        {email}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImgAndInfo;