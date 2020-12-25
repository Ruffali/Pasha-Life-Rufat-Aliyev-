import React, { useEffect, useState } from "react";
import HomeTop from "../HomeTop/HomeTop";
import classes from "./PersonalMold.module.scss";
import './PersonalMold.css'
import SingleBox from "../SingleBox/SingleBox";
import Back from "../Back/Back";
import { connect } from "react-redux";
import Info from "../Info/Info";

const PersonalMold = ({ userData }) => {
    ///////////////////////////////////////////////////////////////////////////
    // UseState Data
    const [dataMain, setDataMain] = useState([])

    ///////////////////////////////////////////////////////////////////////////
    // Sending Single User Redux Data to UseState
    useEffect(() => {
        setDataMain(userData)
    },[userData])

    return (
        <div className={classes.personal_mold}>
            <HomeTop />
            <Back />
            <div className={classes.both}>
                {dataMain != '' ?
                    <>
                        <SingleBox icon={true} data={dataMain} />
                        <Info />
                    </> :
                    <div>İstifadəçi yoxdur</div>
                }

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.singleUser.singleUser
    }
}

export default connect(mapStateToProps)(PersonalMold);