/* eslint-disable no-unused-vars */
// import React from 'react'

import { NavLink } from "react-router-dom";
import Post from "../components/Post/Post";
import { useEffect, useState } from "react";
import { API } from "../configs/APIconfig";
import Loading from "../components/layout/Loading";

export default function PostPage() {
  const [posts, setPosts] = useState([]);
  const [originPosts, setOriginPosts] = useState([]);

  const sideNavData = [
    {
      to: "./all",
      name: "Tất cả",
      type: "all",
    },
    {
      to: "./new",
      name: "Hoạt động mới",
      type: "new",
    },
    {
      to: "./this-week",
      name: "Hoạt động tháng này",
      type: "thisMonth",
    },
  ];

  const handleChangeTab = async (nav) => {
    let filteredPosts = [...originPosts];

    switch (nav) {
      case "new":
        filteredPosts = filteredPosts.filter((p) => {
          const createdDate = new Date(p.createdDate);
          const sevenDaysInMilliseconds = 7 * 24 * 60 * 60 * 1000;
          return Date.now() - createdDate <= sevenDaysInMilliseconds;
        });
        break;
      case "thisMonth":
        filteredPosts = filteredPosts.filter((p) => {
          const createdDate = new Date(p.createdDate);
          const thirtyDaysInMilliseconds = 30 * 24 * 60 * 60 * 1000;
          return Date.now() - createdDate <= thirtyDaysInMilliseconds;
        });
        break;
      case "all":
        break;
    }
    setPosts(filteredPosts);
  };

  const fetchPosts = async () => {
    const response = await fetch(API["getPost"], {
      headers: {
        Authorization: localStorage.getItem("USER_TOKEN"),
      },
    });
    if (!response.ok) {
      throw new Error("Something went wrong!!");
    }
    const posts = await response.json();
    setPosts(posts);
    setOriginPosts(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="flex justify-between">
      <ul className=" flex flex-col gap-2 pr-10 fixed mt-5">
        {sideNavData.map((nav) => (
          <div
            key={nav.name}
            onClick={() => handleChangeTab(nav.type)}
            className="w-full flex justify-stretch"
          >
            <NavLink
              to={nav.to}
              className={({ isActive }) => {
                return isActive
                  ? "bg-tintBlue border border-mainBlue rounded-sm px-8 py-3 flex-1"
                  : "px-8 py-3 flex-1";
              }}
            >
              {nav.name}
            </NavLink>
          </div>
        ))}
      </ul>

      <div className="ml-[260px] flex flex-col gap-10 flex-1">
        {posts && posts.length > 0 ? (
          posts.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <Loading className="my-10" />
        )}
      </div>
    </div>
  );
}
