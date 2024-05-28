/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import FormGroup from "../../components/formControls/FormGroup";
import Input from "../../components/formControls/Input";
import TextArea from "../../components/formControls/TextArea";
import Heading from "../../components/layout/Heading";
import { IoAddSharp } from "react-icons/io5";
import AssistantMissionEdit from "./AsssistantMissionEdit";

export default function AssistantCreateActivity() {
  const [activity, setActivity] = useState({
    name: "",
    faculty: "",
    semester: "",
    pointGroup: "",
  });

  const handleActivityChange = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
  };

  const handleActivitySubmit = (e) => {
    e.preventDefault();
  };

  const [missionEditing, setMissionEditing] = useState(null);

  return (
    <div className="p-6">
      <div className="flex gap-10">
        <div className="w-1/2">
          <Heading>Tạo hoạt động</Heading>
          <div className="mt-5 flex flex-col gap-2 ">
            <FormGroup vertical label={"Tên hoạt động"}>
              <Input
                className={"text-sm w-full"}
                value={activity.name}
                name={"name"}
                onChange={(e) => handleActivityChange(e)}
                required
              />
            </FormGroup>
            <FormGroup vertical label={"Khoa"}>
              <Input
                className={"text-sm w-full"}
                value={activity.faculty}
                name={"faculty"}
                onChange={(e) => handleActivityChange(e)}
              />
            </FormGroup>
            <div className="flex justify-between gap-2">
              <FormGroup vertical label={"Kỳ học"} className="flex-1">
                <Input
                  className={"text-sm w-full"}
                  value={activity.semester}
                  name={"semester"}
                  onChange={(e) => handleActivityChange(e)}
                />
              </FormGroup>
              <FormGroup vertical label={"Họat động điều"} className="flex-1">
                <Input
                  className={"text-sm w-full"}
                  value={activity.pointGroup}
                  name={"pointGroup"}
                  onChange={(e) => handleActivityChange(e)}
                />
              </FormGroup>
            </div>
          </div>

          <div className="flex justify-end mt-2 gap-2">
            <PrimaryButton className="rounded-sm px-8" type="submit">
              Lưu
            </PrimaryButton>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-mainBlue">Các nhiệm vụ </h3>
            <div className="flex flex-col gap-3 mt-2 ">
              <div
                className="text-sm py-4 px-6 border border-mainBlue rounded-md border-l-[6px] cursor-pointer hover:translate-x-2 transition-all"
                onClick={() =>
                  setMissionEditing({
                    name: "Tham gia",
                    point: "5",
                    content: "Tham gia hoạt động này và điểm danh ",
                    startDate: "2024-03-15",
                    endDate: "2024-03-15",
                  })
                }
              >
                <div className="flex gap-6 items-center justify-between">
                  <div>
                    <span className="font-medium text-base mr-6">Tham gia</span>
                    <span>+5 điểm</span>
                  </div>
                  <span className="justify-self-end">
                    10/02/2024 - 14/02/2024
                  </span>
                </div>
                <p className="font-light mt-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
                  aspernatur.
                </p>
              </div>

              <div
                className="text-sm py-4 px-6 border border-mainBlue rounded-md border-l-[6px] cursor-pointer hover:translate-x-2 transition-all"
                onClick={() =>
                  setMissionEditing({
                    name: "Bán tổ chức",
                    point: "7",
                    content:
                      "Tham gia hổ trợq tổ chức hoạt động này và điểm danh ",
                    startDate: "2024-03-15",
                    endDate: "2024-02-14",
                  })
                }
              >
                <div className="flex gap-6 items-center justify-between">
                  <div>
                    <span className="font-medium text-base mr-6">Tham gia</span>
                    <span>+5 điểm</span>
                  </div>
                  <span className="justify-self-end">
                    10/02/2024 - 14/02/2024
                  </span>
                </div>
                <p className="font-light mt-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
                  aspernatur.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[0.5px] bg-mainBlue mt-6"></div>

        <div className="w-1/2">
          <Heading>Tạo nhiệm vụ</Heading>
          <div className="flex flex-col gap-3 ">
            <AssistantMissionEdit missionData={missionEditing} />
          </div>
        </div>
      </div>
    </div>
  );
}

