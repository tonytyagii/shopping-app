import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { items } from "./Data.jsx";
import Product from './Product.jsx';
import { ToastContainer, toast } from "react-toastify";

const ProductDetails = ({cart, setCart}) => {
   const { id } = useParams()
    
   const [product, setProduct] = useState({});
   const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
      const filterProduct = items.filter((product) => product.id == id);
      // console.log(filterProduct)
      setProduct(filterProduct[0]);

      const relatedProducts = items.filter((p) => p.category === product.category)
     
      setRelatedProducts(relatedProducts)
    }, [id, product.category])

     const addToCart = (id, price, title, description, imgSrc) => {
        const obj = {
          id,
          price,
          title,
          description,
          imgSrc,
        };
        setCart([...cart, obj]);
    
        console.log("cart element", cart);
    
        toast.success(`Item added on cart`, {
          position: "top-right",
          autoClose: 11500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      };


    
  return (
    <>

          <ToastContainer
            position="top-right"
            autoClose={11500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
    <div>
      
        <div className="container con">
          <div className="img">
             <img id='img' src={product.imgSrc} />
          </div>

          <div className='text-center'>
          <h1 className="card-title">{product.title}</h1>
                  <p className="card-text">
                   {product.description}
                  </p>
                 <button className="btn btn-primary mx-3">₹ {product.price}</button>
              
                 <button
                        onClick={() =>
                          addToCart(
                            product.id,
                            product.price,
                            product.title,
                            product.description,
                            product.imgSrc
                          )
                        }
                        className="btn btn-warning"
                      >
                        Add To Cart
                      </button>
          </div>
        </div>
      
    </div>
    <h1 className="text-center">Related Products</h1>
    <Product cart={cart} setCart={setCart} items={relatedProducts}/>
    </>

    
  )
}

export default ProductDetails