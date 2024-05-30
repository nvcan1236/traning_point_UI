import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import FormGroup from "../components/formControls/FormGroup";
import Input from "../components/formControls/Input";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import CheckBox from "../components/formControls/CheckBox";
import { API } from "../configs/APIconfig";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginPage() {
  

  const { dispatch } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isAssistant, setIsAssistant] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const handleSubmitForm = async () => {
    try {
      const response = await fetch(`${API.login}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formik.values),
      });

      if (!response.ok) {
        throw new Error("Đăng nhập thất bại !!");
      }

      const data = await response.json();
      dispatch({ type: "login", payload: data.token });
      navigate("/")
    } catch (ex) {
      alert(ex.message);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmitForm,
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Vui lòng nhập username!")
        .max(100, "username phải dưới 100 ký tự!"),
      password: Yup.string()
        .required("Vui lòng nhập mật khẩu!")
        .min(6, "Mật khẩu tối thiểu 6 ký tự")
        .max(8, "Mật khẩu tối đa 10 ký tự"),
    }),
  });


  return (
    <>
      <form
        className="mx-auto flex flex-col gap-4 w-1/3 px-10"
        onSubmit={formik.handleSubmit}
      >
        <div className="text-blue-700 text-xl text-center font-semibold">
          Đăng nhập
        </div>
        <FormGroup
          vertical
          id="username"
          label="Username"
          className="w-full"
          message={formik.errors.username}
          touched={formik.touched.username}
        >
          <Input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="inline-block w-full"
            {...formik.getFieldProps("username")}
          />
        </FormGroup>

        <FormGroup
          vertical
          id="password"
          label="Password"
          className=" w-full"
          message={formik.errors.password}
          touched={formik.touched.password}
        >
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            className="inline-block w-full"
            {...formik.getFieldProps("password")}
          />
        </FormGroup>
        <CheckBox
          label="Show password"
          onClick={() => setShowPassword(!showPassword)}
        />

        <PrimaryButton className="w-full mt-2" type="submit">
          {isAssistant ? "Login as Assistant" : "Login"}
        </PrimaryButton>

        <div className="border-t border-t-1 my-5 border-t-slate-300 relative">
          <span className="absolute -top-3 px-3 bg-blue-50 left-1/2 -translate-x-1/2">
            hoặc{" "}
          </span>
        </div>

        <PrimaryButton
          className="w-full bg-white flex justify-center items-center border border-slate-500 gap-1 !text-slate-950"
          type="submit"
        >
          Login with
          <img
            src="https://cdn-teams-slug.flaticon.com/google.jpg"
            alt=""
            className="w-8 h-8 object-cover rounded-full"
          />
        </PrimaryButton>

        <div className="mt-4 text-center">
          Chưa có tài khoản ?
          <NavLink to="/register" className="text-mainBlue font-semibold ">
            {" "}
            Đăng kí
          </NavLink>
        </div>
        <div
          className="text-center text-mainBlue font-semibold cursor-pointer"
          onClick={() => setIsAssistant(!isAssistant)}
        >
          Đăng nhập với vai trò {isAssistant ? "Sinh viên" : "Trợ lý"}
        </div>
      </form>
    </>
  );
}
