import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'; // Combine imports for better readability
import { useState } from 'react';
import {Link} from 'react-router-dom'
import {FaFacebook,FaGoogle} from 'react-icons/fa'
import {motion} from 'framer-motion'

const firebaseConfig = {
  apiKey: "AIzaSyAjJKHRmGuFAGsoB-l7EvMMiYOC9uw0pFI",
  authDomain: "test-c9520.firebaseapp.com",
  projectId: "test-c9520",
  storageBucket: "test-c9520.appspot.com",
  messagingSenderId: "118805184375",
  appId: "1:118805184375:web:59a6320bd1b71f0301ab72",
  measurementId: "G-N8LZ42D8PR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


function Sign({userLog}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password); // Use signInWithEmailAndPassword for sign-in
      // Handle successful sign-in here (e.g., redirect to another page)
    } catch (error) {
      // Handle sign-in errors here (e.g., display an error message)
      console.error("Sign-in error:", error);
    }
  }

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      // Handle successful Google Sign-In here
    } catch (error) {
      // Handle sign-in errors here (e.g., display an error message)
      console.error("Sign-in error:", error);
    }
  }

  const signout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  }
  const imageva = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <div>
<section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <motion.img    initial="hidden"
      animate="visible"
      variants={imageva} src="https://thumbs.dreamstime.com/b/shop-logo-good-bag-cart-183763553.jpg"
          class="img-fluid" alt="Phone image"/>
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
          {userLog?<p>{userLog.email}</p>:<p>not fund</p>}
          <div class="form-outline mb-4">
            <input type="email" id="form1Example13" onChange={(e)=>setEmail(e.target.value)} class="form-control form-control-lg" />
            <label class="form-label" for="form1Example13" >Email address</label>
          </div>


          <div class="form-outline mb-4">
            <input type="password" id="form1Example23" onChange={(e)=>setPassword(e.target.value)} class="form-control form-control-lg" />
            <label class="form-label" for="form1Example23">Password</label>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
          
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label class="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>
          <Link to={"/clouting"} class="btn btn-primary btn-lg btn-block" onClick={signIn}>Log in</Link>     <div className="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

          <a class="btn btn-primary btn-lg btn-block" style={{backgroundColor: "#3b5998"} }href="#!"
            role="button">
            <i class="fab fa-facebook-f me-2"></i>Continue with Facebook<FaFacebook/>
          </a>
          <a class="btn btn-primary btn-lg btn-block"onClick={signInWithGoogle} style={{backgroundColor:" #55acee"}} href="#!"
            role="button">
            <i class="fab fa-twitter me-2" ></i>Continue with Google  <FaGoogle/></a>
          <a class="btn btn-primary btn-lg btn-block" onClick={signout} style={{backgroundColor:" #55acee"}} href="#!"
            role="button">
            <i class="fab fa-twitter me-2" ></i>Sinout</a>

        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export {Sign,auth};
