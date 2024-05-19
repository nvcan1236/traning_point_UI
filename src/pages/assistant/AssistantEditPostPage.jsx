/* eslint-disable no-unused-vars */
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import FileInput from "../../components/formControls/FileInput";
import FormGroup from "../../components/formControls/FormGroup";
import Input from "../../components/formControls/Input";
import SelectBox from "../../components/formControls/SelectBox";
import TextArea from "../../components/formControls/TextArea";
import Heading from "../../components/layout/Heading";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function AssistantEditPostPage() {
  const initialValues = {
    content: "",
    activity: "",
    images: "",
  };

  const handleFormSubmit = () => {
    console.log(formik.values);
  };

  const validationSchema = Yup.object({
    content: Yup.string()
      .required("Vui lòng nhập nội dung!")
      .max(500, "Nội dung phải dưới 500 ký tự!")
      .min(20, "Nội dung tối thiểu 20 ký tự"),
    activity: Yup.string().required("Vui lòng chọn hoạt động!"),
    images: Yup.mixed().required("Bài đăng tối thiểu 1 ảnh"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit: handleFormSubmit,
    validationSchema,
  });

  return (
    <div className="px-6">
      <Heading className="text-xl">Tạo bài đăng</Heading>
      <form onSubmit={formik.handleSubmit} className="mt-6 flex flex-col gap-4">
        <FormGroup
          label="Hoạt động"
          vertical
          message={formik.errors.activity}
          touched={formik.touched.activity}
        >
          <SelectBox
            options={[
              { id: 1, name: "Hoạt động hiến máu tình nguyện", value: 1 },
              { id: 2, name: "Hoạt động mùa hè xanh", value: 2 },
            ]}
            className="w-[320px] bg-tintBlue border !text-mainBlue"
            onChange={formik.setFieldValue}
            onBlur={formik.handleBlur}
            name="activity"
          />
        </FormGroup>

        <FormGroup
          vertical
          id="username"
          label="Nội dung"
          className="w-full"
          message={formik.errors.content}
          touched={formik.touched.content}
        >
          <TextArea
            id="content"
            {...formik.getFieldProps("content")}
            className="w-[600px]"
          ></TextArea>
        </FormGroup>

        <FormGroup
          vertical
          id="images"
          label="Ảnh"
          className=" w-full"
          message={formik.errors.images}
          touched={formik.touched.images}
        >
          {formik.values.images && (
            <img
              src={URL.createObjectURL(formik.values.images)}
              alt="post image"
              className="h-[300px] max-w-[600px] object-contain mb-2"
            />
          )}
          <FileInput
            id="images"
            name="images"
            onBlur={formik.handleBlur}
            onChange={formik.setFieldValue}
          />
        </FormGroup>

        <div className="flex ">
          <PrimaryButton type="submit" className="mt-4 rounded-sm">
            Đăng bài
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
}
