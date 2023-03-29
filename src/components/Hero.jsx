import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
    },
  };

  const mouseVariants = {
    moving: {
      x: [0, 9],
      y: [0, -0.3],
      transition: {
        yoyo: Infinity,
        duration: 1.5,
      },
    },
  };

  return (
    <section className="w-full h-screen mx-auto lg:pt-[240px] md:pt-[200px] pt-[150px] lg:mb-[0px] md:mb-[300px] sm:mb-[250px] mb-[10px]">
      {/* 2 column layout */}
      <div className="flex flex-col gap-20 sm:gap-0 2xl:mx-[230px] xl:mx-[100px] lg:flex-row mx-auto justify-center">
        <div className="lg:flex-[50%] max-w-[700px] px-10 mx-auto">
          <div className={`max-w-7xl mx-auto flex flex-row items-start gap-10`}>
            {/* Line decorator */}
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[var(--orange)]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>
            {/* Hero Text */}
            <div>
              <h1 className={`${styles.heroHeadText} font-bold`}>
                Hi, my <br className="sm:block hidden" />
                name is Devyn
                <span className={styles.sectionFullStop}>.</span>
              </h1>
              <p className={`${styles.heroSubText} mt-5`}>
                I am an aspiring software developer{" "}
                <br className="sm:block hidden" />
                from Singapore. My dream is to be able to create professional and beautiful-looking websites.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex-[50%] px-10 max-w-[500px] w-full mx-auto">
          {/* <ComputersCanvas/> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 711.188 669.683"
            className="w-100"
          >
            <path
              fill="#e6e6e6"
              d="M516.326 380.018L516.326 565.013 547.27 615.443 549.625 619.279 671.722 619.279 674.189 380.018 516.326 380.018z"
            ></path>
            <path
              d="M516.326 380.018L516.326 565.013 547.27 615.443 549.169 380.018 516.326 380.018z"
              opacity="0.1"
            ></path>
            <path
              fill="#e6e6e6"
              d="M221.566 375.084L221.566 560.08 190.622 610.51 188.267 614.345 66.17 614.345 63.703 375.084 221.566 375.084z"
            ></path>
            <path
              d="M221.566 375.084L221.566 560.08 190.622 610.51 188.723 375.084 221.566 375.084z"
              opacity="0.1"
            ></path>
            <path
              fill="#e6e6e6"
              d="M711.188 371.385L711.188 382.484 47.67 382.484 47.67 366.451 109.335 334.385 656.923 334.385 711.188 371.385z"
            ></path>
            <path
              d="M711.188 371.385L711.188 382.484 47.67 382.484 47.67 366.451 711.188 371.385z"
              opacity="0.1"
            ></path>
            <path
              fill="#3f3d56"
              d="M142.635 426.883L113.035 426.883 100.702 418.25 156.201 418.25 142.635 426.883z"
            ></path>
            <path
              fill="#3f3d56"
              d="M142.635 462.649L113.035 462.649 100.702 454.016 156.201 454.016 142.635 462.649z"
            ></path>
            <path
              fill="#3f3d56"
              d="M142.635 513.215L113.035 513.215 100.702 504.581 156.201 504.581 142.635 513.215z"
            ></path>
            <path
              fill="#3f3d56"
              d="M142.635 563.78L113.035 563.78 100.702 555.147 156.201 555.147 142.635 563.78z"
            ></path>
            <path
              fill="#3f3d56"
              d="M595.257 431.816L624.857 431.816 637.19 423.183 581.691 423.183 595.257 431.816z"
            ></path>
            <path
              fill="#3f3d56"
              d="M595.257 467.582L624.857 467.582 637.19 458.949 581.691 458.949 595.257 467.582z"
            ></path>
            <path
              fill="#3f3d56"
              d="M595.257 518.148L624.857 518.148 637.19 509.515 581.691 509.515 595.257 518.148z"
            ></path>
            <path
              fill="#3f3d56"
              d="M595.257 568.713L624.857 568.713 637.19 560.08 581.691 560.08 595.257 568.713z"
            ></path>
            <path
              fill="#3f3d56"
              d="M615.414 120.456H366.228a9.423 9.423 0 00-9.423 9.424v167.858a9.423 9.423 0 009.423 9.424h94.593l-3.544 22.626s-20.252 10.76-6.012 11.076 81.328 0 81.328 0 12.974 0-7.595-11.392l-3.334-22.31h93.75a9.423 9.423 0 009.424-9.424V129.88a9.423 9.423 0 00-9.424-9.424z"
            ></path>
            <path
              fill="#f2f2f2"
              d="M365.823 130.424H615.819V270.295H365.823z"
            ></path>
            <circle cx="490.821" cy="125.994" r="1.582" fill="#f2f2f2"></circle>
            <circle cx="490.821" cy="294.346" r="6.013" fill="#f2f2f2"></circle>
            <path
              fill="#3f3d56"
              d="M481.452 357.952L481.452 361.117 311.202 361.117 311.202 358.585 311.436 357.952 315.632 346.56 477.971 346.56 481.452 357.952z"
            ></path>
            {/* Mouse */}
            <motion.g variants={mouseVariants} animate="moving">
              <path
                fill="#3f3d56"
                d="M546.97 354.854c-.31 1.326-1.481 2.725-4.127 4.047-9.493 4.747-28.797-1.265-28.797-1.265s-14.873-2.532-14.873-9.177a11.866 11.866 0 011.304-.776c3.991-2.111 17.225-7.322 40.69.22a9.786 9.786 0 014.46 2.924 4.667 4.667 0 011.343 4.027z"
              ></path>
              <path
                d="M546.97 354.854c-11.62 4.452-21.978 4.785-32.607-2.598a23.343 23.343 0 00-13.886-4.573c3.991-2.111 17.225-7.322 40.69.22a9.786 9.786 0 014.46 2.924 4.667 4.667 0 011.343 4.027z"
                opacity="0.1"
              ></path>
              <ellipse
                cx="532.4"
                cy="350.99"
                fill="#f2f2f2"
                rx="4.114"
                ry="1.266"
              ></ellipse>
            </motion.g>

            <path
              d="M481.452 357.952L481.452 361.117 311.202 361.117 311.202 358.585 311.436 357.952 481.452 357.952z"
              opacity="0.1"
            ></path>
            <path
              fill="#2f2e41"
              d="M94.661 0a8.554 8.554 0 00-4.96 1.108c-1.477 1.011-2.407 2.782-3.357 4.43A52.986 52.986 0 0171.91 21.843c-4.289 3.142-9.742 7.06-9.008 12.852a17.372 17.372 0 002.09 5.426c3.957 7.987 14.754 14.159 13.692 23.273 3.931-6.581-1.327-9.835 2.604-16.416 1.872-3.134 5.124-6.672 7.95-4.704.947.66 1.569 1.841 2.554 2.42 2.351 1.38 4.853-1.258 6.934-3.127 7.177-6.442 17.383-4.755 26.314-2.747 4.216.948 8.847 2.19 11.34 6.22 3.276 5.299-3.114 11.02-4.729 17.011a3.264 3.264 0 003.503 4.062c2.68-.264 5.854-.48 6.013-1.657 3.372.12 7.503-.262 8.947-3.772a14.762 14.762 0 00.693-4.293c.53-5.898 3.033-11.278 4.691-16.89s2.38-12.19-.419-17.167a19.864 19.864 0 00-3.666-4.456C135.533 2.512 114.657-.022 94.661 0z"
            ></path>
            <path
              fill="#ffb8b8"
              d="M82.138 74.905s3.453 28.779-9.21 31.08 11.512 41.442 11.512 41.442l57.557 6.907-13.814-46.046s-9.209-3.453-3.453-26.476-42.592-6.907-42.592-6.907z"
            ></path>
            <path
              fill="#ffb8b8"
              d="M47.028 569.318L51.633 632.631 75.806 632.631 68.9 569.318 47.028 569.318z"
            ></path>
            <path
              fill="#ffb8b8"
              d="M224.303 449.6L227.756 502.552 254.233 491.041 243.872 447.298 224.303 449.6z"
            ></path>
            <path
              fill="#2f2e41"
              d="M29.761 327.58s1.151 66.766 8.058 88.637 5.756 23.023 4.605 26.476-2.303 1.151-2.303 6.907-2.302 96.695 0 104.753-6.907 21.872 0 23.023 39.139 0 40.29-6.907-9.209-9.209-4.604-13.813 11.51-98.998 11.51-98.998l16.117-65.615 29.93-34.534h63.312l19.57 75.975s-8.059 21.872-2.303 21.872 40.29 6.907 40.29-18.418-11.512-100.15-13.814-102.452 1.151-10.36-2.302-13.813-43.743-27.627-58.708-32.232-35.958-10.085-35.958-10.085zM254.233 481.832s-17.267-5.756-25.325 11.511-4.605 21.872-4.605 21.872 26.476 9.209 31.08 4.604c2.004-2.003 8.365-2.699 14.913-2.846 9.973-.224 12.627-14.333 3.208-17.619q-.422-.147-.853-.255c-9.21-2.302-18.418-17.267-18.418-17.267z"
            ></path>
            <circle cx="108.038" cy="59.365" r="34.534" fill="#ffb8b8"></circle>
            <path
              fill="#FE633D"
              d="M63.144 120.375s56.406 11.511 70.22-6.907 19.569 51.801 19.569 51.801l6.906 73.673-10.36 40.29s-54.103 43.743-71.37 47.196-43.743 5.756-43.743 5.756 8.058-127.776 8.058-130.078 20.72-81.73 20.72-81.73z"
            ></path>
            <path
              fill="#2f2e41"
              d="M80.298 98.786s-12.55-7.19-16.003-.283-35.685 24.174-39.139 24.174 6.907 95.545 2.303 107.056S.983 325.277 13.645 332.184s3.453-6.907 16.116 10.36 74.824 17.267 78.277 10.36-27.627-58.707-21.871-107.055 14.964-115.114 6.906-124.323-12.775-22.74-12.775-22.74zM121.852 106.561l1.603-5.518s47.896 15.879 50.198 26.239 1.151 82.882-6.907 88.637-19.57 14.965-11.511 28.779 17.267 28.778 24.174 29.93 19.57 9.208 16.116 17.266-44.895-6.906-44.895-6.906-27.627-20.72-26.476-52.953-2.302-125.474-2.302-125.474z"
            ></path>
            {/* Left Hand */}
            <path
              fill="#ffb8b8"
              d="M162.142 242.396l-27.628 51.8s-40.29 41.442-17.267 46.046 35.686-37.987 35.686-37.987l29.93-42.592z"
            ></path>
            <path
              fill="#2f2e41"
              d="M96.344 9.036a7.838 7.838 0 00-4.039.783 9.413 9.413 0 00-2.732 3.131 39.773 39.773 0 01-11.75 11.524c-3.491 2.22-7.93 4.99-7.333 9.084a11.36 11.36 0 001.702 3.835 30.163 30.163 0 013.665 18.8l9.6-13.953c1.524-2.216 4.172-4.716 6.473-3.325.77.466 1.276 1.301 2.078 1.71 1.914.975 3.95-.89 5.644-2.21 5.843-4.553 14.15-3.36 21.421-1.942 3.432.67 7.202 1.549 9.231 4.397 3.372 4.733-.149 11.572 1.819 17.04a5.023 5.023 0 002.078-3.317c2.745.085 6.108-.185 7.284-2.666a9.188 9.188 0 00.563-3.035c.432-4.168 2.47-7.97 3.82-11.937s1.936-8.617-.342-12.134a14.681 14.681 0 00-2.984-3.149C129.616 10.811 112.62 9.02 96.344 9.036zM162.142 122.677l10.725 2.847s24.96 63.92 19.204 107.662-9.209 34.535-9.209 34.535-9.209-20.72-29.93-16.116zM48.623 624.263c-2.776 3.773-2.22 9.165-4.678 13.151-2.132 3.455-6.149 5.267-8.815 8.329a22.326 22.326 0 00-2.266 3.26c-2.473 4.142-4.483 9.451-2.048 13.616 1.96 3.35 6.078 4.66 9.855 5.552 4.775 1.128 9.735 2.03 14.564 1.169s9.549-3.82 11.27-8.413a32.5 32.5 0 011.206-3.4c2.617-5.153 10.827-5.209 13.506-10.33 1.875-3.584.151-7.917-1.571-11.576l-5.261-11.177c-1.746-3.71-8.824-1.576-12.514-2.465-4.812-1.16-9.786-2.436-13.248 2.284z"
            ></path>
            <path
              fill="#ffb8b8"
              d="M10.192 265.418l48.347 74.824s29.93 37.988 39.139 20.72-32.232-46.045-32.232-46.045l-31.08-57.557z"
            ></path>
            <path
              fill="#2f2e41"
              d="M34.366 124.98l-9.21-2.303s-18.418 5.756-23.022 29.93-1.151 120.87 4.604 122.02 28.428-16.836 32.057-13.023-7.883-15.755-4.43-26.115 0-110.51 0-110.51z"
            ></path>
            {/* Computer screen code */}
            <g stroke="#FE633D" strokeWidth="8" data-name="Group 13">
              <motion.path
                d="M437.407 176.363H467"
                data-name="Rectangle 55"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  repeat: Infinity,
                  duration: 0.3,
                  repeatDelay: 1,
                }}
              ></motion.path>
              <motion.path
                d="M477.628 176.363H548"
                data-name="Rectangle 58"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  repeat: Infinity,
                  duration: 0.9,
                  repeatDelay: 0.7,
                }}
              ></motion.path>
              <motion.path
                d="M559.722 176.363H570"
                data-name="Rectangle 56"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  repeat: Infinity,
                  duration: 0.7,
                  repeatDelay: 0.6,
                }}
              ></motion.path>
              <motion.path
                d="M580.659 176.363H591"
                data-name="Rectangle 57"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  repeatDelay: 0.7,
                }}
              ></motion.path>
              <motion.path
                d="M399.941 192.341H410"
                data-name="Rectangle 66"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  repeat: Infinity,
                  duration: 0.9,
                  repeatDelay: 0.5,
                }}
              ></motion.path>
              <motion.path
                d="M420.878 192.341H431"
                data-name="Rectangle 67"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  repeatDelay: 0.6,
                }}
              ></motion.path>
              <motion.path
                d="M441.815 192.341H512"
                data-name="Rectangle 68"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  repeat: Infinity,
                  duration: 1.1,
                  repeatDelay: 0.75,
                }}
              ></motion.path>
              <motion.path
                d="M522.807 192.341H552"
                data-name="Rectangle 63"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  repeatDelay: 0.8,
                }}
              ></motion.path>
              <motion.path
                d="M563.028 192.341H592"
                data-name="Rectangle 64"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  repeat: Infinity,
                  duration: 1.3,
                  repeatDelay: 0.8,
                }}
              ></motion.path>
              <motion.path
                d="M399.941 207.768H410"
                data-name="Rectangle 71"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  repeat: Infinity,
                  duration: 1.4,
                  repeatDelay: 0.65,
                }}
              ></motion.path>
              <motion.path
                d="M420.878 207.768H450"
                data-name="Rectangle 70"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  repeatDelay: 0.6,
                }}
              ></motion.path>
              <motion.path
                d="M461.099 207.768H490"
                data-name="Rectangle 69"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  repeatDelay: 0.5,
                }}
              ></motion.path>
              <motion.path
                d="M500.768 207.768H571"
                data-name="Rectangle 74"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  repeat: Infinity,
                  duration: 1.7,
                  repeatDelay: 0.7,
                }}
              ></motion.path>
              <motion.path
                d="M582.312 207.768H592"
                data-name="Rectangle 73"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                  repeatDelay: 0.4,
                }}
              ></motion.path>
              <motion.path
                d="M399.941 222.644H429"
                data-name="Rectangle 59"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  repeat: Infinity,
                  duration: 1.9,
                  repeatDelay: 0.8,
                }}
              ></motion.path>
              <motion.path
                d="M440.162 222.644H511"
                data-name="Rectangle 62"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  repeatDelay: 0.25,
                }}
              ></motion.path>
              <motion.path
                d="M522.256 222.644H532"
                data-name="Rectangle 60"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  repeat: Infinity,
                  duration: 0.5,
                  repeatDelay: 0.55,
                }}
              ></motion.path>
              <motion.path
                d="M543.193 222.644H553"
                data-name="Rectangle 61"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  repeat: Infinity,
                  duration: 0.7,
                  repeatDelay: 0.25,
                }}
              ></motion.path>
            </g>
          </svg>
        </div>
      </div>

      {/* Scroll button */}
      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" className="block h-[64px]">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
