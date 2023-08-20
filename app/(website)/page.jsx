import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4">
      <div className="col-span-full mb-4 xl:mb-2">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Profile
        </h1>
      </div>
      <div className="col-span-full xl:col-auto">
        <div className="mb-4 rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
          <div className="sm:flex sm:space-x-4 xl:block xl:space-x-0">
            <img
              alt=""
              src="profile.jpg"
              className="mb-2 h-20 w-20 rounded-lg"
            />

            <div>
              <h2 className="text-xl font-bold dark:text-white">
                Elijah Kinyanjui | Tech Innovator
              </h2>
              <ul className="mt-2 space-y-1">
                <li className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 20 20"
                    className="mr-2 text-lg text-gray-900 dark:text-gray-100"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clip-rule="evenodd"></path>
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                  </svg>
                  Fullstack Developer
                </li>
                <li className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 20 20"
                    className="mr-2 text-lg text-gray-900 dark:text-gray-100"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                      clip-rule="evenodd"></path>
                  </svg>
                  Nairobi, Kenya
                </li>
              </ul>
            </div>
          </div>
          <div className="sm:flex xl:block xl:space-y-4">
            <div className="sm:flex-1">
              <address className="text-sm font-normal not-italic text-gray-500 dark:text-gray-400">
                <div className="mt-4">Email address</div>
                <a
                  className="text-sm font-medium text-gray-900 dark:text-white"
                  href="mailto:webmaster@flowbite.com">
                  ekkinyanjui@gmail.com
                </a>

                <div className="mt-4">Phone number</div>
                <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  +254725926132
                </div>
              </address>
            </div>
          </div>
        </div>
        <div className="mb-4 rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
          <div className="flow-root">
            <h3 className="text-xl font-bold dark:text-white">
              Skills
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              <li>
                <span
                  className="flex h-fit items-center gap-1 rounded-full rounded-md bg-green-100 px-2 px-3 py-1 py-2 text-base font-normal font-semibold text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300"
                  data-testid="flowbite-badge">
                  <span>System Design</span>
                </span>
              </li>
              <li>
                <span
                  className="flex h-fit items-center gap-1 rounded-full rounded-md bg-green-100 px-2 px-3 py-1 py-2 text-base font-normal font-semibold text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300"
                  data-testid="flowbite-badge">
                  <span>Front-end Development</span>
                </span>
              </li>
              <li>
                <span
                  className="flex h-fit items-center gap-1 rounded-full rounded-md bg-green-100 px-2 px-3 py-1 py-2 text-base font-normal font-semibold text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300"
                  data-testid="flowbite-badge">
                  <span>Software Testing</span>
                </span>
              </li>
              <li>
                <span
                  className="flex h-fit items-center gap-1 rounded-full rounded-md bg-green-100 px-2 px-3 py-1 py-2 text-base font-normal font-semibold text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300"
                  data-testid="flowbite-badge">
                  <span>UI Design</span>
                </span>
              </li>
              <li>
                <span
                  className="flex h-fit items-center gap-1 rounded-full rounded-md bg-green-100 px-2 px-3 py-1 py-2 text-base font-normal font-semibold text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300"
                  data-testid="flowbite-badge">
                  <span>React Developer</span>
                </span>
              </li>
              <li>
                <span
                  className="flex h-fit items-center gap-1 rounded-full rounded-md bg-green-100 px-2 px-3 py-1 py-2 text-base font-normal font-semibold text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300"
                  data-testid="flowbite-badge">
                  <span>Backend Development</span>
                </span>
              </li>
              <li>
                <span
                  className="flex h-fit items-center gap-1 rounded-full rounded-md bg-green-100 px-2 px-3 py-1 py-2 text-base font-normal font-semibold text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300"
                  data-testid="flowbite-badge">
                  <span>Devops</span>
                </span>
              </li>
              <li>
                <span
                  className="flex h-fit items-center gap-1 rounded-full rounded-md bg-green-100 px-2 px-3 py-1 py-2 text-base font-normal font-semibold text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300"
                  data-testid="flowbite-badge">
                  <span>Cloud</span>
                </span>
              </li>
              <li>
                <span
                  className="flex h-fit items-center gap-1 rounded-full rounded-md bg-green-100 px-2 px-3 py-1 py-2 text-base font-normal font-semibold text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300"
                  data-testid="flowbite-badge">
                  <span>Prototyping</span>
                </span>
              </li>
              <li>
                <span
                  className="flex h-fit items-center gap-1 rounded-full rounded-md bg-green-100 px-2 px-3 py-1 py-2 text-base font-normal font-semibold text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300"
                  data-testid="flowbite-badge">
                  <span>Database</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-4 rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
          <div className="flow-root">
            <h3 className="text-xl font-bold dark:text-white">
              Hobbies
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              <li>
                <span
                  className="bg-primary-100 text-primary-800 dark:bg-primary-200 dark:text-primary-800 group-hover:bg-primary-200 dark:group-hover:bg-primary-300 flex h-fit items-center gap-1 rounded-full rounded-md px-2 px-3 py-1 py-2 text-base font-normal font-semibold"
                  data-testid="flowbite-badge">
                  <span>Music</span>
                </span>
              </li>
              <li>
                <span
                  className="bg-primary-100 text-primary-800 dark:bg-primary-200 dark:text-primary-800 group-hover:bg-primary-200 dark:group-hover:bg-primary-300 flex h-fit items-center gap-1 rounded-full rounded-md px-2 px-3 py-1 py-2 text-base font-normal font-semibold"
                  data-testid="flowbite-badge">
                  <span>Swimming</span>
                </span>
              </li>

              <li>
                <span
                  className="bg-primary-100 text-primary-800 dark:bg-primary-200 dark:text-primary-800 group-hover:bg-primary-200 dark:group-hover:bg-primary-300 flex h-fit items-center gap-1 rounded-full rounded-md px-2 px-3 py-1 py-2 text-base font-normal font-semibold"
                  data-testid="flowbite-badge">
                  <span>Movies</span>
                </span>
              </li>
              <li>
                <span
                  className="bg-primary-100 text-primary-800 dark:bg-primary-200 dark:text-primary-800 group-hover:bg-primary-200 dark:group-hover:bg-primary-300 flex h-fit items-center gap-1 rounded-full rounded-md px-2 px-3 py-1 py-2 text-base font-normal font-semibold"
                  data-testid="flowbite-badge">
                  <span>Travelling</span>
                </span>
              </li>
              <li>
                <span
                  className="bg-primary-100 text-primary-800 dark:bg-primary-200 dark:text-primary-800 group-hover:bg-primary-200 dark:group-hover:bg-primary-300 flex h-fit items-center gap-1 rounded-full rounded-md px-2 px-3 py-1 py-2 text-base font-normal font-semibold"
                  data-testid="flowbite-badge">
                  <span>Reading</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="mb-4 rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
          <h3 className="mb-4 text-xl font-bold dark:text-white">
            BIO
          </h3>
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <dt className="text-lg font-medium text-gray-900 dark:text-white">
                About me
              </dt>
              <dd className="mt-1 max-w-prose space-y-3 text-sm text-gray-500 dark:text-gray-400">
                <p>
                  Results-driven Full Stack Developer with 4 years of
                  experience in developing and maintaining robust web
                  applications. Skilled in both backend and frontend
                  development, leveraging a wide range of programming
                  languages and frameworks. Strong problem-solving
                  abilities and a collaborative team player dedicated
                  to delivering high-quality solutions.
                </p>
              </dd>
              <dt className="text-lg font-medium text-gray-900 dark:text-white">
                Goals and Aspirations
              </dt>
              <dd className="mt-1 max-w-prose space-y-3 text-sm text-gray-500 dark:text-gray-400">
                <p>
                  Elijah aspires to be at the forefront of
                  technological advancements, leveraging his skills
                  and creativity to develop cutting-edge web
                  applications and digital solutions. With a passion
                  for problem-solving and a collaborative mindset, he
                  seeks to contribute to projects that make a positive
                  impact on people&apos;s lives.
                </p>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Education
              </dt>
              <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                Alliance High School, University of Nairobi
              </dd>
            </div>

            <div>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Languages
              </dt>
              <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                English, Swahili
              </dd>
            </div>

            <div>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Birthday
              </dt>
              <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                2nd July
              </dd>
            </div>
          </dl>
        </div>
        <div className="mb-4 rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16 lg:gap-8 2xl:gap-24">
            <div className="space-y-6">
              <div>
                <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
                  Figma
                </div>
                <div
                  id=":r14:"
                  aria-label="progressbar"
                  aria-valuenow="95"
                  role="progressbar">
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="flex h-2.5 items-center justify-center rounded-full bg-gray-600 text-center font-medium leading-none text-blue-100 dark:bg-gray-300"
                      style={{ width: "95%" }}></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
                  Php
                </div>
                <div
                  id=":r15:"
                  aria-label="progressbar"
                  aria-valuenow="55"
                  role="progressbar">
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="flex h-2.5 items-center justify-center rounded-full bg-gray-600 text-center font-medium leading-none text-blue-100 dark:bg-gray-300"
                      style={{ width: "55%" }}></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
                  HTML
                </div>
                <div
                  id=":r16:"
                  aria-label="progressbar"
                  aria-valuenow="85"
                  role="progressbar">
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="flex h-2.5 items-center justify-center rounded-full bg-gray-600 text-center font-medium leading-none text-blue-100 dark:bg-gray-300"
                      style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
                  React
                </div>
                <div
                  id=":r17:"
                  aria-label="progressbar"
                  aria-valuenow="65"
                  role="progressbar">
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="flex h-2.5 items-center justify-center rounded-full bg-gray-600 text-center font-medium leading-none text-blue-100 dark:bg-gray-300"
                      style={{ width: "65%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
                  Vue
                </div>
                <div
                  id=":r18:"
                  aria-label="progressbar"
                  aria-valuenow="45"
                  role="progressbar">
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="flex h-2.5 items-center justify-center rounded-full bg-gray-600 text-center font-medium leading-none text-blue-100 dark:bg-gray-300"
                      style={{ width: "45%" }}></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
                  Marketing
                </div>
                <div
                  id=":r19:"
                  aria-label="progressbar"
                  aria-valuenow="90"
                  role="progressbar">
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="flex h-2.5 items-center justify-center rounded-full bg-gray-600 text-center font-medium leading-none text-blue-100 dark:bg-gray-300"
                      style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
                  Product Design
                </div>
                <div
                  id=":r1a:"
                  aria-label="progressbar"
                  aria-valuenow="99"
                  role="progressbar">
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="flex h-2.5 items-center justify-center rounded-full bg-gray-600 text-center font-medium leading-none text-blue-100 dark:bg-gray-300"
                      style={{ width: "99%" }}></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
                  Angular
                </div>
                <di
                  id=":r1b:"
                  aria-label="progressbar"
                  aria-valuenow="45"
                  role="progressbar">
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="flex h-2.5 items-center justify-center rounded-full bg-gray-600 text-center font-medium leading-none text-blue-100 dark:bg-gray-300"
                      style={{ width: "45%" }}></div>
                  </div>
                </di>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
