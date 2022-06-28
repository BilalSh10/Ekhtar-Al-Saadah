import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminAuthContext } from "../../store/authContext/AuthContext";
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { logIn } = useAdminAuthContext();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/adminHome");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="biala">
    <div className="LoginFormCont">
      <form onSubmit = {submitHandler}>
        <h3 className="LoginTitle">Welcome!</h3>
        <p/>
        <div >
          <label className="LoginFormLabel" htmlFor= 'emailAdmin'>Email</label>
          <input className="EmailInput" type='text' required placeholder='Email' id='emailAdmin' onChange={(e) => setEmail(e.target.value)} />
          <p/>
          <label className="LoginFormLabel" htmlFor= 'passwordAdmin'>Password</label>
          <input className="PassInput" type='password' required placeholder='Password' id='passwordAdmin' autoComplete='on' onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="LoginButtonCont" >
          <button className="LoginButton">Login</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;