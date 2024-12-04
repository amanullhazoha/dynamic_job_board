import * as Yup from "yup";

export const signupSchema = () =>
  Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(16, "Password must not exceed 16 characters")
      .required("Password is required"),
    email: Yup.string()
      .email("This is not a valid email")
      .required("Email is required"),
  });

export const loginSchema = () =>
  Yup.object().shape({
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(16, "Password must not exceed 16 characters")
      .required("Password is required"),
    email: Yup.string()
      .email("This is not a valid email")
      .required("Email is required"),
  });
