/* eslint-disable react/prop-types */
import SecondaryButton from "../Buttons/SecondaryButton";
import PrimaryButton from "../Buttons/PrimaryButton";
import Heading from "../layout/Heading";
import FormGroup from "../formControls/FormGroup";
import TextArea from "../formControls/TextArea";
import Input from "../formControls/Input";
import { useRef, useState } from "react";
import { fetchReportMissing } from "../../hooks/useFetch";

export default function MissingModal({ show, setShow, mission }) {
  const [error, setError] = useState("");
  const [files, setFiles] = useState(null);
  const fileRef = useRef();
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!files) {
      setError("Vui lòng gửi kèm minnh chứng");
      return;
    }

    await fetchReportMissing(mission.id, desc, files);
    setShow(false);
    setFiles(null);
    setError("");
    setDesc("")
  };

  return (
    <div
      className={`fixed inset-0 z-20 bg-black bg-opacity-10 flex justify-center items-center ${
        show ? "visible" : "hidden"
      }`}
    >
      <div
        className={`w-[900px] py-10 px-14 bg-white border border-mainBlue rounded-sm transition-all duration-300 ${
          show ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <Heading>Báo thiếu</Heading>
        <div className="mt-3">
          <p>
            <span>Hoạt động: </span>
            {mission.activity.name}
          </p>
          <p>
            <span>Nhiệm vụ: </span>
            {mission.name} (+{mission.point} điểm)
          </p>
        </div>
        <form
          className="flex flex-col gap-4 mt-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          <FormGroup label={"Nhập mô tả"} vertical>
            <TextArea
              className={"w-full"}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></TextArea>
          </FormGroup>
          <div className="border border-mainBlue border-dashed rounded-xl h-[160px] px-6 flex items-center overflow-x-auto overflow-y-hidden gap-3">
            {files && files?.length ? (
              Array.from(files).map((file) => (
                <img
                  key={file.name}
                  src={URL.createObjectURL(file)}
                  className="h-[120px] max-w-[300px] object-cover "
                />
              ))
            ) : (
              <p className="text-center w-full text-slate-400">
                ( Minh chứng )
              </p>
            )}
          </div>
          <FormGroup label={"Upload minh chứng"} vertical>
            <Input
              type="file"
              ref={fileRef}
              multiple
              onChange={(e) => {
                if (e.target.files.length > 0) {
                  setFiles(e.target.files);
                } else {
                  setFiles(null);
                }
              }}
            ></Input>
          </FormGroup>
          <div className="flex items-center justify-end w-full">
            <div className="text-red-600 flex-1">{error}</div>
            <SecondaryButton
              className={"px-8 py-2 w-[100px]"}
              onClick={() => setShow(false)}
            >
              Huỷ
            </SecondaryButton>
            <PrimaryButton className={"px-8 ml-4 w-[120px]"} type="submit">
              Gửi
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}
