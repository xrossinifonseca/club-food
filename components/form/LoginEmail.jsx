import React, { useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import Input from "./Input";
import { useFormik } from "formik";
import { schemaLogin } from "../../helpers/validations";
import Message from "./Message";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const LoginEmail = () => {
  const [sectionEmail, setSectionEmail] = useState(false);
  const [erros, setErros] = useState(null);
  const router = useRouter();

  const onSubmit = async () => {
    if (!schemaLogin) return;
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schemaLogin,
    onSubmit,
  });

  return (
    <>
      {sectionEmail && (
        <IoIosArrowBack
          className="absolute top-2 left-0 text-4xl text-details lg:cursor-pointer"
          onClick={() => setSectionEmail(false)}
        />
      )}
      {!sectionEmail ? (
        <>
          <h1 className="absolute top-4 text-xl sm:text-3xl lg:text-2xl text-gray-700 font-semibold p-4">
            Faça login para continuar
          </h1>
          <button
            type="button"
            onClick={() =>
              signIn("linkedin", { callbackUrl: "http://localhost:3000/" })
            }
            className="bg-buttonin hover:opacity-80 text-white font-semibold w-[80%] h-10 rounded flex items-center justify-center "
          >
            <AiFillLinkedin className="text-xl " /> Entrar com LinkedIn
          </button>

          <button
            type="button"
            onClick={() => setSectionEmail(true)}
            className="bg-details hover:opacity-80 text-white font-semibold w-[80%] h-10 rounded flex items-center justify-center  "
          >
            Email
          </button>
        </>
      ) : (
        <form
          className="w-4/5 sm:w-[70%]  flex flex-col items-center space-y-5 "
          onSubmit={handleSubmit}
        >
          <h2 className="text-gray-500 font-semibold text-xl">
            Login com Email
          </h2>
          <Input
            type="email"
            name="email"
            value={values.email}
            placeholder="Seu email"
            onChange={handleChange}
            error={errors.email}
          />
          {errors.email && touched.email && <Message message={errors.email} />}

          <Input
            type="password"
            name="password"
            value={values.password}
            placeholder="Sua senha"
            onChange={handleChange}
            error={errors.password}
          />
          {errors.password && touched.password && (
            <Message message={errors.password} />
          )}

          <button
            type="submit"
            disabled={!values.email || !values.password}
            className="bg-details disabled:bg-slate-500  text-white font-semibold w-[80%] h-10 rounded flex items-center justify-center "
          >
            Continuar
          </button>
        </form>
      )}
    </>
  );
};

export default LoginEmail;
