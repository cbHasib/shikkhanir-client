import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../Common/LoadingSpinner";
import VideoItem from "./VideoItem";

const CourseContent = () => {
  const { courseId, slug } = useParams();

  const course_title = slug.split("-").join(" ").toUpperCase();

  const [courseContent, setCourseContent] = useState([]);
  const [load, setLoad] = useState(true);

  const [vdoIdx, setVdoIdx] = useState(0);

  useEffect(() => {
    setLoad(true);
    fetch(`${process.env.REACT_APP_serverURL}/course-content/${courseId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCourseContent(data.data);
        } else {
          setCourseContent([]);
        }
        setLoad(false);
      })
      .catch((err) => {
        setLoad(false);
        console.log(err.message);
      });
  }, [courseId]);

  // return;

  const [video, setVideo] = useState("");
  const [title, setTitle] = useState("video");

  // https://www.youtube.com/embed/${courseContent[0]?.youtube_video_id}

  return (
    <>
      {load ? (
        <LoadingSpinner />
      ) : (
        <div className="p-5 mx-auto md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14 py-10 grid grid-cols-8 gap-10">
          {video && (
            <div className="col-span-8 lg:col-span-5 lg:mb-0 h-full">
              <div className="lg:sticky lg:top-20 fixed right-10 top-20 bottom-10 left-10">
                <iframe
                  src={video}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="aspect-video rounded-2xl mb-2 w-full"
                ></iframe>

                <h2 className="text-2xl font-medium text-primary dark:text-white/90">
                  {title}
                </h2>
              </div>
            </div>
          )}

          <div className="col-span-8 lg:col-span-3 pt-[55%] lg:pt-0 overflow-hidden">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-5">
              {course_title}
            </h2>
            <div className="flex justify-center">
              <div className="bg-white dark:bg-slate-800 rounded-lg w-full divide-y divide-solid border border-1 border-gray-400 dark:border-gray-600 overflow-hidden">
                {courseContent?.map((item, index) => (
                  <VideoItem
                    videoItem={item}
                    key={index}
                    setVideo={setVideo}
                    setTitle={setTitle}
                    index={index}
                    setVdoIdx={setVdoIdx}
                    vdoIdx={vdoIdx}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseContent;
