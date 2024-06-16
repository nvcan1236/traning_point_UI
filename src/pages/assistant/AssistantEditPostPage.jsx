/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import FormGroup from "../../components/formControls/FormGroup";
import Input from "../../components/formControls/Input";
import SelectBox from "../../components/formControls/SelectBox";
import TextArea from "../../components/formControls/TextArea";
import Heading from "../../components/layout/Heading";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  fetchActivities,
  fetchAddPost,
  fetchDeletePost,
  fetchDetailPost,
  fetchUpdatePost,
} from "../../hooks/useFetch";
import Loading from "../../components/layout/Loading";
import ToastMessage from "../../components/layout/ToastMessage";
import { useNavigate, useParams } from "react-router-dom";
import TransparentButton from "../../components/Buttons/TransparentButton";
import WarningModal from "../../components/layout/WarningModal";

export default function AssistantEditPostPage() {
  const initialValues = {
    content: "",
    activity: "",
    images: "",
  };
  const imageInputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(0);
  const [toastMessage, setToastMessage] = useState("");
  const [postEdit, setPostEdit] = useState();
  const { postId } = useParams();
  const [activities, setActivities] = useState();

  const handleFormSubmit = async () => {
    if (formik.values.images?.length === 0) {
      formik.setFieldError("images", "Vui lòng chọn ảnh bài đăng!!!");
    } else {
      formik.setFieldValue("images", imageInputRef.current.files);
      setLoading(true);
      if (postId) {
        await fetchUpdatePost(
          { content: formik.values.content, activity: formik.values.activity },
          postId
        );
        setToastMessage("Cập nhật bài đăng thành công");
      } else {
        await fetchAddPost(formik.values);
        setToastMessage("Đăng bài thành công");
      }
      setLoading(false);
      setShowToast((prev) => prev + 1);
    }
  };

  const getActivities = async () => {
    const data = await fetchActivities();
    setActivities(data);
  };

  const getPostEdit = async (postId) => {
    const data = await fetchDetailPost(postId);
    setPostEdit(data);
    formik.setValues({
      content: data.content,
      activity: data.activity.id,
    });
  };

  useEffect(() => {
    getActivities();
    postId && getPostEdit(postId);
  }, [postId]);

  const validationSchema = Yup.object({
    content: Yup.string()
      .required("Vui lòng nhập nội dung!")
      .max(2000, "Nội dung phải dưới 2000 ký tự!")
      .min(20, "Nội dung tối thiểu 20 ký tự"),
    activity: Yup.string().required("Vui lòng chọn hoạt động!"),
    // images: Yup.object().required("Bài đăng tối thiểu 1 ảnh"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit: handleFormSubmit,
    validationSchema,
  });

  const [showModal, setShowModal] = useState(false);
  const handleDelete = () => {
    setShowModal(true);
  };
  const hanndleCancelDelete = () => {
    setShowModal(false);
  };
  const navigate = useNavigate()
  const handleSubmitDelete = () => {
    fetchDeletePost(postId);
    setShowModal(false);
    navigate(-1)

  };

  return (
    <div className="p-6">
      <ToastMessage
        message={toastMessage}
        type="success"
        show={showToast}
        duration={5000}
      />
      <WarningModal
        message="Bạn có chắc muốn xoá bài đăng này?"
        submitText="Xoá bài đăng"
        cancelText="Huỷ"
        show={showModal}
        onCancel={hanndleCancelDelete}
        onSubmit={handleSubmitDelete}
      />
      <Heading className="text-xl">Tạo bài đăng</Heading>
      <form
        onSubmit={formik.handleSubmit}
        className="mt-6 flex flex-col gap-4 w-[600px]"
      >
        <FormGroup
          label="Hoạt động"
          vertical
          message={formik.errors.activity}
          touched={formik.touched.activity}
        >
          <SelectBox
            options={activities?.map((activity) => ({
              name: activity.name,
              id: activity.id,
              value: activity.id,
            }))}
            className=" bg-tintBlue border !text-mainBlue"
            onChange={formik.setFieldValue}
            onBlur={formik.handleBlur}
            name="activity"
            value={postEdit?.activity.name || "Hoạt động rèn luyện"}
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
            className="w-[600px] h-[200px]"
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
            <div className="w-[600px] overflow-x-auto flex gap-2 mb-4">
              {Array.from(formik.values.images).map((image) => (
                <img
                  key={image.name}
                  src={URL.createObjectURL(image)}
                  alt="post image"
                  className="h-[150px] max-w-[300px] object-contain mb-2"
                />
              ))}
            </div>
          )}

          {postEdit?.images.length > 0 && (
            <div className="w-[600px] overflow-x-auto flex gap-2 mb-4">
              {postEdit.images.map((image) => (
                <img
                  key={image.id}
                  src={image.url}
                  alt="post image"
                  className="h-[150px] max-w-[300px] object-contain mb-2"
                />
              ))}
            </div>
          )}

          <Input
            id="images"
            type="file"
            multiple="true"
            name="images"
            onBlur={formik.handleBlur}
            onChange={() =>
              formik.setFieldValue("images", imageInputRef.current.files)
            }
            ref={imageInputRef}
          />
        </FormGroup>

        <div className="flex items-end gap-3">
          {loading ? (
            <Loading radius={20} />
          ) : postId ? (
            <>
              <TransparentButton
                className="font-semibold text-red-600 bg-red-100"
                type={"button"}
                onClick={handleDelete}
              >
                Xoá
              </TransparentButton>
              <PrimaryButton
                type="submit"
                className="mt-4 rounded-sm w-[120px]"
              >
                Cập nhật
              </PrimaryButton>
            </>
          ) : (
            <PrimaryButton type="submit" className="mt-4 rounded-sm w-[120px]">
              Đăng bài
            </PrimaryButton>
          )}
        </div>
      </form>
    </div>
  );
}
