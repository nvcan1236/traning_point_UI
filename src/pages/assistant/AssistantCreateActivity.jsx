/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import FormGroup from "../../components/formControls/FormGroup";
import Input from "../../components/formControls/Input";
import Heading from "../../components/layout/Heading";
import AssistantMissionEdit from "./AsssistantMissionEdit";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  fetchAddActivity,
  fetchDeleteActivity,
  fetchDetailActivity,
  fetchUpdateActivity,
} from "../../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import SelectBox from "../../components/formControls/SelectBox";
import { useCommon } from "../../contexts/commonContext";
import TransparentButton from "../../components/Buttons/TransparentButton";
import WarningModal from "../../components/layout/WarningModal";

export default function AssistantCreateActivity() {
  const initialValues = {
    name: "",
    faculty: "",
    semester: 1,
    pointGroup: "",
    maxPoint: 0,
  };
  const navigate = useNavigate();
  const { activityId } = useParams();

  const handleSubmitActivity = async () => {
    if (activityId) {
      await fetchUpdateActivity(formik.values, activityId);
    } else {
      const data = await fetchAddActivity(formik.values);
      navigate(`./${data?.id}`);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Thông tin bắt buộc"),
    faculty: Yup.number().required("Thông tin bắt buộc"),
    semester: Yup.string().required("Thông tin bắt buộc"),
    pointGroup: Yup.number().required("Thông tin bắt buộc"),
    maxPoint: Yup.number().required("Thông tin bắt buộc"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmitActivity,
  });

  const [missionEditing, setMissionEditing] = useState(null);
  const [activity, setActivity] = useState();

  const getActivity = async (id) => {
    const data = await fetchDetailActivity(id);
    formik.setValues({
      name: data.name,
      faculty: 1,
      semester: 1,
      pointGroup: data.pointGroup.id,
      maxPoint: data.maxPoint,
    });
    setActivity(data);
  };

  const { faculties, pointGroups } = useCommon();

  useEffect(() => {
    activityId && getActivity(activityId);
  }, [activityId, missionEditing]);

  const [showModal, setShowModal] = useState(false);
  const handleDelete = () => {
    setShowModal(true);
  };
  const hanndleCancelDelete = () => {
    setShowModal(false);
  };

  const handleSubmitDelete = () => {
    // fetchDeleteActivity(activityId)
    navigate('/activities')
    setShowModal(false);
  };

  return (
    <div className="p-6">
      <WarningModal
        message=" Tất cả các nhiệm vụ cũng bị xoá. Bạn có chắc muốn xoá hoạt động này?"
        submitText="Xoá hoạt động"
        cancelText="Huỷ"
        show={showModal}
        onCancel={hanndleCancelDelete}
        onSubmit={handleSubmitDelete}
      />
      <div className="flex gap-10">
        <div className="w-1/2">
          <Heading>Tạo hoạt động</Heading>
          <form
            className="mt-8 flex flex-col gap-4 "
            onSubmit={formik.handleSubmit}
          >
            <FormGroup
              vertical
              label={"Tên hoạt động"}
              message={formik.errors.name}
              touched={formik.touched.name}
            >
              <Input
                className={"text-sm w-full"}
                {...formik.getFieldProps("name")}
              />
            </FormGroup>
            <div className="flex justify-between gap-2">
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
                  onChange={formik.setFieldValue}
                  onBlur={formik.handleBlur}
                  name="faculty"
                  className={"text-sm !bg-white !text-black border"}
                ></SelectBox>
              </FormGroup>

              <FormGroup
                vertical
                label={"Kỳ học"}
                className="flex-1"
                message={formik.errors.semester}
                touched={formik.touched.semester}
              >
                <Input
                  className={"text-sm w-full"}
                  {...formik.getFieldProps("semester")}
                />
              </FormGroup>
            </div>
            <div className="flex justify-between gap-2">
              <FormGroup
                vertical
                label={"Họat động điều"}
                className="flex-1"
                message={formik.errors.pointGroup}
                touched={formik.touched.pointGroup}
              >
                <SelectBox
                  options={pointGroups.map((p) => ({
                    id: p.id,
                    value: p.id,
                    name: p.name,
                  }))}
                  onChange={formik.setFieldValue}
                  onBlur={formik.handleBlur}
                  name="pointGroup"
                  value={activity?.pointGroup.name}
                  className={"w-full  text-sm !bg-white !text-black border"}
                ></SelectBox>
              </FormGroup>

              <FormGroup
                vertical
                label={"Điểm tối đa"}
                className="flex-1"
                message={formik.errors.maxPoint}
                touched={formik.touched.maxPoint}
              >
                <Input
                  type="number"
                  className={"text-sm w-full"}
                  {...formik.getFieldProps("maxPoint")}
                />
              </FormGroup>
            </div>

            <div className="flex justify-end mt-2 gap-2">
              {activityId && <TransparentButton
                className="font-semibold text-red-600 bg-red-100"
                onClick={handleDelete}
                type="button"
              >
                Xoá
              </TransparentButton>}
              <PrimaryButton className={`rounded-sm px-8 `} type="submit">
                Lưu
              </PrimaryButton>
            </div>
          </form>

          <div className="mt-4">
            <h3 className="font-semibold text-mainBlue">Các nhiệm vụ </h3>
            <div className="flex flex-col gap-3 mt-2 ">
              {!activity?.missions?.length && (
                <p className="text-center py-20 text-slate-400">
                  {" "}
                  ( Chưa có nhiệm vụ được tạo ){" "}
                </p>
              )}
              {activity?.missions?.length &&
                activity.missions.map((mission) => (
                  <div
                    key={mission.id}
                    className="text-sm py-4 px-6 border border-mainBlue rounded-md border-l-[6px] cursor-pointer hover:translate-x-2 transition-all"
                    onClick={() => setMissionEditing(mission)}
                  >
                    <div className="flex gap-6 items-center justify-between">
                      <div>
                        <span className="font-medium text-base mr-6">
                          {mission.name}
                        </span>
                        <span>+ {mission.point} điểm</span>
                      </div>
                      <span className="justify-self-end">
                        {new Date(mission.startDate).toLocaleDateString("vi")} -{" "}
                        {new Date(mission.endDate).toLocaleDateString("vi")}
                      </span>
                    </div>
                    <p className="font-light mt-1">{mission.content}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="w-[0.5px] bg-mainBlue mt-6"></div>

        <div className="w-1/2">
          <AssistantMissionEdit
            missionData={missionEditing}
            setMissionEditing={setMissionEditing}
          />
        </div>
      </div>
    </div>
  );
}
