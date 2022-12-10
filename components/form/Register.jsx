import React, { useState } from "react";
import { useFormik } from "formik";
import { schema } from "../../helpers/validations";
import Message from "./Message";
import Input from "./Input";
import { createUser } from "../../lib/api";

const Register = () => {
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    if (!schema) return;

    createUser(setLoading, values.name, values.email, values.password)
      .then((resp) => {
        setLoading(false);
        setStatus({
          type: "success",
          message: "Usuário registrado com sucesso!",
        });

        values.name = "";
        values.email = "";
        values.password = "";
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
      {loading && <h1>CARREGANDO....</h1>}
      <div className="w-[500px] h-[500px] bg-white rounded flex flex-col items-center p-4">
        <h1 className="font-bold text-details  text-3xl">Crie sua conta</h1>
        {messageError && <Message message="Email ja cadastrado" />}
        <form
          className=" w-full sm:w-[70%] p-4  space-y-2 mt-10"
          onSubmit={handleSubmit}
        >
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
            error={errors.email}
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
            placeholder="Insira sunha senha"
          />
          {errors.password && touched.password && (
            <Message message={errors.password} />
          )}

          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              className="bg-details w-3/5 text-white font-bold h-8 mt-4"
              disabled={loading}
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
