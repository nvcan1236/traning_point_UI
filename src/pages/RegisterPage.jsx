import { NavLink, useNavigate } from "react-router-dom";
import FormGroup from "../components/formControls/FormGroup";
import Input from "../components/formControls/Input";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { API } from "../configs/APIconfig";
import { useRef, useState } from "react";
import Loading from "../components/layout/Loading";

export default function RegisterPage() {
  const navigate = useNavigate();
  const avatarRef = useRef();
  const [loading, setLoading ] = useState(false)

  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    // phone: "",
  };

  

  const handleFormSubmit = () => {
    setLoading(true)
    const formData = new FormData();
    Object.keys(formik.values).forEach((key) => formData.append(key, formik.values[key]));
    formData.append("files", avatarRef.current.files[0])
    
    fetch(API.register, {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false)
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
      avatar: Yup.object(),
    }),
  });

  const formFileds = [
    {
      name: "lastName",
      label: "Họ",
    },
    {
      name: "firstName",
      label: "Tên",
    },

    {
      name: "username",
      label: "Username",
    },
    {
      name: "password",
      label: "Mật khẩu",
      type: "password",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
    },
    {
      name: "dob",
      label: "Ngày sinh",
      type: "date",
    },
  ];

  return (
    <div className="w-1/3 px-10">
      <form
        className="mx-auto flex flex-col gap-3 text-sm w-full "
        onSubmit={formik.handleSubmit}
      >
        <div className="text-mainBlue text-xl text-center font-semibold">
          Đăng ký tài khoản
        </div>

        {formFileds.map((field) => (
          <FormGroup
            vertical
            id={field.name}
            label={field.label}
            className="w-full"
            message={formik.errors[field.name]}
            touched={formik.touched[field.name]}
            key={field.name}
          >
            <Input
              type={field?.type || "text"}
              id={field.name}
              placeholder={`Nhâp ${field.label.toLowerCase()}`}
              className="inline-block w-full"
              {...formik.getFieldProps(field.name)}
              
            />
          </FormGroup>
        ))}

        <FormGroup
          vertical
          id="avatar"
          label="Ảnh đại diện"
          className=" w-full"
        >
          <Input
            type="file"
            id="avatar"
            className="inline-block w-full"
            ref={avatarRef}
          />
        </FormGroup>

        <PrimaryButton type="submit" className="w-full mt-2">
          {loading ? <Loading /> :"Register"}
        </PrimaryButton>

        <div className="mt-4 text-center">
          Đã có tài khoản ?
          <NavLink to="/login" className="text-mainBlue font-semibold ">
            {" "}
            Đăng nhập
          </NavLink>
        </div>
      </form>
    </div>
  );
}
