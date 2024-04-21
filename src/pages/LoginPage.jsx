import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import FormGroup from "../components/formControls/formGroup";
import Input from "../components/formControls/Input";
import PrimaryButton from "../components/Buttons/PrimaryButton";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { setUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const api_endpoint = "http://localhost:8080/TrainingPointSystem/api";

  const handleSubmitForm = (e) => {
    e.preventDefault();

    fetch(`${api_endpoint}/login`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Đăng nhập thất bại!!!");
        }
        return res.json();
      })
      .then((data) => {
        fetch(`${api_endpoint}/user/current`, {
          headers: {
            Authorization: data.token,
          },
        })
          .then((res) => res.json())
          .then((user) => setUser(user));

        localStorage.setItem("USER_TOKEN", data.token);
        navigate("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <>
      <form className="w-[400px] mx-auto flex flex-col gap-4">
        <div className="text-blue-700 text-xl text-center font-semibold">
          Đăng nhập
        </div>
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
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleInputChange}
            className="inline-block w-full"
          />
        </FormGroup>

        <div className="flex items-center gap-2">
          <Input
            type="checkbox"
            id="showPass"
            onClick={() => setShowPassword(!showPassword)}
          />
          <label htmlFor="showPass"> Show password</label>
        </div>

        <PrimaryButton onClick={handleSubmitForm} className="w-full mt-2">
          Login
        </PrimaryButton>

        <div className="mt-4 text-center">
          Chưa có tài khoản ?
          <NavLink to="/register" className="text-mainBlue font-semibold ">
            {" "}
            Đăng kí
          </NavLink>
        </div>
      </form>
    </>
  );
}
