import React from 'react';
import shopcss from './Shop.css';
import fakeData from '../../fakeData/index';

const Shop = () => {
    const Data=fakeData.slice(1,10);
    console.log(Data)
    return (
        <div className='products'>
           <div className="product">
           <h4>{Data.map(pd=><li>{(pd.name)}</li>)}</h4>
           </div>
           <div className="cart">
            <h3>this is cart</h3>
            </div>
        </div>
       
    );
};

export default Shop;