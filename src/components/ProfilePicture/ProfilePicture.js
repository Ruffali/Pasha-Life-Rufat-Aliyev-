import React from "react";
import classes from "./ProfilePicture.module.scss";

const ProfilePicture = ({img, alt}) => {
    return (
        <>
            <div className={classes.profile_picture}>
                <img src={img} alt={alt} />
            </div>
        </>
    )
}

export default ProfilePicture;