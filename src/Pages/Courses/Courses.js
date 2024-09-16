import React, { useState } from "react";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";
import useTitle from "../../hooks/useTitle";
import LoadingSpinner from "../Common/LoadingSpinner";
import CourseCard from "./CourseCard";

const Courses = () => {
  const [cat_id] = useOutletContext();
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoad(true);
    fetch(`${process.env.REACT_APP_serverURL}/course-count?cat_id=${cat_id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPage(1);
          setCount(data.data);
          setError(null);
        } else {
          setError(data.error);
        }
      })
      .catch((err) => {
        setError(err);
      });
  }, [cat_id]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_serverURL}/courses-by-category/${cat_id}?page=${page}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCourses(data.data);
          setError(null);
        } else {
          setError(data.error);
        }
        setLoad(false);
      })
      .catch((err) => {
        console.log(err);
        setLoad(false);
        setError(err.message);
      });
  }, [cat_id, page, limit]);

  useScrollToTop();
  useTitle("Courses");

  const totalPage = Math.ceil(count / limit);

  return (
    <>
      {load ? (
        <LoadingSpinner />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div>
          <div className="px-2 md:px-3 py-10 flex flex-wrap justify-center gap-7">
            {courses?.map((course) => (
              <CourseCard course={course} key={course._id} />
            ))}
          </div>

          {
            // Pagination

            <div className="flex justify-evenly items-center pb-12">
              {count > limit && (
                <div className="btn-group">
                  {[...Array(totalPage).keys()]?.map((index) => {
                    return (
                      <button
                        key={index}
                        className={`btn ${
                          page === index + 1 ? "btn-active btn" : "btn"
                        }`}
                        onClick={() => setPage(index + 1)}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
                </div>
              )}

              <div className="form-control">
                <label className="label">
                  <span>View Per Page</span>
                </label>
                <select
                  className="select select-bordered"
                  onChange={(e) => setLimit(e.target.value)}
                  defaultValue={limit}
                >
                  <option value={4}>4</option>
                  <option value={6}>6</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                  <option value={25}>25</option>
                  <option value={30}>30</option>
                  <option value={40}>40</option>
                  <option value={50}>50</option>
                </select>
              </div>
            </div>
          }
        </div>
      )}
    </>
  );
};

export default Courses;
