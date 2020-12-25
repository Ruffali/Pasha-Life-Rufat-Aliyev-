import React from "react";

import classes from "./FormsInput.module.scss"

const FormsInput = (props) => {
    switch (props.elementType) {
        case ("formsInput"):
            return <>
                <input
                    className={classes.input}
                    id={props.id}
                    value={props.value}
                    onChange={props.changed}
                    {...props.config}
                />
            </>
        case ("submit"):
            return <>
                <input
                    className={classes.submit}
                    onClick={props.clicked}
                    type={props.type}
                    value={props.value}
                />
            </>
        case ("button"):
            return <>
                <button
                    className={classes.button}
                    type={props.type}
                    value={props.value}>
                    {props.value}
                </button>
            </>
        default:
            return <>
                <input
                    className={classes.input}
                    id={props.id}
                    value={props.value}
                    {...props.config}
                />
            </>
    }

}

export default FormsInput;