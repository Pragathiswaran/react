import React from 'react';

import classes from './productData.module.css';

const productData = (Props) =>{
    const colorOptions = Props.data.colorOptions.map((item,pos)=>{

        const classArr = [classes.productImage];
        if(pos === Props.currentPrevImagepos){
            classArr.push(classes.selectedproductImage);
        }
        return(
            <img className={classArr.join(' ')}src={item.imageUrl} alt={item.styleName} 
            onClick={()=>Props.onClickChangeImage(pos)} key={pos}/>
        );
    })

    const FeatureTime = Props.data.featureList.map((item,pos)=>{

        const classArr = [classes.featureTime];
        if(pos === Props.CurrentSelectedFeature){
        classArr.push(classes.selectedfeatureTime);
        } 
       return(
        <button className={classArr.join(' ')} key={pos} onClick={()=>Props.onFeatureItem(pos)}>{item}</button>
       )
    })
    return(
        <div className={classes.productData}>
            <h1 className={classes.productTitle}>{Props.data.title}</h1>
            <p className={classes.productDiscription}>{Props.data.description}</p>

            <h3 className={classes.selection}>Select Product</h3>
              <div className={classes.productSelector}> 
              {colorOptions}
              </div>

            <h3 className={classes.selection}>Feature</h3>
            <div>
              {FeatureTime}
            </div>
            <button className={classes.buyNow}>Buy Now</button>
        </div>
    )
}

export default productData;