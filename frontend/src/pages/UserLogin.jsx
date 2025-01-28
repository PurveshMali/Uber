import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserSignup from "./UserSignup";

const UserLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
    }
  return (
    <div className="p-7 h-[100vh] flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
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
            New here?{" "}
            <Link to='/signup' className="mb-3 text-blue-600">Create new Account</Link>
          </p>
      </div>

      <div>
        <button className="bg-[#22a9ca] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">
          Sign In as Captain
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
