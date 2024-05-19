import { NavLink, useNavigate } from "react-router-dom";
import FormGroup from "../components/formControls/FormGroup";
import Input from "../components/formControls/Input";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function RegisterPage() {
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    phone: "",
  };

  const formData = new FormData()
  formik.values.forEach(v=>formData.append(v))

  const handleFormSubmit = () => {
    fetch("http://localhost:8080/TrainingPointSystem/api/user/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formik.values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleFormSubmit,
    validationSchema: Yup.object({
      firstName: Yup.string().required("Vui lòng nhập tên!"),
      lastName: Yup.string().required("Vui lòng nhập họ!"),
      username: Yup.string().required("Vui lòng nhập username!"),
      password: Yup.string()
        .required("Vui lòng nhập mật khẩu!")
        .min(6, "Mật khẩu tối thiểu 6 ký tự")
        .max(8, "Mật khẩu tối đa 10 ký tự"),
      email: Yup.string()
        .required("Vui lòng nhập email")
        .max(100, "Email tối đa 100 ký tự"),
      phone: Yup.string().length(10, "Số điện thoại 10 ký tự"),
    }),
  });

  return (
    <>
      <form
        className="mx-auto flex flex-col gap-2"
        onSubmit={formik.handleSubmit}
      >
        <div className="text-blue-700 text-xl text-center font-semibold">
          Đăng kí
        </div>
        <FormGroup
          vertical
          id="firstname"
          label="First name"
          className="w-full"
          message={formik.errors.firstName}
          touched={formik.touched.firstName}
        >
          <Input
            type="text"
            id="firstname"
            placeholder="Enter your firstname"
            className="inline-block w-full"
            {...formik.getFieldProps("firstName")}
          />
        </FormGroup>

        <FormGroup
          vertical
          id="lastname"
          label="Last name"
          className="w-full"
          message={formik.errors.lastName}
          touched={formik.touched.lastName}
        >
          <Input
            type="text"
            id="lastname"
            placeholder="Enter your lastname"
            className="inline-block w-full"
            {...formik.getFieldProps("lastName")}
          />
        </FormGroup>

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
            type="password"
            id="password"
            placeholder="Enter your password"
            className="inline-block w-full"
            {...formik.getFieldProps("password")}
          />
        </FormGroup>

        <FormGroup
          vertical
          id="email"
          label="Email"
          className=" w-full"
          message={formik.errors.email}
          touched={formik.touched.email}
        >
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="inline-block w-full"
            {...formik.getFieldProps("email")}
          />
        </FormGroup>

        <FormGroup
          vertical
          id="phone"
          label="Phone number"
          className=" w-full"
          message={formik.errors.phone}
          touched={formik.touched.phone}
        >
          <Input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            className="inline-block w-full"
            {...formik.getFieldProps("phone")}
          />
        </FormGroup>

        <PrimaryButton type="submit" className="w-full mt-2">Register</PrimaryButton>

        <div className="mt-4 text-center">
          Đã có tài khoản ?
          <NavLink to="/login" className="text-mainBlue font-semibold ">
            {" "}
            Đăng nhập
          </NavLink>
        </div>
      </form>
    </>
  );
}
