/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FormGroup from "../../components/formControls/FormGroup";
import Input from "../../components/formControls/Input";
import TextArea from "../../components/formControls/TextArea";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

export default function AssistantMissionEdit({ missionData }) {
  const initalMission = {
    name: "",
    point: "",
    content: "",
    startDate: "",
    endDate: "",
  };
  const [mission, setMission] = useState(initalMission);

  useEffect(() => {
    setMission(missionData);
  }, [missionData]);

  const handleMissionsChange = (e) => {
    setMission({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitMission = (e) => {
    e.preventDefault();
    console.log(mission);
    setMission(initalMission);
  };

  return (
    <form className="mt-5 flex flex-col gap-2" onSubmit={handleSubmitMission}>
      <div className="flex gap-4 justify-between">
        <FormGroup vertical label={"Tên nhiệm vụ"} className="flex-1">
          <Input
            className={"text-sm w-full"}
            value={mission?.name}
            name={"name"}
            onChange={(e) => handleMissionsChange(e)}
          />
        </FormGroup>
        <FormGroup vertical label={"Số điểm"}>
          <Input
            type={"number"}
            className={"text-sm w-[150px]"}
            value={mission?.point}
            name={"point"}
            onChange={(e) => handleMissionsChange(e)}
          />
        </FormGroup>
      </div>
      <div>
        <FormGroup vertical label={"Nội dung, cách thức"}>
          <TextArea
            id=""
            className={"w-full"}
            value={mission?.content}
            name={"content"}
            onChange={(e) => handleMissionsChange(e)}
          ></TextArea>
        </FormGroup>
      </div>
      <div className="flex gap-4 justify-between">
        <FormGroup vertical label={"Ngày bắt đầu"} className="flex-1">
          <Input
            type={"date"}
            className={"text-sm w-full"}
            value={mission?.startDate}
            name={"startDate"}
            onChange={(e) => handleMissionsChange(e)}
          />
        </FormGroup>
        <FormGroup vertical label={"Ngày kết thúc"} className="flex-1">
          <Input
            type={"date"}
            className={"text-sm w-full"}
            value={mission?.endDate}
            name={"endDate"}
            onChange={(e) => handleMissionsChange(e)}
          />
        </FormGroup>
      </div>
      <div className="flex justify-end mt-5 gap-2">
        <PrimaryButton className="rounded-sm px-8" type="submit">
          Lưu
        </PrimaryButton>
      </div>
    </form>
  );
}
