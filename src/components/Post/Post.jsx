/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types'
import { BiLike, BiSolidLike } from "react-icons/bi";
import { IoChatboxOutline, IoSend } from "react-icons/io5";
import PrimaryButton from "../Buttons/PrimaryButton";
import Avatar from "../Images/Avatar";
import Input from "../formControls/Input";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import { API } from "../../configs/APIconfig";
import Loading from "../layout/Loading";

function Post({ post }) {
  const [showComment, setShowComment] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);
  const [comments, setComments] = useState();
  const [commentEditing, setCommentEditing] = useState("");
  const [interaction, setInteraction] = useState({
    commentCount: post.commentCount,
    likeCount: post.likeCount,
    liked: post.liked,
  });
  const [missions, setMissions] = useState([]);
  const [showMissions, setShowMissions] = useState(false);

  const handleShowMissions = async () => {
    const res = await fetch(API.missions(post.activity.id), {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
      },
    });
    if (res.ok) {
      const data = await res.json();
      setMissions(data);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(API.comments(post.id), {
        headers: {
          Authorization: localStorage.getItem("USER_TOKEN"),
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong!!!");
      }
      const comments = await response.json();
      setComments(comments);
    } catch (ex) {
      console.log(ex);
    }
  };

  const fetchPostComment = async () => {
    try {
      if (!commentEditing) {
        throw new Error("Please text comment !!");
      }
      const response = await fetch(API.comments(post.id), {
        headers: {
          Authorization: localStorage.getItem("USER_TOKEN"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: commentEditing }),
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Somethong went wrong!!!");
      }
      setCommentEditing("");
      setInteraction({
        ...interaction,
        commentCount: interaction.commentCount + 1,
      });
      fetchComments();
    } catch (ex) {
      console.log(ex);
    }
  };

  const fetchLike = async () => {
    try {
      setInteraction({
        ...interaction,
        liked: !interaction.liked,
        likeCount: interaction.likeCount + (interaction.liked ? -1 : 1),
      });
      const response = await fetch(API.likePost(post.id), {
        headers: {
          Authorization: localStorage.getItem("USER_TOKEN"),
        },
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Something went wrong!!");
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    showComment && fetchComments();
    showMissions && handleShowMissions();
  }, [showComment, showMissions]);

  return (
    <div className="flex gap-4 p-4 text-sm border  border-tintBlue rounded-md post-images">
      <Swiper
        slidesPerView="auto"
        pagination={{
          type: "fraction",
        }}
        style={{
          alignSelf: "start",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {[1, 2, 3].map((i) => (
          <SwiperSlide key={i}>
            <img
              src="https://res.cloudinary.com/dbd7vfk12/image/upload/v1716751285/uqmgkeumvtrvvbr1n7cn.jpg"
              alt=""
              className="select-none max-h-[400px] mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-1/2 flex flex-col gap-3 px-3">
        <div className="flex items-center gap-3">
          <Avatar src={post.assistant.avatar} radius={40} />
          <div>
            <span className="font-medium">{`${post.assistant.lastName} ${post.assistant.firstName}`}</span>{" "}
            <br />{" "}
            <span>{new Date(post.createdDate).toLocaleDateString("vi")}</span>
          </div>
        </div>

        <div className="flex-1">
          <h3>
            Khoa {post.assistant.faculty} - Điểm rèn luyện điều{" "}
            {post.activity.pointGroupId}
          </h3>
          <h3 className="font-semibold text-base">{post.activity.name}</h3>
          <p className={`${!showFullContent && "line-clamp-5"}`}>
            {post.content}
          </p>
          <button
            className="font-semibold cursor-pointer"
            onClick={() => setShowFullContent(!showFullContent)}
          >
            {showFullContent ? "Ẩn bớt" : "Xem thêm"}
          </button>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={fetchLike}
          >
            {interaction?.liked ? (
              <BiSolidLike className="text-mainBlue w-6 h-6" />
            ) : (
              <BiLike className="text-mainBlue w-6 h-6" />
            )}
            {interaction.likeCount}
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setShowComment(!showComment)}
          >
            <IoChatboxOutline className="text-mainBlue w-6 h-6" />
            <span>{interaction.commentCount} Bình luận</span>
          </div>

          <div className="relative">
            <PrimaryButton
              className="px-6 !py-2 text-sm"
              onClick={() => setShowMissions(!showMissions)}
            >
              Tham gia
            </PrimaryButton>
            <Missions show={showMissions} setShow={setShowMissions} missionData={missions} />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Input
            placeholder="Viết bình luận ... "
            className="rounded-full flex-1"
            value={commentEditing}
            onChange={(e) => setCommentEditing(e.target.value)}
          />
          <IoSend
            className={`${
              commentEditing
                ? "text-mainBlue"
                : "text-slate-400 pointer-events-none"
            } w-6 h-6`}
            onClick={fetchPostComment}
          />
        </div>

        {showComment && (
          <div className="mt-6 flex flex-col gap-3">
            <h3>Tất cả bình luận</h3>
            {comments === null && <Loading />}
            {comments && comments.length > 0 ? (
              <>
                {comments.map((cmt) => (
                  <Comment key={cmt.id} comment={cmt} />
                ))}
              </>
            ) : (
              <p className="text-center my-4 text-slate-500">
                Chưa có bình luận nào
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

Post.propTypes = {};

export default Post;

function Missions({ missionData, setShow, show }) {
  const fetchRegister = async (missionId) => {
    const res = await fetch(API.registerMission(missionId), {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
      },
      method: "POST"
    });
    if(res.ok) {
      console.log("Đăng ký thàng công")
      setShow(false)
    }
  };

  return (
    <div className={`border rounded-sm w-[200px] p-2 absolute bg-white right-0 mt-2 ${!show&&"hidden"}`}>
      <ul>
        {missionData?.length > 0 &&
          missionData.map((mission) => (
            <li
              key={mission.id}
              className="px-4 py-2 text-sm hover:bg-slate-200 line-clamp-1 overflow-hidden"
              onClick={()=>fetchRegister(mission.id)}
            >
              {mission.name}
            </li>
          ))}
      </ul>
    </div>
  );
}
