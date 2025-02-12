import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://img.freepik.com/free-vector/person-with-medical-mask-concept-illustration_114360-2152.jpg?t=st=1738087371~exp=1738090971~hmac=d40fcd715455aa54400b52fce783ccc71e4734be9f489599a62541363fd332b3&w=740)] h-screen pt-8 w-full flex justify-between flex-col">
        <img className="w-16 ml-8" src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="Logo" />
        <div className="bg-white w-full px-5 py-3 pb-7">
          <h2 className="text-3xl font-bold">Getting Started</h2>
          <Link to='/login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5" >Continue</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
