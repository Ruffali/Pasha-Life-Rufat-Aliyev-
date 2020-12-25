import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import SingleBox from "../SingleBox/SingleBox";

import classes from "./Boxes.module.scss"

const Boxes = ({ userData }) => {
    ///////////////////////////////////////////////////////////////////////////
    // Data
    const [data, setData] = useState([])

    ///////////////////////////////////////////////////////////////////////////
    // Save Redux Data to UseState
    useEffect(() => {
        const reduxData = [...userData.users];
        setData(reduxData)
    }, [userData.users])

    ///////////////////////////////////////////////////////////////////////////
    // First Box CLick and open 2 workers
    const clickHandle = () => {
        let copyData = [...data];
        copyData[0].isActice = !copyData[0].isActice;
        setData(copyData)
    }

    ///////////////////////////////////////////////////////////////////////////
    // Sub Box CLick and open each worker
    const subClickHandle = (id) => {
        let copyData = [...data];

        for (let index = 0; index < copyData[0].workers.length; index++) {
            if (copyData[0].workers[index].id === id) {
                copyData[0].workers[index].isActive = !copyData[0].workers[index].isActive
            }
        }
        setData(copyData)
    }

    return (
        <div className={classes.boxes}>
            <div >
                <SingleBox handler={clickHandle} data={userData.users[0]} />
            </div>
            {userData.users[0].isActice ?
                <div className={classes.bothSide}>
                    {userData.users[0].workers.map(worker => {
                        return <div key={worker.id} className={classes.singleSide}>
                            <SingleBox handler={() => subClickHandle(worker.id)} data={worker} />
                        </div>
                    })}
                </div>
                :
                null
            }
        </div>
    )
}

///////////////////////////////////////////////////////////////////////////
// Take data from Redux
const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

export default connect(mapStateToProps)(Boxes);