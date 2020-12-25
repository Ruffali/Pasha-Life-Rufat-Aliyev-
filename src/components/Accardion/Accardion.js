import React from "react";
import classes from "./Accardion.module.scss";
import "./Accardion.css";

import arrow from "./img/arrow.svg";

const Accardion = ({ sturcture, onClickAccardion, isActice, setSubstructure }) => {

    return (
        <>
            {
                <div key={sturcture.id} className={`${"stucture_list"} ${classes.parts}`}>
                    <div onClick={onClickAccardion} className={classes.head_section}>
                        <div className={classes.structure_title}>
                            {sturcture.name}
                        </div>
                        <ul className={classes.structure_parts_ul}>
                            {sturcture.parts.map((part) => {
                                return <li key={part.id} className={`structure_parts_${part.color}`}>{part.text}</li>
                            })}
                        </ul>
                        {isActice ?
                            <img className={classes.arrow_up} src={arrow} alt="arrow" />
                            :
                            <img className={classes.arrow} src={arrow} alt="arrow" />
                        }

                    </div>
                    {isActice ?
                        <div className={classes.subStucture}>
                            {sturcture.subStructure.map((substr) => {
                                return <div onClick={() => setSubstructure(sturcture.id, substr.id)} key={substr.id} className={classes.subStucture_parts}>
                                    <div className={classes.subStucture_parts_title}>
                                        {substr.name}
                                    </div>
                                    <ul className={classes.subStucture_parts_ul}>
                                        {substr.parts ? substr.parts.map((part) => {
                                            return <li key={part.id} className={`subStucture_parts_${part.color}`}>{part.text}</li>
                                        }) : ''}
                                    </ul>
                                    {substr.isActive ?
                                        <div className={classes.subBranch_parts}>
                                            {substr.subBranch ? substr.subBranch.map((subBr) => {
                                                return <div key={subBr.id} className={classes.subBranch_parts_title}>
                                                    {subBr.text}
                                                </div>
                                            }) : ''}
                                        </div> : null
                                    }

                                </div>
                            })}
                        </div> : null
                    }

                </div>
            }

        </>
    )
}

export default Accardion;