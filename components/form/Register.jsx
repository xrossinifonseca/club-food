import React, { useState } from "react";
import { useFormik } from "formik";
import { schema } from "../../helpers/validations";
import Message from "./Message";
import MessageSuccess from "./MessageSuccess";
import Input from "./Input";
import { createUser } from "../../lib/api";
import { useRouter } from "next/router";
const Register = () => {
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const route = useRouter();

  const onSubmit = () => {
    let name = values.name.toLowerCase().trim();
    let email = values.email;
    let password = values.password;

    if (!schema) return;

    createUser(setLoading, name, email, password)
      .then((resp) => {
        setLoading(false);
        setStatus({
          type: "success",
          message: "Usuário registrado com sucesso!",
        });
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          let { message } = error.response.data;
          return setStatus({
            type: "error",
            message: message,
          });
        }
      });
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit,
  });

  const messageError =
    status.type === "error" && status.message === "email must be unique";

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {status.type === "success" && <MessageSuccess />}

      <div className="w-[500px] h-auto bg-white rounded flex flex-col items-center p-4">
        <h1 className="font-bold text-details  text-3xl">Crie sua conta</h1>

        <form
          className=" w-full sm:w-[70%] p-4  space-y-2 mt-10"
          onSubmit={handleSubmit}
        >
          {messageError && (
            <div
              className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
              role="alert"
            >
              <span className="font-medium">Email ja cadastrado!</span>
            </div>
          )}

          <Input
            type="text"
            name="name"
            label="Nome"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Insira seu nome"
          />

          {errors.name && touched.name && <Message message={errors.name} />}

          <Input
            type="email"
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            error={errors.email || messageError}
            placeholder="Insira seu email"
          />

          {errors.email && touched.email && <Message message={errors.email} />}

          <Input
            type="password"
            name="password"
            label="Senha"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="Insira sua senha"
          />
          {errors.password && touched.password && (
            <Message message={errors.password} />
          )}

          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              className="bg-details w-3/5 text-white font-medium rounded h-10 mt-4 flex justify-center items-center"
              disabled={loading === true}
            >
              {loading ? (
                <img src="/assets/loading.svg" className="w-10" />
              ) : (
                "cadastrar"
              )}
            </button>
          </div>
        </form>
        <span className="text-gray-500 font-medium flex ">
          Ja possui uma conta?{" "}
          <h2
            className="ml-2 text-details lg:cursor-pointer hover:opacity-70"
            onClick={() => route.push("/entrar")}
          >
            Entrar
          </h2>
        </span>
      </div>
    </div>
  );
};

export default Register;
