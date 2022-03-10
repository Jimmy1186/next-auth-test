import React, { useEffect, useRef, useState } from "react";
import { signup } from "../utils/reqAxios";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

function RegisterAndLogin({ mode }) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);
  const [succ, setSucc] = useState(false);
  const router = useRouter();

  const signupHandler = async (e) => {
    e.preventDefault();
    console.log("user sign")
    const result = await signup({ email, pw });
    result ? setErr(true) : (setErr(false), setSucc(true));
  };
  useEffect(() => {
    router.pathname == "/auth/register" && err == false && succ == true
      ? router.replace(`http://localhost:3000/auth/login`)
      : "";
  }, []);

const loginHandler =async(e)=>{
  e.preventDefault()
  const payload = {email,pw}
  const result = await signIn("credentials",{...payload,redirect:false})
  console.log("user loginm")
  console.log(result)
}

  return (
    <form method="POST" 
    
    onSubmit={mode==="register"?(signupHandler):(loginHandler)}>
      <h3>{mode}</h3>
      {err ? <h2>pls check the value u enter</h2> : ""}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="nani@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
      />
      {/* 
    <label htmlFor="password">Confirm password</label>
    <input type="password"/> */}

      <input type="submit" value="submit" />
    </form>
  );
}

export default RegisterAndLogin;
