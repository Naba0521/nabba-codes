"use client";
import { FC, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // For form validation
import { useRouter } from "next/navigation"; // For navigation
import { PiEyeThin, PiEyeSlashThin } from "react-icons/pi"; // Icons for password visibility toggle
import { Button } from "@/components/ui/button"; // Your custom button component
import { api } from "@/lib/axios"; // API handler

interface FormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // To show success notification
  const router = useRouter();

  // Formik setup with validation schema using Yup
  const formik = useFormik<FormValues>({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Нэр шаардлагатай"),
      email: Yup.string()
        .email("Имэйл буруу байна")
        .required("Имэйл шаардлагатай"),
      password: Yup.string()
        .min(8, "Нууц үг 8 тэмдэгтээс дээш байх ёстой")
        .matches(/[A-Z]/, "Том үсэг орсон байх")
        .matches(/[a-z]/, "Жижиг үсэг орсон байх")
        .matches(/\d/, "Тоо орсон байх")
        .matches(/[\W_]/, "Тэмдэгт орсон байх")
        .required("Нууц үг шаардлагатай"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Нууц үг таарахгүй байна")
        .required("Нууц үг давтах шаардлагатай"),
    }),
    onSubmit: async (values) => {
      try {
        await api.post("/auth/signup", {
          userName: values.username,
          email: values.email,
          password: values.password,
        });
        setSuccessMessage("Хэрэглэгч амжилттай үүслээ!"); // Show success notification
        setTimeout(() => {
          router.push("/logIn"); // Redirect after 2 seconds
        }, 2000);
      } catch (error) {
        console.error("Error signing up:", error);
      }
    },
  });

  return (
    <div className="w-full flex justify-center bg-[#f0f1f3] py-10 min-h-[100vh]">
      <div className="flex flex-col gap-6 w-[334px]">
        <h1 className="text-2xl font-semibold text-center">Бүртгүүлэх</h1>
        {successMessage && (
          <div className="bg-green-100 text-green-600 p-3 rounded-md text-center">
            {successMessage}
          </div>
        )}
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <input
            name="username"
            placeholder="Нэр"
            className="border px-3 py-1 rounded-2xl shadow-md"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username && (
            <div className="text-xs text-red-500">{formik.errors.username}</div>
          )}

          <input
            name="email"
            placeholder="Имэйл"
            className="border px-3 py-1 rounded-2xl shadow-md"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-xs text-red-500">{formik.errors.email}</div>
          )}

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Нууц үг"
              className="border px-3 py-1 rounded-2xl shadow-md w-full"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <PiEyeThin /> : <PiEyeSlashThin />}
            </button>
          </div>
          {formik.touched.password && formik.errors.password && (
            <div className="text-xs text-red-500">{formik.errors.password}</div>
          )}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Нууц үг давтах"
            className="border px-3 py-1 rounded-2xl shadow-md w-full"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="text-xs text-red-500">
              {formik.errors.confirmPassword}
            </div>
          )}

          <div className="text-xs p-2 leading-5 text-gray-500">
            <li
              className={`${
                formik.values.password === ""
                  ? "text-gray-500"
                  : /[A-Z]/.test(formik.values.password)
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              Том үсэг орсон байх
            </li>
            <li
              className={`${
                formik.values.password === ""
                  ? "text-gray-500"
                  : /[a-z]/.test(formik.values.password)
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              Жижиг үсэг орсон байх
            </li>
            <li
              className={`${
                formik.values.password === ""
                  ? "text-gray-500"
                  : /\d/.test(formik.values.password)
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              Тоо орсон байх
            </li>
            <li
              className={`${
                formik.values.password === ""
                  ? "text-gray-500"
                  : /[\W_]/.test(formik.values.password)
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              Тэмдэгт орсон байх
            </li>
          </div>

          <Button
            type="submit"
            className="bg-blue-500 text-white px-3 py-1 rounded-2xl"
          >
            Үүсгэх
          </Button>
        </form>
        <Button
          type="button"
          className="border text-blue-500 px-3 py-1 rounded-2xl"
          onClick={() => router.push("/logIn")}
        >
          Нэвтрэх
        </Button>
      </div>
    </div>
  );
};

export default SignupForm;
