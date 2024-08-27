import * as yup from "yup";

export const signInFormValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const signUpFormValidation = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
  fullname: yup.string().required(),
  password: yup.string().required(),
});

export const contactFormValidation = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  comment: yup.string().required(),
});

