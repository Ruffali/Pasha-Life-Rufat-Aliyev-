import React from "react";
import ImgAndInfo from "../ImgAndInfo/ImgAndInfo";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSingleUser } from "../../redux/index";
import classes from "./SingleBox.module.scss"
import './SingleBox.css';
import view from "./img/view.svg"
import mail from "./img/mail.svg"

const SingleBox = ({ data, handler, icon, fetchSingleUser }) => {
    ///////////////////////////////////////////////////////////////////////////
    // Sending Dta to SingleUser Redux
    const sendDataHandler = (data, e) => {
        e.stopPropagation();
        fetchSingleUser(data)
    }

    return (
        <>
            {/* /////////////////////////////////////////////////////////////////////////// */}
            {/* // first to side workers slide Down */}
            {icon ? null :
                data.topLine ?
                    <div className={`${classes.top_line} ${data.linePosition}`} >
                        <img src={data.topLine} alt="topLine" />
                    </div> : ''
            }
            <div onClick={handler} className={classes.single_box}>
                <ImgAndInfo person={data.img} alt={"person"} name={data.name} email={data.email} />
                <ul className={classes.structure_parts_ul}>
                    <li className={classes.structure_parts_purple}>{data.purpleData}</li>
                    <li className={classes.structure_parts_blue}>{data.blueData}</li>
                    <li className={classes.structure_parts_green}>{data.greenData}</li>
                    <li className={classes.structure_parts_yellow}>{data.yellowData}</li>
                </ul>
                <div className={classes.doublePos}>
                    <div className={classes.doublePos_left}>
                        <div className={classes.doublePos_left_top}>
                            Struktur
                    </div>
                        <div className={classes.doublePos_left_bottom}>
                            {data.structure}
                        </div>
                    </div>
                    <div className={classes.doublePos_right}>
                        <div className={classes.doublePos_right_top}>
                            Vəzifə
                    </div>
                        <div className={classes.doublePos_right_bottom}>
                            {data.position}
                        </div>
                    </div>
                </div>
                <div className={classes.buttons}>
                    <Link onClick={(e) => sendDataHandler(data, e)} className={`${classes.view}`} to="/personal">
                        <img src={view} alt="view" /> Bax
                    </Link>
                    <div className={classes.mail}>
                        <img src={mail} alt="mail" /> Mail at
                    </div>
                </div>
            </div>

            {/* /////////////////////////////////////////////////////////////////////////// */}
            {/* // Sub workers slide Down */}
            {data.isActive ?
                <>
                    <div className={`${classes.last_box} ${"over"}`}>
                        {data.workers[0].topLine ?
                            <div className={`${classes.top_line} ${classes.line_throw}`} >
                                <img src={data.workers[0].topLine} alt="topLine" />
                            </div> : ''}
                        <div className={`${classes.single_box} `} >

                            <ImgAndInfo person={data.workers[0].img} alt={"person"} name={data.workers[0].name} email={data.workers[0].email} />
                            <ul className={classes.structure_parts_ul}>
                                <li className={classes.structure_parts_purple}>{data.workers[0].purpleData}</li>
                                <li className={classes.structure_parts_blue}>{data.workers[0].blueData}</li>
                                <li className={classes.structure_parts_green}>{data.workers[0].greenData}</li>
                                <li className={classes.structure_parts_yellow}>{data.workers[0].yellowData}</li>
                            </ul>
                            <div className={classes.doublePos}>
                                <div className={classes.doublePos_left}>
                                    <div className={classes.doublePos_left_top}>
                                        Struktur
                                    </div>
                                    <div className={classes.doublePos_left_bottom}>
                                        {data.workers[0].structure}
                                    </div>
                                </div>
                                <div className={classes.doublePos_right}>
                                    <div className={classes.doublePos_right_top}>
                                        Vəzifə
                                    </div>
                                    <div className={classes.doublePos_right_bottom}>
                                        {data.workers[0].position}
                                    </div>
                                </div>
                            </div>
                            <div className={classes.buttons}>
                                <Link onClick={(e) => sendDataHandler(data.workers[0], e)} className={classes.view} to='/personal'>
                                    <img src={view} alt="view" /> Bax
                                </Link>
                                <div className={classes.mail}>
                                    <img src={mail} alt="mail" /> Mail at
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                : null
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.singleUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSingleUser: (data) => { dispatch(fetchSingleUser(data)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBox);