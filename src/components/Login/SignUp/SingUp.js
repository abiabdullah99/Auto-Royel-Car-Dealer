import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const SingUp = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

//   Error handle State 

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

//   Pass Show Handle State

  const [showPass, setShowPass] = useState(false);

//   Create Email And password User && E-mail Verify----

  const [createUserWithEmailAndPassword, user, , hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

//  email Value Handle 

  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    // error handling

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

//   Pass Value Handle 

  const handlePassword = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);

    // error handling

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "minimum 6 digit Use" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

//   Confirm Pass Value Handle 

  const handleConfirmPasswordchange = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPassword: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Password Don't Match" });
      setUserInfo({ ...userInfo, confirmPassword: "" });
    }
  };

// Submit From Handle 

  const handleLogin = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };

//   FireBase Hook Error Handle 

  useEffect(() => {
    if (hookError) {
      switch (hookError?.code) {
        case "auth/invalid-email":
          toast("Invalid email provided, please provide a valid email");
          break;

        case "auth/invalid-password":
          toast("Wrong password. Intruder!!");
          break;
        default:
          toast("something went wrong");
      }
    }
  }, [hookError]);

//   Navigate User 

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  return (
    <div>
      <form className="form-container" onSubmit={handleLogin}>
        <div className="form-info">
          <h2 className="form-title font-mono">Please Register</h2>
          <div>
            <input
              onChange={handleEmailChange}
              type="text"
              placeholder="Enter Your E-mail"
              required
            />
            {errors?.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="pass">
            <input
              onChange={handlePassword}
              type={showPass ? "text" : "password"}
              placeholder="Enter Your Password"
              required
            />
            {errors?.password && <p className="error">{errors.password}</p>}
            <p className="show-pass" onClick={() => setShowPass(!showPass)}>
             🧿
            </p>
          </div>
          <div>
            <input
              onChange={handleConfirmPasswordchange}
              name="confirm-pass"
              type="password"
              placeholder="Confrim Password"
              required
            />
          </div>
          <button className="form-btn">Sing Up</button>
          <p className=" ml-3 font-mono">
            Already have an account? 
            <Link className="text-red-500 ml-2 underline" to="/login">
               Login Here
            </Link>
          </p>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default SingUp;
