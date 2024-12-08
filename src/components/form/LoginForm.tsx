"use client";

import Image from "next/image";
import Cookie from "js-cookie";
import { useContext } from "react";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { login } from "@/app/services";
import { useRouter } from "next/navigation";
import InputField from "../inputs/InputField";
import { loginSchema } from "@/view/auth/schema";
import SubmitButton from "../buttons/SubmitButton";
import { AuthContext } from "@/context/authContext";
import loginImage from "@/assets/images/login.png";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useContext must be used within an AuthContextProvider");
  }

  const { setIsAuthenticated } = authContext;

  const handleSubmit = async (data: { email: string; password: string }) => {
    const response = await login({ data });

    if (response.status === 200) {
      toast.success(response?.message);

      Cookie.set("access_token", response.data.token, { expires: 7 });

      setIsAuthenticated(true);
      router.push("/");
    } else {
      toast.error(response?.message);
    }
  };

  return (
    <div className="w-full sm:w-[90%] xl:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center max-md:py-10 md:h-[55vh]">
      <div className="max-md:hidden md:block flex justify-center items-center w-[90%]">
        <Image src={loginImage} alt="login image" />
      </div>

      <Formik
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
        initialValues={{ email: "", password: "" }}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6 bg-white dark:bg-slate-800 px-5 py-10 shadow-section rounded-md"
          >
            <InputField
              type="email"
              label="Email"
              name="email"
              errors={errors}
              required={true}
              touched={touched}
              placeholder="Enter your email address"
            />

            <InputField
              type="password"
              label="Password"
              name="password"
              errors={errors}
              required={true}
              touched={touched}
              placeholder="Enter your password"
            />

            <SubmitButton title="Login" />

            <p className="text-slate-800 dark:text-white text-center">
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-500">
                Sign Up
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
