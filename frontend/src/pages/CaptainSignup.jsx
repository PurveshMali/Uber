import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})
  
    const submitHandler = (e) => {
      e.preventDefault();
      setUserData({
        fullName:{
          firstName: firstName,
          lastName: lastName
        },
        email: email,
        password: password,
      });
      
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    };
  return (
    <div className="py-7 px-5 h-[100vh] flex flex-col justify-between">
          <div>
          <img
          className="w-20 mb-5"
          src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png"
          alt="Logo"
        />
            <form
              action=""
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <h3 className="text-lg font-bold mb-2">What's your Name</h3>
    
              <div className="flex gap-4 mb-6">
                <input
                  className=" bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-base"
                  type="text"
                  required
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
    
                <input
                  className=" bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-base "
                  type="text"
                  required
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
    
              <h3 className="text-lg font-bold mb-2">What's your email</h3>
              <input
                className=" bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
                type="email"
                required
                placeholder="email@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
    
              <h3 className="text-lg font-bold mb-2">Enter Password</h3>
              <input
                className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                type="password"
                required
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
    
              <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
                Login
              </button>
            </form>
            <p className="text-center">
              Alreadyy have an account?{" "}
              <Link to="/captain-login" className="mb-3 text-blue-600">
                Login here
              </Link>
            </p>
          </div>
    
          <div>
           <p className="text-[10px] leading-tight">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, neque nulla. Error repellendus maiores est inventore ipsum, tenetur eligendi deleniti!</p>
          </div>
        </div>
  )
}

export default CaptainSignup
