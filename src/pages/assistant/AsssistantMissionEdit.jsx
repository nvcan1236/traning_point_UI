/* eslint-disable react/prop-types */
import FormGroup from "../../components/formControls/FormGroup";
import Input from "../../components/formControls/Input";
import TextArea from "../../components/formControls/TextArea";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAddMission } from "../../hooks/useFetch";
import Heading from "../../components/layout/Heading";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import { IoAddSharp } from "react-icons/io5";

export default function AssistantMissionEdit({ missionData }) {
  const initialValues = {
    name: "",
    content: "",
    point: "",
    startDate: "",
    endDate: "",
  };

  const { activityId } = useParams();
  const [isCreate, setIsCreate] = useState(true);

  const handleSubmitMision = () => {
    if (!activityId) {
      alert("Vui lòng tạo hoạt động trước");
    }
    formik.setValues(initialValues);
    fetchAddMission(formik.values, activityId);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Thông tin bắt buộc"),
    content: Yup.string().required("Thông tin bắt buộc"),
    point: Yup.number().required("Thông tin bắt buộc"),
    startDate: Yup.date()
      .required("Thông tin bắt buộc")
      .max(Yup.ref("endDate"), "Ngày bắt đầu phải trước ngày kết thúc"),
    endDate: Yup.date()
      .required("Thông tin bắt buộc")
      .min(Yup.ref("startDate"), ""),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmitMision,
  });

  useEffect(() => {
    if (missionData) {
      formik.setValues(missionData);
      setIsCreate(false);
    }
  }, [missionData]);

  return (
    <div>
      <div className="flex justify-between items-end">
        <Heading>Tạo nhiệm vụ</Heading>{" "}
        <SecondaryButton className={"rounded-sm flex gap-2 items-center"} onClick={()=> setIsCreate(true)}>
          <IoAddSharp />
          Thêm
        </SecondaryButton>
      </div>
      <form className="mt-8 flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        <div className="flex gap-4 justify-between">
          <FormGroup
            vertical
            label={"Tên nhiệm vụ"}
            className="flex-1"
            message={formik.errors.name}
            touched={formik.touched.name}
          >
            <Input
              className={"text-sm w-full"}
              {...formik.getFieldProps("name")}
            />
          </FormGroup>
          <FormGroup
            vertical
            label={"Số điểm"}
            message={formik.errors.point}
            touched={formik.touched.point}
          >
            <Input
              type={"number"}
              className={"text-sm w-[150px]"}
              {...formik.getFieldProps("point")}
            />
          </FormGroup>
        </div>
        <div>
          <FormGroup
            vertical
            label={"Nội dung, cách thức"}
            message={formik.errors.content}
            touched={formik.touched.content}
          >
            <TextArea
              id=""
              className={"w-full text-sm"}
              {...formik.getFieldProps("content")}
            ></TextArea>
          </FormGroup>
        </div>
        <div className="flex gap-4 justify-between">
          <FormGroup
            vertical
            label={"Ngày bắt đầu"}
            className="flex-1"
            message={formik.errors.startDate}
            touched={formik.touched.startDate}
          >
            <Input
              type={"date"}
              className={"text-sm w-full"}
              {...formik.getFieldProps("startDate")}
            />
          </FormGroup>
          <FormGroup
            vertical
            label={"Ngày kết thúc"}
            className="flex-1"
            message={formik.errors.endDate}
            touched={formik.touched.endDate}
          >
            <Input
              type={"date"}
              className={"text-sm w-full"}
              {...formik.getFieldProps("endDate")}
            />
          </FormGroup>
        </div>
        <div className="flex justify-end mt-5 gap-2 ">
          <PrimaryButton className="rounded-sm px-8 py-1" type="submit">
            {isCreate ? "Tạo mới" : "Cập nhật"}
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
}
