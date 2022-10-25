import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section class="relative bg-[url(https://i.ibb.co/jyrh7cR/bghero.png)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/75 dark:sm:from-black/95 sm:to-white/0 dark:sm:to-gray/25"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl text-base-content dark:text-white">
              Let's learn something
              <strong class="block font-extrabold text-purple-700">
                with ShikkhaNir
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Largest online education platform. Enrich your knowledge with
              ShikkhaNir. Make yourself talented!
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="/"
                class="block w-full rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="/"
                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-purple-600 shadow hover:text-purple-700 focus:outline-none focus:ring active:text-purple-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
