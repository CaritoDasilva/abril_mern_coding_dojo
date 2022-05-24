import React from "react";
import styles from '../views/Home.module.scss';

const Character = ({ name, image }) => {
    return (
        <div className={styles["card"]}>
            <h3>{name}</h3>
            <img src={image} alt="" />
        </div>
    )
}

export default Character;