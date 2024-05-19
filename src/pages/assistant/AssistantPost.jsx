import {
  IoAddSharp,
  IoChatboxOutline,
  IoEllipsisVerticalSharp,
} from "react-icons/io5";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Heading from "../../components/layout/Heading";
import TransparentButton from "../../components/Buttons/TransparentButton";
import Hover from "../../components/layout/Hover";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { useState } from "react";
import Comment from "../../components/Post/Comment";
import { useNavigate } from "react-router-dom";

export default function AssistantPost() {
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <div className="flex justify-between items-end">
        <Heading className='text-xl'>Quản lý bài đăng</Heading>
        <PrimaryButton
          className="rounded-sm flex gap-2 items-center"
          onClick={() => {
            navigate("./edit");
          }}
        >
          <IoAddSharp /> Tạo bài đăng
        </PrimaryButton>
      </div>
      <section className="mt-6">
        <div className="flex flex-col gap-3">
          <Post />
          <Post />
          <Post />
        </div>
      </section>
    </div>
  );
}

function Post() {
  const [showComment, setShowComment] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex p-6 bg-slate-50 border border-tintBlue rounded-md shadow-sm shadow-tintBlue">
      <div className="w-[360px]">
        <img
          className="w-full"
          src="https://i.ytimg.com/vi/FvOpPeKSf_4/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGGUgWChJMA8=&rs=AOn4CLDDyO2qBCQUHEQQ0KIfF0bok1Qhlg"
          alt=""
        />
      </div>
      <div className="flex-1 pl-6 ">
        <h3 className="font-medium text-lg text-mainBlue">
          Hoạt động hiến máu tình nguyện
        </h3>
        <div className=" ">
          <p
            className={`mt-4 text-slate-700 ${
              !showFullContent && "line-clamp-5"
            }`}
          >
            NGÀY HỘI THANH NIÊN TIÊN TIẾN LÀM THEO LỜI BÁC - KHÔNG GIAN SIÊU XỊN
            ĐÓN CHÀO : : 📞Alo Alo! Các không gian siêu xịn đã “cập bến” tại
            “Ngày hội thanh niên tiên tiến làm theo lời Bác” năm 2024 rồi đây
            OUers ơi!!! ✨Nhằm kỷ niệm 134 năm ngày sinh của chủ tịch Hồ Chí
            Minh vĩ đại (19/5/1890 -19/5/2024) và kỷ niệm 113 năm ngày Bác ra đi
            tìm đường cứu nước (05/6/1911 - 05/6/2024), đồng thời đẩy mạnh các
            hoạt động học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí
            Minh. Năm học này, Đoàn trường tổ chức Ngày hội Thanh niên tiên tiến
            làm theo lời Bác năm 2024. 📍Ngày hội sẽ diễn ra các Không gian liên
            quan đến Văn hóa Hồ Chí Minh với các nhóm hoạt động nhằm giới thiệu
            các công trình, sản phẩm "làm theo lời Bác", tạo hiệu ứng lan tỏa
            của việc học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí
            Minh đến với sinh viên OU. ____________________________ QUYỀN LỢI
            KHI THAM GIA: 🔖Khi tham gia các Không gian các bạn sinh viên sẽ
            được cộng điểm rèn luyện vào điều 1 và điều 3 học kì II năm học
            2023-2024 💫Các hoạt động trong Ngày hội là minh chứng xét học bổng
            Thanh niên tiên tiến làm theo lời Bác. ✨Ngoài ra các bạn sinh viên
            có cơ hội được cấp chứng nhận Thanh niên khỏe nữa đó. Còn chần chừ
            gì mà chưa điền link đăng kí để chúng ta có buổi hẹn tại Ngày hội
            nào 👉🏻👈🏻 _______________________________ THÔNG TIN CHƯƠNG TRÌNH: 👉🏻
            Link đăng ký: https://tinyurl.com/4zw8x48z ⏰ Thời gian: 12g00 –
            16g00, Chủ nhật ngày 19/05/2024. 📍Địa điểm: Cơ sở 97 Võ Văn Tần,
            Phường Võ Thị Sáu, Quận 3. 🔖Điểm rèn luyện sẽ được cộng vào điều 1
            và Điều 3 học kì II năm học 2023-2024. 👇🏻Hãy cùng chúng mình “đi
            dạo“ sơ lược qua các không gian ở dưới bài đăng nhé!
            ___________________________________________________ MỌI THÔNG TIN
            CHI TIẾT XIN LIÊN HỆ: Email: canbovanphongdoanhoi@ou.edu.vn Fanpage:
            Tuổi trẻ Trường Đại học Mở TP. Hồ Chí Minh học tập và làm theo lời
            Bác #TNTTLTLB #HCMCOU
          </p>
          <button
            className="font-semibold cursor-pointer"
            onClick={() => setShowFullContent(!showFullContent)}
          >
            {showFullContent ? "Ẩn bớt" : "Xem thêm"}
          </button>
        </div>
        <div className="flex justify-between items-center mt-4 px-2 border-t pt-4">
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => setLiked(!liked)}
          >
            {liked ? (
              <BiSolidLike className="text-mainBlue w-6 h-6" />
            ) : (
              <BiLike className="text-mainBlue w-6 h-6" />
            )}
            10
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setShowComment(!showComment)}
          >
            <IoChatboxOutline className="text-mainBlue w-6 h-6" />
            <span>12 Bình luận</span>
          </div>
        </div>
        {showComment && (
          <div className="mt-6 flex flex-col gap-3">
            <h3>Tất cả bình luận</h3>
            <Comment className="bg-blue-50">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error,
              voluptatum.
            </Comment>
            <Comment type="reply">Lorem ipsum dolor sit amet.</Comment>
            <Comment>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              eveniet sint impedit?
            </Comment>
          </div>
        )}
      </div>
      <div className="flex items-start justify-between">
        <Hover
          componentOnHover={
            <div>
              <ul className="w-[160px] bg-white p-2 rounded-md border border-tintBlue">
                <li
                  className="text-sm hover:bg-slate-100 transition-all px-4 py-2"
                  onClick={() => {
                    navigate("./edit/1");
                  }}
                >
                  Chỉnh sửa
                </li>
                <li
                  className="text-sm hover:bg-slate-100 transition-all px-4 py-2"
                  onClick={() => {
                    navigate("/activities/detail/1");
                  }}
                >
                  Xem hoạt động
                </li>
              </ul>
            </div>
          }
        >
          <TransparentButton>
            <IoEllipsisVerticalSharp />
          </TransparentButton>
        </Hover>
      </div>
    </div>
  );
}
