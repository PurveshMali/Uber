import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        setCaptainData({
          email: email,
          password: password,
        });
        
        setEmail('')
        setPassword('')
    }
  return (
    <div className="p-7 h-[100vh] flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-5"
          src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png"
          alt="Logo"
        />
        <form action="" onSubmit={(e) => {
            submitHandler(e)
        }}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
            className=" bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            type="email"
            required
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            required
            placeholder="password"
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>

          
        </form>
        <p className="text-center">
            Join a fleet?{" "}
            <Link to='/captain-signup' className="mb-3 text-blue-600">Register as a captain</Link>
          </p>
      </div>

      <div>
        <Link to="/login" className="bg-[#f96b57] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">
          Sign In as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
