import Link from "next/link";

export default function FooterEmailSignup({ title }) {
  return (
    <section class="relative bg-gray-900">
      <div class="container relative z-1 max-w-screen-xl py-8 text-left">
        <div class="rounded-sm border-2 border-primary-500 px-6 py-6 md:px-12 md:py-12 lg:px-16 lg:py-16 xl:flex xl:items-center">
          <div class="xl:-mt-2 xl:w-0 xl:flex-1">
            {title && (
              <h2 class="font-heading text-2xl font-semibold text-white md:text-4xl">
                {title}
              </h2>
            )}
          </div>
          <div class="mt-8 sm:w-full sm:max-w-md xl:ml-8 xl:mt-0">
            <form
              name="form1294"
              class="wufoo sm:flex"
              accept-charset="UTF-8"
              autocomplete="off"
              enctype="multipart/form-data"
              method="post"
              action="https://modiphy.wufoo.com/forms/zzb9yb30rquiqj/#public"
            >
              <label for="emailAddress" class="sr-only">
                Email address
              </label>
              <input
                id="Field6"
                name="Field6"
                spellcheck="false"
                type="email"
                autocomplete="email"
                maxlength="255"
                required=""
                class="w-full rounded-sm border-gray-400 px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700"
                placeholder="Enter your email"
              />
              <button
                id="saveForm"
                name="saveForm"
                type="submit"
                class="button mt-3 flex w-full border-transparent bg-primary-500 text-white hover:border-transparent hover:bg-primary-600 hover:text-white focus:ring-white focus:ring-offset-primary-600 sm:ml-3 sm:mt-0 sm:w-auto sm:flex-shrink-0"
              >
                Subscribe
              </button>

              <div class="hidden">
                <label for="comment">Do Not Fill This Out</label>
                <textarea
                  name="comment"
                  id="comment"
                  rows="1"
                  cols="1"
                ></textarea>
                <input
                  type="hidden"
                  id="idstamp"
                  name="idstamp"
                  value="i7MOdfILlcS5sPqSE2zMPvn/ivg5rSgzu+c2orUW1oM="
                />
                <input
                  type="hidden"
                  id="encryptedPassword"
                  name="encryptedPassword"
                  value=""
                />
              </div>
            </form>

            <p class="mt-3 text-center text-sm text-gray-400">
              We care about the protection of your data. Read our
              <a
                href="/privacy-policy"
                class="font-bold text-gray-300 hover:underline"
              >
                {" "}
                Privacy Policy.{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
