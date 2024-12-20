"use client";

import Image from "next/image";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { signup } from "@/app/services";
import { useRouter } from "next/navigation";
import InputField from "../inputs/InputField";
import SubmitButton from "../buttons/SubmitButton";
import { signupSchema } from "@/view/auth/schema";
import loginImage from "@/assets/images/login.png";
import Link from "next/link";

const SignupForm = () => {
  const router = useRouter();

  const handleSubmit = async (data: {
    email: string;
    fullName: string;
    password: string;
  }) => {
    const response = await signup({ data });

    if (response.status === 201) {
      toast.success(response?.message);

      router.push("/login");
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
        validationSchema={signupSchema}
        initialValues={{ email: "", password: "", fullName: "" }}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6 bg-white dark:bg-slate-800 px-5 py-10 shadow-section rounded-md"
          >
            <InputField
              type="text"
              label="Full Name"
              name="fullName"
              errors={errors}
              required={true}
              touched={touched}
              placeholder="Enter your full name"
            />

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

            <SubmitButton title="Sign Up" />

            <p className="text-slate-800 dark:text-white text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500">
                Login
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
