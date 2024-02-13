// App.js
import React, { Component } from 'react';
import classes from './App.module.css';
import ProductContainer from './ProductContainer/productContainer';
import ProductData from './Productdata/productData';
import NavBar from './navbar/navBar';
import Product from './Utils/product';

class App extends Component {
  state = {
    product: Product,
    currentPrevImagepos:0,
    // showCurrentImageValue: false,
    CurrentSelectedFeature:0
  };

  onClickChangeImage = (pos) =>{
    this.setState({currentPrevImagepos:pos});
  }

  onFeatureItem = (pos) =>{
    // let updatedState = false;
    // if(pos === 1){
    //   updatedState = true;
    // }
    this.setState({CurrentSelectedFeature:pos});
  }

  // shouldComponentUpdate (nextProps, nextState) {
  //   // console.log('Next State => ', nextState)
  //   // console.log('Current State => ', this.state);
  //   if(nextState.currentPrevImagepos === this.state.currentPrevImagepos){
  //     return false;
  //   }

  //   return true;
  // }

  render() {

    console.log("App.js render called");
    return (
      <div className="App">
        <NavBar />
        <div className={classes.mainContainer}>
          <div className={classes.productContainer}>
            <ProductContainer currentPrevImage={this.state.product.colorOptions[this.state.currentPrevImagepos].imageUrl} 
            CurrentSelectedFeature={this.state.CurrentSelectedFeature} />
          </div>
          <div className={classes.productData}>
            <ProductData data={this.state.product} onClickChangeImage={this.onClickChangeImage} 
            currentPrevImagepos={this.state.currentPrevImagepos}  onFeatureItem={this. onFeatureItem}
            CurrentSelectedFeature={this.state.CurrentSelectedFeature}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
