import { NavLink, useNavigate } from "react-router-dom";
import FormGroup from "../components/formControls/FormGroup";
import Input from "../components/formControls/Input";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { API } from "../configs/APIconfig";
import { useRef, useState } from "react";
import Loading from "../components/layout/Loading";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import SelectBox from "../components/formControls/SelectBox";
import { useCommon } from "../contexts/commonContext";
import { fetchGetFacultyClasses } from "../hooks/useFetch";

export default function RegisterPage() {
  const navigate = useNavigate();
  const avatarRef = useRef();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const { faculties } = useCommon();
  const [classes, setClasses] = useState();

  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    // phone: "",
  };

  const handleFormSubmit = () => {
    // console.log(formik.values);
    setLoading(true);
    const formData = new FormData();
    Object.keys(formik.values).forEach((key) =>
      formData.append(key, formik.values[key])
    );
    formData.append("files", avatarRef.current.files[0]);

    fetch(API.register, {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
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
      faculty: Yup.number().required("Vui lòng chọn khoa"),
      class: Yup.number().required("Vui lòng chọn lớp"),
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
      name: "dob",
      label: "Ngày sinh",
      type: "date",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
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
  ];

  const handleSelectFaculty = async (name, value) => {
    formik.setFieldValue(name, value);
    const data = await fetchGetFacultyClasses(value);
    setClasses(data)
  };

  return (
    <div className="w-full md:px-10 lg:w-1/3 px-10 ">
      <form
        className="mx-auto flex flex-col gap-4 text-sm overflow-x-hidden w-full"
        onSubmit={formik.handleSubmit}
      >
        <div className="text-mainBlue text-xl text-center font-semibold ">
          Đăng ký tài khoản
        </div>

        <div
          className={`flex transition-all duration-300 ${
            step == 1 ? "translate-x-0" : "-translate-x-[100%]"
          }`}
        >
          {/* step 1 */}
          <div className="shrink-0 w-full ">
            {formFileds.slice(0, 4).map((field) => (
              <FormGroup
                vertical
                id={field.name}
                label={field.label}
                className="w-full mt-4"
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
            <PrimaryButton
              type="button"
              className="w-full mt-6 flex gap-2 items-center justify-center"
              onClick={() => setStep(2)}
            >
              Tiếp tục <IoArrowForwardSharp />
            </PrimaryButton>
          </div>

          {/* step 2 */}
          <div className="shrink-0 w-full ">
            <FormGroup
              vertical
              label={"Khoa"}
              message={formik.errors.faculty}
              touched={formik.touched.faculty}
              className={"flex-1"}
            >
              <SelectBox
                options={faculties.map((f) => ({
                  id: f.id,
                  value: f.id,
                  name: f.name,
                }))}
                onChange={handleSelectFaculty}
                onBlur={formik.handleBlur}
                name="faculty"
                className={"text-sm !bg-white !text-black border"}
                value={"Chọn khoa"}
              ></SelectBox>
            </FormGroup>
            <FormGroup vertical id="class" label="Lớp" className=" w-full mt-4">
              <SelectBox
                options={
                  classes &&
                  classes.map((c) => ({
                    id: c.id,
                    value: c.id,
                    name: c.name,
                  }))
                }
                onChange={formik.setFieldValue}
                onBlur={formik.handleBlur}
                name="class"
                className={"text-sm !bg-white !text-black border"}
                value={"Chọn lớp"}
              ></SelectBox>
            </FormGroup>
            {formFileds.slice(4).map((field) => (
              <FormGroup
                vertical
                id={field.name}
                label={field.label}
                className="w-full mt-4"
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
              className=" w-full mt-4"
            >
              <Input
                type="file"
                id="avatar"
                className="inline-block w-full"
                ref={avatarRef}
              />
            </FormGroup>

            <div className="flex gap-2 mt-6">
              <SecondaryButton
                className={""}
                type="button"
                onClick={() => setStep(1)}
              >
                <IoArrowBackSharp />
              </SecondaryButton>
              <PrimaryButton type="submit" className="flex-1">
                {loading ? <Loading /> : "Register"}
              </PrimaryButton>
            </div>
          </div>
        </div>

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
