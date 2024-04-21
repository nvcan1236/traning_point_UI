import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import FormGroup from "../components/formControls/formGroup";
import Input from "../components/formControls/Input";
import PrimaryButton from "../components/Buttons/PrimaryButton";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/TrainingPointSystem/api/user/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form className="w-[400px] mx-auto flex flex-col gap-2">
        <div className="text-blue-700 text-xl text-center font-semibold">
          Đăng kí
        </div>
        <FormGroup
          vertical
          id="firstname"
          label="First name"
          className="w-full"
        >
          <Input
            type="text"
            id="firstname"
            name="firstName"
            placeholder="Enter your firstname"
            onChange={handleInputChange}
            className="inline-block w-full"
          />
        </FormGroup>

        <FormGroup vertical id="lastname" label="Last name" className="w-full">
          <Input
            type="text"
            id="lastname"
            name="lastName"
            placeholder="Enter your lastname"
            onChange={handleInputChange}
            className="inline-block w-full"
          />
        </FormGroup>

        <FormGroup vertical id="username" label="Username" className="w-full">
          <Input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            onChange={handleInputChange}
            className="inline-block w-full"
          />
        </FormGroup>

        <FormGroup vertical id="password" label="Password" className=" w-full">
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleInputChange}
            className="inline-block w-full"
          />
        </FormGroup>

        <FormGroup vertical id="email" label="Email" className=" w-full">
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleInputChange}
            className="inline-block w-full"
          />
        </FormGroup>

        <FormGroup vertical id="phone" label="Phone number" className=" w-full">
          <Input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            onChange={handleInputChange}
            className="inline-block w-full"
          />
        </FormGroup>

        <PrimaryButton onClick={handleFormSubmit} className="w-full mt-2">
          Register
        </PrimaryButton>

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
