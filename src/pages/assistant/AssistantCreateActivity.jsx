/* eslint-disable react/prop-types */
import { useState } from "react";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import FormGroup from "../../components/formControls/FormGroup";
import Input from "../../components/formControls/Input";
import TextArea from "../../components/formControls/TextArea";
import Heading from "../../components/layout/Heading";
import { IoAddSharp } from "react-icons/io5";

export default function AssistantCreateActivity() {
  const [activity, setActivity] = useState({
    name: "",
    faculty: "",
    semester: "",
    pointGroup: "",
  });

  const emplyMission = {
    name: "",
    point: "",
    content: "",
    startDate: "",
    endDate: "",
  };

  const handleActivityChange = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
  };

  const handleMissionsChange = (e, index) => {
    const newMissions = [...missions];
    (newMissions[index][e.target.name] = e.target.value),
      setMissions(newMissions);
    
  };

  const [missions, setMissions] = useState([emplyMission]);

  return (
    <div className="p-6">
      <form className="flex gap-10">
        <div className="w-[35%]">
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
        </div>

        <div className="w-[65%]">
          <Heading>Tạo nhiệm vụ</Heading>
          <div className="flex flex-col gap-3 pl-6 ml-1 mt-2 border-l border-mainBlue ">
            {missions.map((mission, index) => (
              <Mission
                mission={mission}
                key={index}
                id={index}
                handleMissionsChange={handleMissionsChange}
              />
            ))}
          </div>
        </div>
      </form>
      <div className="flex justify-end mt-5 gap-2">
        <SecondaryButton
          onClick={() => setMissions([...missions, emplyMission])}
          className="rounded-sm flex gap-2 items-center"
        >
          <IoAddSharp /> Thêm nhiệm vụ
        </SecondaryButton>
        <PrimaryButton className="rounded-sm" type="submit">
          Tạo hoạt động
        </PrimaryButton>
      </div>
    </div>
  );
}

function Mission({ mission, id, handleMissionsChange }) {
  return (
    <div className="mt-5 flex flex-col gap-2">
      <h3 className="text-mainBlue font-medium bg-tintBlue px-4 py-2">
        Nhiệm vụ {id + 1}
      </h3>
      <div className="flex gap-4 justify-between">
        <FormGroup vertical label={"Tên nhiệm vụ"} className="flex-1">
          <Input
            className={"text-sm w-full"}
            value={mission.name}
            name={"name"}
            onChange={(e) => handleMissionsChange(e, id)}
          />
        </FormGroup>
        <FormGroup vertical label={"Số điểm"}>
          <Input
            type={"number"}
            className={"text-sm w-[150px]"}
            value={mission.point}
            name={"point"}
            onChange={(e) => handleMissionsChange(e, id)}
          />
        </FormGroup>
      </div>
      <div>
        <FormGroup vertical label={"Nội dung, cách thức"}>
          <TextArea
            id=""
            className={"w-full"}
            value={mission.content}
            name={"content"}
            onChange={(e) => handleMissionsChange(e, id)}
          ></TextArea>
        </FormGroup>
      </div>
      <div className="flex gap-4 justify-between">
        <FormGroup vertical label={"Ngày bắt đầu"} className="flex-1">
          <Input
            type={"date"}
            className={"text-sm w-full"}
            value={mission.startDate}
            name={"startDate"}
            onChange={(e) => handleMissionsChange(e, id)}
          />
        </FormGroup>
        <FormGroup vertical label={"Ngày kết thúc"} className="flex-1">
          <Input
            type={"date"}
            className={"text-sm w-full"}
            value={mission.endDate}
            name={"endDate"}
            onChange={(e) => handleMissionsChange(e, id)}
          />
        </FormGroup>
      </div>
    </div>
  );
}
