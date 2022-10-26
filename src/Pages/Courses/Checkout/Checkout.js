import React from "react";

const Checkout = () => {
  return (
    <section>
      <h1 class="sr-only">Checkout</h1>

      <div class="relative mx-auto max-w-screen-2xl">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="bg-base-200 py-12 md:py-24">
            <div class="mx-auto max-w-lg px-4 lg:px-8">
              <div class="mt-8">
                <p class="text-2xl font-medium tracking-tight">
                  <span className="font-serif">৳</span> 00
                </p>
                <p class="mt-1 text-sm text-gray-500">For the purchase of</p>
              </div>

              <div class="mt-12">
                <div class="flow-root">
                  <ul class="-my-4 divide-y divide-base-300">
                    <li class="flex items-center justify-between py-4 px-6 bg-base-100 shadow-md">
                      <div class="flex items-center">
                        <img
                          alt="Trainer"
                          src="https://images.unsplash.com/photo-1565299999261-28ba859019bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                          class="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                        />

                        <div class="ml-4">
                          <p class="text-sm">English Speaking</p>

                          <p class="mt-1 space-y-1 text-xs text-gray-500">
                            Quantity: 1
                          </p>
                        </div>
                      </div>

                      <div>
                        <p class="text-sm">
                          <span className="font-serif">৳</span> 0
                          <small class="text-gray-500">x1</small>
                        </p>
                      </div>
                    </li>
                    <li class="flex items-center justify-between py-4 px-6 bg-base-100 shadow-md">
                      <div class="flex items-center">
                        <img
                          alt="Trainer"
                          src="https://images.unsplash.com/photo-1565299999261-28ba859019bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                          class="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                        />

                        <div class="ml-4">
                          <p class="text-sm">English Speaking</p>

                          <p class="mt-1 space-y-1 text-xs text-gray-500">
                            Quantity: 1
                          </p>
                        </div>
                      </div>

                      <div>
                        <p class="text-sm">
                          <span className="font-serif">৳</span> 0
                          <small class="text-gray-500">x1</small>
                        </p>
                      </div>
                    </li>
                  </ul>

                  <div className="flex justify-end">
                    <p className="mt-7 w-44 text-end mr-2 text-lg font-medium bg-base-100 shadow-md py-3 rounded-lg px-2">
                      Total: <span className="font-serif">৳</span> 0
                      <small class="text-gray-500">x1</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-base-100 py-12 md:py-24">
            <div class="mx-auto max-w-lg px-4 lg:px-8">
              <form class="grid grid-cols-6 gap-4">
                <div class="col-span-3">
                  <label
                    class="mb-1 block text-sm text-gray-600"
                    for="first_name"
                  >
                    First Name
                  </label>

                  <input
                    class="input input-bordered w-full"
                    type="text"
                    id="first_name"
                  />
                </div>

                <div class="col-span-3">
                  <label
                    class="mb-1 block text-sm text-gray-600"
                    for="last_name"
                  >
                    Last Name
                  </label>

                  <input
                    class="input input-bordered w-full"
                    type="text"
                    id="last_name"
                  />
                </div>

                <div class="col-span-6">
                  <label class="mb-1 block text-sm text-gray-600" for="email">
                    Email
                  </label>

                  <input
                    class="input input-bordered w-full"
                    type="email"
                    id="email"
                  />
                </div>

                <div class="col-span-6">
                  <label class="mb-1 block text-sm text-gray-600" for="phone">
                    Phone
                  </label>

                  <input
                    class="input input-bordered w-full"
                    type="tel"
                    id="phone"
                  />
                </div>

                <fieldset class="col-span-6">
                  <legend class="mb-1 block text-sm text-gray-600">
                    Billing Address
                  </legend>

                  <div class="-space-y-px rounded-lg bg-base-100 shadow-sm">
                    <div className="mb-2">
                      <label class="sr-only" for="country">
                        Country
                      </label>

                      <select
                        class="select select-bordered w-full"
                        id="country"
                        name="country"
                        autocomplete="country-name"
                      >
                        <option>England</option>
                        <option>Wales</option>
                        <option>Scotland</option>
                        <option>France</option>
                        <option>Belgium</option>
                        <option>Japan</option>
                      </select>
                    </div>

                    <div>
                      <label class="sr-only" for="postal-code">
                        ZIP/Post Code
                      </label>

                      <input
                        class="input input-bordered w-full"
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autocomplete="postal-code"
                        placeholder="ZIP/Post Code"
                      />
                    </div>
                  </div>
                </fieldset>

                <div class="col-span-6">
                  <button
                    class="block w-full rounded-lg bg-black p-2.5 text-sm text-white"
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
