import React from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import useTitle from "../../hooks/useTitle";

const FAQs = () => {
  useScrollToTop();
  useTitle("FAQs");

  return (
    <div>
      <section class="bg-base-200 py-20">
        <div>
          <h1 class="text-4xl font-semibold text-center text-base-content">
            Have any Questions?
          </h1>

          <div className="flex justify-center flex-wrap gap-5 mt-8 xl:mt-16 mx-auto text-base-content px-5">
            <div class="max-w-lg">
              <div class="divide-y divide-base-200 rounded-xl border border-base-200 bg-base-100">
                <details class="group p-6" open>
                  <summary class="flex cursor-pointer items-center justify-between">
                    <h2 class="text-lg font-medium">How to enroll a course?</h2>

                    <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p class="mt-4 leading-relaxed">
                    Go to course page then click on the 'Course Details' button
                    that you want to enroll then enrolled that course.
                  </p>
                </details>

                <details class="group p-6">
                  <summary class="flex cursor-pointer items-center justify-between">
                    <h2 class="text-lg font-medium">
                      Is tha course Free or Paid?
                    </h2>

                    <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p class="mt-4 leading-relaxed">
                    Both Free and Paid course are available at our website.
                  </p>
                </details>

                <details class="group p-6">
                  <summary class="flex cursor-pointer items-center justify-between">
                    <h2 class="text-lg font-medium">
                      Can you watch videos from my mobile device?
                    </h2>

                    <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p class="mt-4 leading-relaxed">
                    You can watch the videos from any device that connected to
                    the internet from anywhere.
                  </p>
                </details>

                <details class="group p-6">
                  <summary class="flex cursor-pointer items-center justify-between">
                    <h2 class="text-lg font-medium">
                      I have forgotten my account password. What should I do?
                    </h2>

                    <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p class="mt-4 leading-relaxed">
                    Simply go to login page then click on the 'Forget Password'.
                    Submit your mail to get an email that contains recover
                    password information.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
