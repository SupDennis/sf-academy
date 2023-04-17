import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { tokenToString } from 'typescript';

export interface UserState{
  username : string,
  password : string,
  token : string
}

export interface LoginPageProps {
  onLoginSuccess: (user: UserState) => void;
}

async function loginUser({credentials} : any) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

function LoginPage ({ setToken } : any) {
  const [username, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();


  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {    
    e.preventDefault();
    console.log(username)
    const token = await loginUser({
      username,
      password
    });
    setToken(token)
  };


  return (
    <div className="w-screen h-screen flex flex-col bg-black">

    <div className="flex-1 flex  justify-center bg-white" style={{ clipPath: "polygon(0% 100%, 0% -30%, 100% 100%)"}}>
      <div className="w-1/4 z-50 flex items-center justify-center">
        <form className='w-50 container bg-red' onSubmit={handleFormSubmit}>
          <h1 className='text-4xl'>Login</h1>
          {/*Email input */}
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Email
            </span>
            <input type="text" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" onChange={(e) => setUserName(e.target.value)}/>   
          </label>
          {/*Password Input */}
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Password
            </span>
            <input type="password" name="password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="your password"  onChange={e => setPassword(e.target.value)}/>
          </label>
          {/*Button Login */}
          <button type='submit' className="bg-blue-500 mt-5 w-full rounded-r-lg rounded-l-lg py-1" >
            Login
          </button>
        </form>
      </div>
      <div className="w-1/2 ">
        <div className="absolute inset-x-0 bottom-0 mr-8 text-1xl">
          <h3 className='text-end text-black'>Develope by <a>variety studios</a></h3>
        </div>
      </div>
    </div>
  </div>
);

};

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default LoginPage;