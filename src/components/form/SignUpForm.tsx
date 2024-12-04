"use client";

import { Formik, Form } from "formik";
import InputField from "../inputs/InputField";
import SubmitButton from "../buttons/SubmitButton";
import { signupSchema } from "@/pages/auth/schema";

const SignupForm = () => {
  return (
    <div className="w-full sm:w-[90%] xl:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center max-md:py-10 md:h-[55vh]">
      <div className="hidden md:block"></div>

      <Formik
        validationSchema={signupSchema}
        onSubmit={() => console.log("hello")}
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
