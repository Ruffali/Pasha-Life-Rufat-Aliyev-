import React from "react";
import classes from "./StructureAndBoxes.module.scss";

import Structure from "../Structure/Structure";
import Boxes from "../Boxes/Boxes";

const StructureAndBoxes = () => {
    return (
        <div className={classes.structure_and_boxes}>
            <Structure />
            <Boxes />
        </div>
    )
}

export default StructureAndBoxes;