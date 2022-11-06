import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useScrollToTop from "../../../hooks/useScrollToTop";
import useTitle from "../../../hooks/useTitle";

const Checkout = () => {
  const response = useLoaderData();
  const data = response.data;

  useScrollToTop();
  useTitle("Checkout");

  const navigate = useNavigate();
  if (!response.success) {
    return alert("Having some issue with the server. Try again later");
  }
  const { course_title, price, thumbnail, _id, course_slug } = data;

  const submitHandle = (e) => {
    e.preventDefault();
    toast.success(
      `Congratulations! You have successfully enrolled
      ${course_title}`
    );
    navigate("/success", {
      state: { course_slug: course_slug, course_id: _id },
    });
  };

  return (
    <section>
      <h1 className="sr-only">Checkout</h1>

      <div className="relative mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-base-200 py-12 md:py-24">
            <div className="mx-auto max-w-lg px-4 lg:px-8">
              <div className="mt-8">
                <p className="text-2xl font-medium tracking-tight">
                  <span className="font-serif">৳</span> {price}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  For the purchase of
                </p>
              </div>

              <div className="mt-12">
                <div className="flow-root">
                  <ul className="-my-4 divide-y divide-base-300">
                    <li className="flex items-center justify-between py-4 px-6 bg-base-100 shadow-md">
                      <div className="flex items-center">
                        <img
                          alt={course_title}
                          src={thumbnail}
                          className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                        />

                        <div className="ml-4">
                          <p className="text-sm">{course_title}</p>

                          <p className="mt-1 space-y-1 text-xs text-gray-500">
                            Quantity: 1
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm">
                          <span className="font-serif">৳</span> {price}
                          <small className="text-gray-500">x1</small>
                        </p>
                      </div>
                    </li>
                  </ul>

                  <div className="flex justify-end">
                    <p className="mt-7 w-44 text-end mr-2 text-lg font-medium bg-base-100 shadow-md py-3 rounded-lg px-2">
                      Total: <span className="font-serif">৳</span> {price}
                      <small className="text-gray-500">x1</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-base-100 py-12 md:py-24">
            <div className="mx-auto max-w-lg px-4 lg:px-8">
              <form onSubmit={submitHandle} className="grid grid-cols-6 gap-4">
                <div className="col-span-3">
                  <label
                    className="mb-1 block text-sm text-gray-600"
                    htmlFor="first_name"
                  >
                    First Name
                  </label>

                  <input
                    className="input input-bordered w-full"
                    type="text"
                    id="first_name"
                  />
                </div>

                <div className="col-span-3">
                  <label
                    className="mb-1 block text-sm text-gray-600"
                    htmlFor="last_name"
                  >
                    Last Name
                  </label>

                  <input
                    className="input input-bordered w-full"
                    type="text"
                    id="last_name"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    className="mb-1 block text-sm text-gray-600"
                    htmlFor="email"
                  >
                    Email
                  </label>

                  <input
                    className="input input-bordered w-full"
                    type="email"
                    id="email"
                    required
                  />
                </div>

                <div className="col-span-6">
                  <label
                    className="mb-1 block text-sm text-gray-600"
                    htmlFor="phone"
                  >
                    Phone
                  </label>

                  <input
                    className="input input-bordered w-full"
                    type="tel"
                    id="phone"
                  />
                </div>

                <fieldset className="col-span-6">
                  <legend className="mb-1 block text-sm text-gray-600">
                    Billing Address
                  </legend>

                  <div className="-space-y-px rounded-lg bg-base-100 shadow-sm">
                    <div className="mb-2">
                      <label className="sr-only" htmlFor="country">
                        Country
                      </label>

                      <select
                        className="select select-bordered w-full"
                        id="country"
                        name="country"
                        autoComplete="country-name"
                      >
                        <option>Bangladesh</option>
                        <option>India</option>
                        <option>Scotland</option>
                        <option>France</option>
                        <option>Belgium</option>
                        <option>Japan</option>
                      </select>
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="postal-code">
                        ZIP/Post Code
                      </label>

                      <input
                        className="input input-bordered w-full"
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        placeholder="ZIP/Post Code"
                      />
                    </div>
                  </div>
                </fieldset>

                <div className="col-span-6">
                  <button
                    className="block w-full rounded-lg bg-black p-2.5 text-sm text-white"
                    type="submit"
                  >
                    Enroll Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
