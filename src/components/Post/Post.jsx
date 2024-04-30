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
import { useState } from "react";
import Comment from "./Comment";

function Post() {
  const [showComment, setShowComment] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex gap-4 p-4 text-sm border  border-tintBlue rounded-md post-images ">
      <Swiper
        slidesPerView="auto"
        pagination={{
          type: "fraction",
        }}
        style={{
          alignSelf:"start"
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {[1, 2, 3].map((i) => (
          <SwiperSlide key={i} >
            <img
              src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/439008056_829507969209170_3711046084065229065_n.jpg?stp=dst-jpg_p843x403&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEopLmx0yX_fVoPcyL2DJ67npMDb9dNkYCekwNv102RgLorW_fJqgWQgl8wUJuSliefhj2svZS895MlIwS24ND_&_nc_ohc=VZhl-PntF7wAb78PaU7&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfDiZcTKk1ZA7St2Iial7hDWsG9Nqm7MqrS7eKqMoE4aKg&oe=662BAE5A"
              alt=""
              className="select-none max-h-[400px] mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-1/2 flex flex-col gap-3 px-3">
        <div className="flex items-center gap-3">
          <Avatar
            src="https://images.unsplash.com/photo-1713208176490-3ac46ac160a8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            radius={40}
          />

          <div>
            <span className="font-medium">canhnguyen</span> <br />{" "}
            <span>April 21, 2024</span>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-base">Khoa CNTT - drl điêu 1</h3>
          <p className={`${!showFullContent && "line-clamp-5"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rem
            itaque tempora, numquam ut fugit beatae autem totam quis ducimus
            accusamus facere? Ducimus adipisci sunt, consectetur minus totam
            dolorum voluptates? <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id unde
            blanditiis quas!
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
          <PrimaryButton className="px-6">Tham gia</PrimaryButton>
        </div>
        <div className="flex items-center gap-4">
          <Avatar
            src={
              "https://images.unsplash.com/photo-1548778943-5bbeeb1ba6c1?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            radius={40}
          />
          <Input
            placeholder="Viết bình luận ... "
            className="rounded-full flex-1"
          />
          <IoSend className="text-mainBlue w-6 h-6" />
        </div>

        {showComment && (
          <div className="mt-6 flex flex-col gap-3">
            <h3>Tất cả bình luận</h3>
            <Comment>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error,
              voluptatum.
            </Comment>
            <Comment>Lorem ipsum dolor sit amet.</Comment>
            <Comment>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              eveniet sint impedit?
            </Comment>
          </div>
        )}
      </div>
    </div>
  );
}

Post.propTypes = {};

export default Post;
