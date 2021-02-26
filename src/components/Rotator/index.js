import React, { useState } from "react";
import classNames from "classnames"
import styles from "./rotator.module.css"

const Rotator = ({flippety, floppety}) => {
    const [toggler, setToggler] = useState(false)
    const [rotate, setRotate] = useState(false)
    let flippetyDict = {};
    let floppetyDict = {};
    let rotateDict = {};

    flippetyDict[styles.displayNone] = toggler;
    floppetyDict[styles.displayNone] = !toggler;
    rotateDict[styles.rotator] = rotate;

    let flippetyClassnames = classNames(styles.flippety,  flippetyDict);
    let floppetyClassnames = classNames(styles.floppety,  floppetyDict);
    let rotateClassnames = classNames(rotateDict);

    function onClickRotate() {
        setRotate(true)
        setTimeout(toggle, 1000)
        setTimeout(setRotate, 2000, false)

    }
    function toggle() {
        setToggler(!toggler)
    }
    return (
        <div className={rotateClassnames} onClick={onClickRotate}>
            <div className={flippetyClassnames}>{flippety}</div>
            <div className={floppetyClassnames}>{floppety}</div>
        </div>
    );
};

export default Rotator;
