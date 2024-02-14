import React from "react";
import { GoogleButton } from "react-google-button";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../components/Firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const history = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      const currentUser = auth.currentUser;
      if (currentUser) {
        history("/home");
      } else {
        console.log("User is not signed in.");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="d-flex row">
        <div className=" col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
  <div className="w-50 text-center text-light">
    <h1 className="h1">LOGIN</h1>
    <p>
      consequatur, commodi asperiores unde, quod dignissimos dolorem debitis,
      id in ducimus. Molestias commodi necessitatibus officiis!
    </p>
    <div>
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  </div>
</div>
        </div>
        <div className=" col-lg-6 col-md-6 col-sm-12 col-12 ">
          <div className="h-100"> 
          <img
              style={{ width: "100%", height:"50vh"}}
              src="https://i.pinimg.com/236x/f4/10/5d/f4105d0172ad466e92ac2b4788cff527.jpg"
              alt=""
            />
            <img
              style={{ width: "100%", height:"50vh"}}
              src="https://t3.ftcdn.net/jpg/03/36/05/88/240_F_336058881_JS6E42vYRoEm4DiORXBxst2s2PagU0Xe.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
