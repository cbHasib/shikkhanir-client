import React from "react";
import { useEffect } from "react";

const VideoItem = ({
  videoItem,
  setVideo,
  setTitle,
  vdoIdx,
  setVdoIdx,
  index,
}) => {
  const { youtube_video_id, video_title } = videoItem;

  // https://www.youtube.com/embed/${courseContent[0]?.youtube_video_id}
  const video_link = `https://www.youtube.com/embed/${youtube_video_id}`;

  useEffect(() => {
    if (index === 0) {
      setVideo(video_link);
      setTitle(`${index}. ${video_title}`);
    }
  }, [video_link, video_title, index, setVideo, setTitle]);

  return (
    <button
      onClick={() => {
        setVideo(video_link);
        setTitle(`${index}. ${video_title}`);
        setVdoIdx(index);
      }}
      className={
        index === vdoIdx
          ? "block px-6 py-2 w-full bg-primary text-white cursor-pointer text-left"
          : "block px-6 py-2 w-full hover:bg-gray-300 text-slate-800 dark:text-gray-100 dark:bg-slate-700 cursor-pointer duration-200 text-left"
      }
    >
      {index}
      {". "} {video_title}
    </button>
  );
};

export default VideoItem;
