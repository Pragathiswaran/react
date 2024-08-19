import React from "react";

// import { dumplogs } from "./utils";

import classes from "./blog.module.css";

class blog extends React.Component {
    // onCountLike = () =>{
    //     this.setState((prevState, prevProps)=>{
    //         return {likeCount: prevState.likeCount + 1}
    //     });
    // }

    // dumplogs(props);

    // console.log("blog rendered")
componentWillUnmount(){
    console.log("Blog component will unmount");
}
    render(){
        return(
            <div className={classes.card}>
                <h2>{this.id}.{this.title}</h2>
                <p>{this.discription}</p>
    
                <p>like count :<span>{this.likecount}</span></p>
                <button onClick={this.onClickCounted}>Like</button>
            </div>
        )
    }
    
}

export default blog;