"use client";
import { SignUpCard } from "@/components/SignUpCard";
import * as yup from "yup";
import { HeaderLogo } from "@/assets/headerlogo";
import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/components/providers/AuthProvider";
const SignUp = () => {
  const { createUser } = useAuth();
  // Define validation schema
  const FormSchema = yup.object().shape({
    name: yup.string().required("Neree oruulna uu"),
    email: yup
      .string()
      .email("Email address buruu baina")
      .required("Email ee oruulna uu"),
    password: yup
      .string()
      // .min(8, "Password 8-aas deesh temdegt aguulsan baih yostoi")
      // .matches(/[0-9]/, "Password aa oruulna uu")
      // .matches(/[a-z]/, "Password jijig vseg zaawal awsan bh yostoi")
      // .matches(/[A-Z]/, "Password tom vseg zaawal awsan bh yostoi")
      // .matches(/[^\w]/, "Password temdegt zaawal awsan bh yostoi")
      .required("Password aa oruulna uu"),

    repassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password buruu")
      .required("Password aa oruulna uu"),
  });

  // Initialize formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
    },
    validationSchema: FormSchema,
    onSubmit: async (values) => {
      console.log(values);
      await createUser({
        email: values.email,
        name: values.name,
        password: values.password,
      });
    },
  });
  return (
    <main className="">
      {/* <SignUpCard /> */}
      <div
        className="flex flex-row lg:w-screen w-[390px] font-normal m-auto h-screen"
        // onSubmit={formik.handleSubmit}
      >
        <div className="flex-1 flex flex-col h-full w-fit items-center justify-center gap-[40px] pr-[126px] pl-[222px] border">
          <div className="flex items-center justify-center gap-3">
            <Link href={`/`}>
              <div>
                <HeaderLogo />
              </div>
            </Link>
            <div className="text-2xl font-bold">Geld</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-2xl font-semibold">Create Geld account</div>
            <div className="text-[#334155]">
              Sign up below to create your Wallet account
            </div>
          </div>
          <div className="flex flex-col gap-4 w-2/5">
            <input
              className="pl-4 border rounded-sm h-[48px] bg-[#F3F4F6]"
              placeholder="Name"
              name="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && (
              <p className="text-red-500">{formik.errors.name}</p>
            )}
            <input
              className="pl-4 border rounded-sm h-[48px] bg-[#F3F4F6]"
              placeholder="Email"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && (
              <p className="text-red-500">{formik.errors.email}</p>
            )}
            <input
              className="pl-4 border rounded-sm h-[48px] bg-[#F3F4F6]"
              placeholder="Password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && (
              <p className="text-red-500">{formik.errors.password}</p>
            )}
            <input
              className="pl-4 border rounded-sm h-[48px] bg-[#F3F4F6]"
              placeholder="Re-Password"
              type="password"
              name="repassword"
              value={formik.values.repassword}
              onChange={formik.handleChange}
            />
            {formik.errors.repassword && (
              <p className="text-red-500">{formik.errors.repassword}</p>
            )}
            <button type="submit" onClick={formik.submitForm}>
              <div className="flex items-center justify-center bg-[#0166FF] text-[16px] text-[#FFFFFF] rounded-2xl h-10">
                Sign Up
              </div>
            </button>
          </div>
          <div className="flex gap-3 items-center justify-center">
            <div className="text-[#0F172A]">Already have an account?</div>
            <Link href={`/logIn`}>
              <div className="text-[#0166FF]">Log in</div>
            </Link>
          </div>
        </div>
        <div className="flex-1 bg-[#0166FF] w-full h-full border"></div>
      </div>
    </main>
  );
};
export default SignUp;
