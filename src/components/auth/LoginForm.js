"use client";

import { useState } from "react";
import Boton from "../ui/Boton";
import { useAuthContext } from "../context/AuthContext";

const LoginForm = () => {
  const { registerUser, loginUser, googleLogin } = useAuthContext();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-blue-400 bg-opacity-25">
      <form onSubmit={handleSubmit} className="bg-white py-4 px-6 rounded-xl max-w-md w-full">
        <h2>Login</h2>
        <input
          type="email"
          value={values.email}
          required
          placeholder="Ingrese su email"
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          value={values.password}
          required
          placeholder="Ingrese su password"
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="password"
          onChange={handleChange}
        />
        <Boton className="mr-4" onClick={()=> loginUser(values)}>
          Ingresar
        </Boton>
        <Boton onClick={() => registerUser(values)}> Registrarme</Boton>
        <Boton onClick={googleLogin} className="mt-4 block">Iniciar Sesión con Google</Boton>
      </form>
    </div>
  );
};

export default LoginForm;
