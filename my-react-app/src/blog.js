import React from "react";

import { dumplogs } from "./utils";

import classes from "./blog.module.css";

const blog = (props) => {
    // onCountLike = () =>{
    //     this.setState((prevState, prevProps)=>{
    //         return {likeCount: prevState.likeCount + 1}
    //     });
    // }

    dumplogs(props);
    return(
        <div className={classes.card}>
            <h2>{props.id}.{props.title}</h2>
            <p>{props.discription}</p>

            <p>like count :<span>{props.likecount}</span></p>
            <button onClick={props.onClickCounted}>Like</button>
        </div>
    )
}

export default blog;