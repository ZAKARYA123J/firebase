import 'bootstrap/dist/css/bootstrap.min.css';
import {motion} from 'framer-motion'
import { useState } from 'react';

function Proditr(props){
  const[rotate,setRotate] = useState(false);
    return(
      <>
    <div className="card" style={{width:"19rem",margin:'9px'}}>
    <img src={props.product.image} style={{width:"100px", marginLeft:'50px'}} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h3  className="card-title">{props.product.category}</h3>
      <p className="card-text">{props.product.description}</p>
      <p >${props.product.price}</p>
      <motion.button 
        animate={{rotate:rotate ? 360 :0}}
        transition={{delay:0.5}} 
        onClick={() => setRotate(true)} 
        class="btn btn-primary">Go somewhere</motion.button>
      </div>
    </div>
    </>

    )
}
export default Proditr;