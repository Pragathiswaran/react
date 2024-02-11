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

myobj =[
    {
      id:1,
      title:"title",
      description:"welcome you all to my website.welcome you all to my website.welcome you all to my website.welcome you all to my website."
    },
    {
      id:2,
      title:"title",
      description:"welcome you all to my website.welcome you all to my website.welcome you all to my website.welcome you all to my website."
    },
    {
      id:3,
      title:"title",
      description:"welcome you all to my website.welcome you all to my website.welcome you all to my website.welcome you all to my website."
    }
  ]

 blow = isArrayEmpty(this.myobj) ? [] : this.myobj.map((e,pos)=>{
    return(
      <Blog key={pos} title={e.title} discription={e.description} id={e.id}/>
    )
  })

  buttons = () =>{
    this.setState({showBlog:false});
     console.log(this.showBlog);
  }

render() {
  return (
    <div className={classes.app}>
     <button onClick={this.buttons}>submit</button>
      <br></br>
      {
        // this.setState.showBlog === true ? this.blow : null
        this.blow
      }
    </div>
  );
};
}

export default App;
