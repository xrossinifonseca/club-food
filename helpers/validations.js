import * as yup from "yup";
export const nameRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\-', ""]+$/;

export const schema = yup.object().shape({
  password: yup
    .string("Senha invalida")
    .required("Necessário preencher campo senha"),
  email: yup
    .string()
    .email("Insira um email valido")
    .required("Necessário preencher campo email"),
  name: yup
    .string("Nome invalido")
    .matches(nameRegex, { message: "Digite um nome valido" })
    .required("Necessário preencher campo nome")
    .trim(),
});
