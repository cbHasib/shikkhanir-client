import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import VideoItem from "./VideoItem";

const CourseContent = () => {
  const { course_content, course_title } = useLoaderData().data;

  const [video, setVideo] = useState(course_content[0]?.video_embed_link);
  const [title, setTitle] = useState(null);

  return (
    <div className="p-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14 py-10 grid grid-cols-8 gap-10">
      <div className="col-span-8 lg:col-span-5 sticky top-20 mb-10 lg:mb-0">
        <iframe
          src={video}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full aspect-video rounded-2xl"
        ></iframe>
      </div>

      <div className="col-span-8 lg:col-span-3">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-5">
          {course_title}
        </h2>
        <div className="flex justify-center">
          <div className="bg-white dark:bg-slate-800 rounded-lg w-full divide-y divide-solid border border-1 border-gray-400 dark:border-gray-600 overflow-hidden">
            {course_content.map((item, index) => (
              <VideoItem
                videoItem={item}
                key={index}
                setVideo={setVideo}
                setTitle={setTitle}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
