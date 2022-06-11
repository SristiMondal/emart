import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { addCart, delCart } from '../redux/action';

function Cart() {
  const dispatch = useDispatch();
  const products= useSelector((state) => state.handleCart);

  const handleButton=(product, type)=>{
    if(type == "dec"){
      dispatch(delCart(product));
    } else {
      dispatch(addCart(product));
    }
    
}
  return (
    <div>
      <div>
      {products.map((product)=>(
        <div className='row'>
          <div className='col-md-4'>
            <img src={product.image} alt={product.title} height="200px" width="180px"/>
          </div>
          <div className='col-md-4'>
              <h3>{product.title}</h3>
              <p className='lead fw-bold'>
                {product.qty} X ${product.price}=$ {product.qty*product.price}
              </p>
              <button className='btn btn-outline-dark me-4' 
              onClick={()=>handleButton(product, "dec")}
              >
                  <i className='fa fa-minus'></i>
              </button>
              <button className='btn btn-outline-dark' 
              onClick={()=>handleButton(product, "inc")}
              >
                  <i className='fa fa-plus'></i>
              </button>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Cart;