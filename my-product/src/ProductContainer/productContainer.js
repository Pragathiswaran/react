import React from 'react';
import classes from './ProductContain.module.css';

const ProductContainer = (props) => {
    return (
        <div className={classes.productContainer}>
            <img src={props.currentPrevImage} alt="Product Image"/>
                {
                    props.CurrentSelectedFeature === 1?
                    <div className={classes.heartBeatSection}>
                    <i className="fas fa-heartbeat"></i>
                    <p>78</p> 
                    </div>
                    :
                    <div className={classes.timeSection}>
                    <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
                    </div>
                   
                }
        </div>
    )
};

export default ProductContainer; 