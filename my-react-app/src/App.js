// import logo from './logo.svg';
// import './App.css';
import Blog from './blog';
import classes from "./blog.module.css";
import React,{Component} from 'react';
import { isArrayEmpty } from './utils';

class App extends Component {
  state = {
    showBlog:true
  }
state = {
  myobj:[
      {
        id:1,
        title:"title",
        description:"welcome you all to my website.welcome you all to my website.welcome you all to my website.welcome you all to my website.",
        likecount : 0
      },
      {
        id:2,
        title:"title",
        description:"welcome you all to my website.welcome you all to my website.welcome you all to my website.welcome you all to my website.",
        likecount : 0
      },
      {
        id:3,
        title:"title",
        description:"welcome you all to my website.welcome you all to my website.welcome you all to my website.welcome you all to my website.",
        likecount:0
      }
    ]
};


  onClickCount = (pos) => {
    // alert("clicked =>" + pos);
    const updatedbloglist = this.state.myobj;
    const updatedblogobj = updatedbloglist[pos];

    updatedblogobj.likecount = updatedblogobj.likecount + 1;
    updatedbloglist[pos] = updatedblogobj;
    console.log(updatedblogobj);
    this.setState({myobj:updatedbloglist});
  }
 
  buttons = () =>{
    // let updateState = !this.state.showBlog;
    this.setState((prevState, prevProps)=>{
      // console.log(prevProps);
      return{showBlog: !prevState.showBlog}
    });
    //  console.log(this.state.showBlog);
  }

render() {

  // console.log(this.state)

 const blow = isArrayEmpty(this.state.myobj) ? [] : this.state.myobj.map((e,pos)=>{
    return(
      <Blog key={pos} title={e.title} discription={e.description} id={e.id} likecount={e.likecount}
       onClickCounted={() =>this.onClickCount(pos)} />
    )
  });
  return (
    <div className={classes.app}>
     <button className={classes.btn} onClick={this.buttons}>{this.state.showBlog ? "Hide Blogs" : "Show Blogs"}</button>
      <br></br>
      {
        this.state.showBlog ? blow : null
        // this.blow
      }
    </div>
  );
};
}

export default App;
