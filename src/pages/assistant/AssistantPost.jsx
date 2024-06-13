import {
  IoAddSharp
} from "react-icons/io5";
import Heading from "../../components/layout/Heading";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/Buttons/BackButton";
import { fetchPosts } from "../../hooks/useFetch";
import Loading from "../../components/layout/Loading";
import Post from "../../components/Post/Post";
import SecondaryButton from "../../components/Buttons/SecondaryButton";

export default function AssistantPost() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState();
  const getPosts = async () => {
    const data = await fetchPosts();
    setPosts(data);
  };
  useEffect(()=> {
    getPosts()
  }, [])
  return (
    <div className="p-6">
      <div className="flex justify-between items-end">
        <div className="flex items-end gap-6">
          <BackButton /> <Heading>Quản lý bài đăng</Heading>
        </div>
        <SecondaryButton
          className="rounded-sm flex gap-2 items-center py-2"
          onClick={() => {
            navigate("./edit");
          }}
        >
          <IoAddSharp /> Tạo bài đăng
        </SecondaryButton>
      </div>
      <section className="mt-6">
        <div className="flex flex-col gap-8">
          {posts &&
            posts.length > 0 &&
            posts.map((post) => <Post key={post.id} post={post} />)}
          {!posts && <Loading className="my-10" radius={40}/>}
          {posts && posts.length === 0 && (
            <p className="text-center py-40 text-slate-400">
              (Không có bài đăng)
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

