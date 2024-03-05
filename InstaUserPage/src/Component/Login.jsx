import React from "react";
import { Link } from "react-router-dom";

function Login({ showRegister }) {
  return (
    <div className="w-full min-h-screen bg-blue-200 flex flex-col justify-center px-6 py-12 lg:px-8">
      <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="w-82 text-center items-center h-full mt-10 text-gray-400 bg-cover rounded-lg px-8 py-4 space-y-2 bg-[url('https://img.freepik.com/free-vector/white-background-gradient-modern-abstract-design-wave_343694-2337.jpg?w=1060&t=st=1683095309~exp=1683095909~hmac=1ec912f62a653077dde52545585cbe13da3dca6d279b116cf50f11443a811434')]">
          <img className="w-50 h-12 m-auto" src="/8n91YnfPq0s.png" alt="" />
          <form action="#" className="space-y-6">
            <input
              type="text"
              className="w-full text-sm mt-3 p-2 rounded text-center"
              placeholder="phone number, user name or email"
            />
            <input
              type="password"
              className=" mt-3 w-full text-sm p-2 rounded text-center"
              placeholder="Password"
            />

            <button className="w-full mt-3 bg-blue-600 text-white rounded hover:bg-blue-800 h-10">
              Sign in
            </button>
            <span className="w-full mt-3 text-black text-center">
              Don't have an account?&nbsp;
              {/* <Link
                to="/register"
                className="text-center underline text-blue-500 cursor-pointer"
              >
                Sign Up
              </Link> */}
              <button
                className="text-center underline text-blue-500 cursor-pointer"
                onClick={showRegister}
              >
                Sign Up
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
