import React from "react";

import { dumplogs } from "./utils";

import classes from "./blog.module.css";

const blog = (pro) => {
    // console.log(pro);
    dumplogs(pro);
    return(
        <div className={classes.card}>
            <h2>{pro.id}.{pro.title}</h2>
            <p>{pro.discription}</p>
        </div>
    )
};

export default blog;