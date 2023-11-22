import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import {FaHome,FaFacebookMessenger} from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsLink} from 'react-icons/bs'



function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
   
      <a class="navbar-brand" href="#">You&Me Shope <AiOutlineShoppingCart/></a> 
  
  
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
          <li class="nav-item text-center mx-2 mx-lg-1">
            <Link to={'/'} class="nav-link active" aria-current="page" href="#!">
              <div>
                <i class="fas fa-home fa-lg mb-1"></i>
              </div>
              Home <FaHome/>
            </Link>
          </li>
          <li class="nav-item text-center mx-2 mx-lg-1">
            <a class="nav-link" href="#!">
              <div>
                <i class="far fa-envelope fa-lg mb-1"></i>
              </div>
              Link <BsLink/>
            </a>
          </li>
          <li class="nav-item dropdown text-center mx-2 mx-lg-1">
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
          <li class="nav-item text-center mx-2 mx-lg-1">
            <a class="nav-link" href="#!">
              <div>
                <i class="fas fa-bell fa-lg mb-1"></i>
            
              </div>
              Messages <FaFacebookMessenger/>
            </a>
          </li>
          <li class="nav-item text-center mx-2 mx-lg-1">
            <a class="nav-link" href="#!">
              <div>
                <i class="fas fa-globe-americas fa-lg mb-1"></i>
              </div>
              News
            </a>
          </li>
        </ul>
    
        <form class="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
          <input type="search" class="form-control" placeholder="Search" onChange={props.onChange} aria-label="Search" />
          <button class="btn btn-primary" type="button" data-mdb-ripple-color="dark">
            Search
          </button>
        </form>
      </div>
    </div>
    
  </nav>
  );
}

export default Navbar;

