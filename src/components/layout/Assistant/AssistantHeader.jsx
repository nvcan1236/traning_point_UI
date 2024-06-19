import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/authContext";
import SelectBox from "../../formControls/SelectBox";
import Hover from "../Hover";
import { IoExitOutline, IoPersonOutline } from "react-icons/io5";
import { useCommon } from "../../../contexts/commonContext";
import { useEffect, useState } from "react";

export default function AssistantHeader() {
  const { user, dispatch } = useAuth();
  const [options, setOptions] = useState();
  const { periods } = useCommon();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: "logout" });
    navigate("/login");
  };

  const assignOptions = () => {
    let arr = [];
    periods.map((period) => {
      arr.push({
        id: period.id,
        name: `Học kì ${period.semester} - ${period.year}`,
        value: period.id,
      });
    });
    setOptions(arr);
    setSelectedOption(arr[0]);
    console.log();
  };

  useEffect(() => {
    assignOptions();
  }, []);

  const [selectedOption, setSelectedOption] = useState();

  return (
    <div className="flex justify-end items-center py-4 gap-3 ">
      <p className="font-medium text-mainBlue">
       {user && `Trợ lý khoa ${user.faculty.name}` }
      </p>

      <Hover
        componentOnHover={
          <ul className="bg-white shadow-md w-[160px] rounded-md p-2 flex flex-col gap-px ml-4">
            <NavLink
              to="/profile"
              className="px-4 py-1 cursor-pointer hover:bg-slate-100 transition-all flex items-center gap-2"
            >
              <IoPersonOutline /> Hồ sơ
            </NavLink>
            <li
              onClick={logout}
              className="px-4 py-1 cursor-pointer hover:bg-slate-100 transition-all flex items-center gap-2"
            >
              <IoExitOutline />
              Đăng xuất
            </li>
          </ul>
        }
      >
        <NavLink to="/profile" className="flex gap-2 items-center px-2">
          <img
            src={user.avatar}
            alt=""
            className="w-[36px] h-[36px] rounded-full object-cover p-[1px] border-2 border-mainBlue"
          />
          <span className="text-base font-medium text-mainBlue">
            {user.username}
          </span>
        </NavLink>
      </Hover>
      <div className="w-[170px] text-sm">
        <SelectBox
          className="rounded-lg py-1 "
          options={
            options && options.lenth > 0
              ? options
              : [{ id: 1, name: "Học kỳ", value: 1 }]
          }
          name="semester"
          onChange={(name, value) => {
            setSelectedOption(value);
          }}
          value={selectedOption?.name}
        />
      </div>
    </div>
  );
}
