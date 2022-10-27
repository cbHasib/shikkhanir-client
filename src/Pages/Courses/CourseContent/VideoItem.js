import React from "react";
import { NavLink } from "react-router-dom";

const VideoItem = ({ videoItem, setVideo, setTitle }) => {
  const { video_embed_link, video_id, video_name, video_slug } = videoItem;
  return (
    <NavLink
      onClick={() => {
        setVideo(video_embed_link);
        setTitle(video_name);
      }}
      to={`/courses/course-content/10/hsc-chemistry-chemical-changes/${video_slug}`}
      className={({ isActive }) =>
        isActive
          ? "block px-6 py-2 w-full bg-blue-600 text-white cursor-pointer"
          : "block px-6 py-2 w-full hover:bg-gray-300 text-slate-800 dark:text-gray-100 dark:bg-slate-700 cursor-pointer duration-200"
      }
    >
      {video_id}
      {". "} {video_name}
    </NavLink>
  );
};

export default VideoItem;
