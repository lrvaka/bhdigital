import { useEffect, useRef } from "react";
import { gsap } from "../utils/gsap";
import waveEmoji from "../public/waveEmoji.png";
import Image from "next/image";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const featureList = [
  {
    title: "Lightning speed",
    details:
      "Our websites are built for speed. With every Core Web Vital metric being exceeded.",
    icon: (
      <svg
        className=" w-24 h-32 self-center my-10"
        width="161"
        height="202"
        viewBox="0 0 161 202"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M41.0888 6.06639C42.7207 2.376 46.3571 0 50.3865 0H130.742C138.297 0 143.222 7.98741 139.838 14.7818L116.981 60.6639H150.808C159.874 60.6639 164.407 71.6643 158 78.0947L37.5933 198.947C29.998 206.571 17.3459 198.725 20.7507 188.503L46.4176 111.217H10.1737C8.4788 111.217 6.81078 110.792 5.32112 109.981C3.83147 109.169 2.56739 107.997 1.64369 106.571C0.719995 105.144 0.165949 103.509 0.0318818 101.813C-0.102186 100.117 0.187972 98.4147 0.875998 96.86L41.0888 6.06639Z"
          fill="#F43F5E"
        />
      </svg>
    ),
  },
  {
    title: "Expert UX/UI",
    details:
      "Clean, sensical, sexy UX/UI design and development. We only make cool stuff - if it ain't cool, it ain't us.",
    icon: (
      <svg
        className=" w-24 h-32 self-center my-10"
        width="147"
        height="141"
        viewBox="0 0 147 141"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M134.169 0C131.646 0 129.184 0.744625 127.091 2.14667L93.0131 24.8544C84.4619 30.557 76.642 37.2865 69.7284 44.8922C83.9293 51.5676 95.3536 62.992 102.029 77.1928C109.635 70.2771 116.365 62.455 122.067 53.9015L144.781 19.8298C146.06 17.9086 146.794 15.6765 146.905 13.3711C147.016 11.0658 146.499 8.77361 145.41 6.7387C144.321 4.7038 142.7 3.0024 140.721 1.81572C138.741 0.629039 136.477 0.00151934 134.169 0ZM78.4895 94.0844C82.8872 91.642 87.1345 88.9382 91.2085 85.9874C88.501 79.1389 84.4172 72.9187 79.2099 67.7113C74.0026 62.504 67.7823 58.4203 60.9338 55.7127C57.9831 59.7845 55.2793 64.0295 52.8369 68.425L50.9719 71.7792C56.7152 73.4316 61.9447 76.5156 66.17 80.742C70.3953 84.9685 73.4779 90.1988 75.1287 95.9426L78.4962 94.0777L78.4895 94.0844ZM41.265 80.5C34.5931 80.5 28.1945 83.1504 23.4768 87.8681C18.7591 92.5858 16.1087 98.9844 16.1087 105.656C16.1091 107.035 15.8261 108.399 15.2774 109.664C14.7286 110.929 13.9258 112.067 12.9188 113.009C11.9117 113.951 10.7219 114.675 9.42307 115.138C8.1243 115.601 6.74429 115.791 5.36869 115.699C4.45913 115.637 3.55005 115.825 2.73859 116.24C1.92713 116.655 1.24378 117.283 0.761558 118.057C0.279335 118.831 0.0163625 119.721 0.000739143 120.632C-0.0148842 121.544 0.217429 122.442 0.672855 123.232C4.54283 129.955 10.5241 135.212 17.6881 138.187C24.8521 141.162 32.7979 141.689 40.2919 139.686C47.7859 137.682 54.4089 133.261 59.1324 127.107C63.8559 120.954 66.4158 113.413 66.4145 105.656C66.4145 102.353 65.7638 99.0815 64.4996 96.0294C63.2354 92.9773 61.3824 90.2041 59.0464 87.8681C56.7105 85.5321 53.9373 83.6791 50.8852 82.4149C47.8331 81.1507 44.5685 80.5 41.265 80.5Z"
          fill="#F43F5E"
        />
      </svg>
    ),
  },
  {
    title: "Secure",
    details:
      "Headless, static generated websites have little to no entry points, making them secure by default.",
    icon: (
      <svg
        className=" w-24 h-32 self-center my-10"
        width="161"
        height="212"
        viewBox="0 0 161 212"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M80.5 161.139C85.8375 161.139 90.9564 159.017 94.7305 155.24C98.5047 151.462 100.625 146.339 100.625 140.997C100.625 135.655 98.5047 130.532 94.7305 126.754C90.9564 122.977 85.8375 120.855 80.5 120.855C75.1625 120.855 70.0436 122.977 66.2695 126.754C62.4953 130.532 60.375 135.655 60.375 140.997C60.375 146.339 62.4953 151.462 66.2695 155.24C70.0436 159.017 75.1625 161.139 80.5 161.139ZM140.875 70.4985C146.212 70.4985 151.331 72.6206 155.106 76.3981C158.88 80.1755 161 85.2988 161 90.6409V191.353C161 196.695 158.88 201.818 155.106 205.596C151.331 209.373 146.212 211.495 140.875 211.495H20.125C14.7875 211.495 9.66864 209.373 5.89447 205.596C2.12031 201.818 0 196.695 0 191.353V90.6409C0 85.2988 2.12031 80.1755 5.89447 76.3981C9.66864 72.6206 14.7875 70.4985 20.125 70.4985H30.1875V50.3561C30.1875 37.0008 35.4883 24.1925 44.9237 14.7489C54.3591 5.30536 67.1563 0 80.5 0C87.1071 0 93.6496 1.3025 99.7538 3.83313C105.858 6.36376 111.404 10.073 116.076 14.7489C120.748 19.4249 124.454 24.9761 126.983 31.0856C129.511 37.1951 130.812 43.7432 130.812 50.3561V70.4985H140.875ZM80.5 20.1424C72.4938 20.1424 64.8155 23.3256 59.1542 28.9918C53.493 34.6579 50.3125 42.3429 50.3125 50.3561V70.4985H110.688V50.3561C110.688 42.3429 107.507 34.6579 101.846 28.9918C96.1845 23.3256 88.5062 20.1424 80.5 20.1424Z"
          fill="#F43F5E"
        />
      </svg>
    ),
  },
  {
    title: "Design at pace ",
    details:
      "Thanks to libraries like TailwindCSS, we rapidly develop composable and scalable UI components.",
    icon: (
      <svg
        className=" w-24 h-32 self-center my-10"
        width="161"
        height="97"
        viewBox="0 0 161 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M80.5 0C59.0065 0 45.6435 10.7065 40.25 32.2C48.3 21.4935 57.7185 17.4685 68.425 20.125C74.543 21.6545 78.9705 26.082 83.8005 30.9925C91.6895 39.0425 100.625 48.3 120.75 48.3C142.244 48.3 155.607 37.5935 161 16.1C152.95 26.8065 143.532 30.8315 132.825 28.175C126.707 26.6455 122.36 22.218 117.45 17.3075C109.561 9.2575 100.625 0 80.5 0ZM40.25 48.3C18.7565 48.3 5.3935 59.0065 0 80.5C8.05 69.7935 17.4685 65.7685 28.175 68.425C34.293 69.9545 38.64 74.382 43.5505 79.2925C51.4395 87.3425 60.375 96.6 80.5 96.6C101.994 96.6 115.357 85.8935 120.75 64.4C112.7 75.1065 103.282 79.1315 92.575 76.475C86.457 74.9455 82.11 70.518 77.1995 65.6075C69.3105 57.5575 60.375 48.3 40.25 48.3Z"
          fill="#F43F5E"
        />
      </svg>
    ),
  },
  {
    title: "Next-gen tech",
    details:
      "Latest and greatest technologies like NextJS - build once and don't worry about updates for years to come!",
    icon: (
      <svg
        className=" w-24 h-32 self-center my-10"
        width="161"
        height="162"
        viewBox="0 0 161 162"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.31698e-06 80.497C0.000518545 66.6063 3.59544 52.952 10.4352 40.8619C17.275 28.7718 27.1269 18.6574 39.0329 11.502C50.9389 4.34658 64.4939 0.393783 78.3798 0.027931C92.2657 -0.337921 106.01 2.89562 118.276 9.41415C130.543 15.9327 140.913 25.5143 148.38 37.2275C155.847 48.9406 160.156 62.3866 160.888 76.2581C161.62 90.1295 158.75 103.954 152.557 116.388C146.365 128.822 137.06 139.442 125.548 147.215L52.6685 45.1843C52.0081 44.259 51.071 43.5672 49.9921 43.2087C48.9132 42.8503 47.7484 42.8437 46.6656 43.1899C45.5827 43.5361 44.6378 44.2173 43.9671 45.1351C43.2963 46.053 42.9343 47.1602 42.9333 48.297V128.797H53.6667V65.041L116.242 152.646C103.967 158.729 90.3437 161.578 76.6603 160.925C62.977 160.271 49.6868 156.137 38.0476 148.913C26.4084 141.688 16.8053 131.613 10.1474 119.641C3.48936 107.669 -0.00328399 94.1959 2.31698e-06 80.497ZM107.333 107.33V42.9303H118.067V107.33H107.333Z"
          fill="#F43F5E"
        />
      </svg>
    ),
  },
  {
    title: "Seamless CI/CD",
    details:
      "Hosting on Vercel - whether your website is serving 1 user or 1 million, your websites are guaranteed to be secure and efficient.",
    icon: (
      <svg
        className=" w-24 h-32 self-center my-10"
        width="171"
        height="165"
        viewBox="0 0 171 165"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M67.6111 22.2038L85.5 5M49.7222 116.825L121.278 48.0095M85.5 159.834L103.389 142.63M125.75 142.63C131.681 142.63 137.368 140.365 141.562 136.332C145.755 132.299 148.111 126.829 148.111 121.126C148.111 115.422 145.755 109.952 141.562 105.919C137.368 101.886 131.681 99.6208 125.75 99.6208C119.819 99.6208 114.132 101.886 109.938 105.919C105.745 109.952 103.389 115.422 103.389 121.126C103.389 126.829 105.745 132.299 109.938 136.332C114.132 140.365 119.819 142.63 125.75 142.63ZM45.25 65.2132C51.1805 65.2132 56.8682 62.9476 61.0617 58.9147C65.2552 54.8817 67.6111 49.4119 67.6111 43.7085C67.6111 38.0051 65.2552 32.5353 61.0617 28.5024C56.8682 24.4695 51.1805 22.2038 45.25 22.2038C39.3195 22.2038 33.6318 24.4695 29.4383 28.5024C25.2448 32.5353 22.8889 38.0051 22.8889 43.7085C22.8889 49.4119 25.2448 54.8817 29.4383 58.9147C33.6318 62.9476 39.3195 65.2132 45.25 65.2132ZM27.3611 159.834C33.2916 159.834 38.9793 157.568 43.1728 153.535C47.3663 149.503 49.7222 144.033 49.7222 138.329C49.7222 132.626 47.3663 127.156 43.1728 123.123C38.9793 119.09 33.2916 116.825 27.3611 116.825C21.4306 116.825 15.7429 119.09 11.5494 123.123C7.3559 127.156 5 132.626 5 138.329C5 144.033 7.3559 149.503 11.5494 153.535C15.7429 157.568 21.4306 159.834 27.3611 159.834ZM143.639 48.0095C149.569 48.0095 155.257 45.7438 159.451 41.7109C163.644 37.6779 166 32.2081 166 26.5047C166 20.8013 163.644 15.3315 159.451 11.2986C155.257 7.26567 149.569 5 143.639 5C137.708 5 132.021 7.26567 127.827 11.2986C123.634 15.3315 121.278 20.8013 121.278 26.5047C121.278 32.2081 123.634 37.6779 127.827 41.7109C132.021 45.7438 137.708 48.0095 143.639 48.0095Z"
          stroke="#F43F5E"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Built to scale",
    details:
      "Component-based, modular applications that allow for seamless and scalable solutions.",
    icon: (
      <svg
        className=" w-24 h-32 self-center my-10"
        width="161"
        height="175"
        viewBox="0 0 161 175"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M161 107.564V163.564C161 166.349 159.894 169.019 157.925 170.989C155.955 172.958 153.285 174.064 150.5 174.064H10.5C7.71523 174.064 5.04451 172.958 3.07538 170.989C1.10625 169.019 0 166.349 0 163.564V107.564C0 104.779 1.10625 102.108 3.07538 100.139C5.04451 98.1702 7.71523 97.0639 10.5 97.0639C13.2848 97.0639 15.9555 98.1702 17.9246 100.139C19.8938 102.108 21 104.779 21 107.564V153.064H140V107.564C140 104.779 141.106 102.108 143.075 100.139C145.045 98.1702 147.715 97.0639 150.5 97.0639C153.285 97.0639 155.955 98.1702 157.925 100.139C159.894 102.108 161 104.779 161 107.564ZM45.5 135.564H115.5C118.285 135.564 120.955 134.458 122.925 132.489C124.894 130.519 126 127.849 126 125.064C126 122.279 124.894 119.608 122.925 117.639C120.955 115.67 118.285 114.564 115.5 114.564H45.5C42.7152 114.564 40.0445 115.67 38.0754 117.639C36.1062 119.608 35 122.279 35 125.064C35 127.849 36.1062 130.519 38.0754 132.489C40.0445 134.458 42.7152 135.564 45.5 135.564ZM52.675 73.8764L118.475 97.8514C119.623 98.2739 120.839 98.4815 122.062 98.464C124.541 98.4767 126.944 97.6123 128.847 96.0237C130.749 94.4352 132.028 92.2248 132.458 89.7838C132.887 87.3428 132.439 84.8285 131.194 82.6859C129.948 80.5433 127.984 78.9105 125.65 78.0764L59.85 54.1889C58.535 53.6087 57.115 53.3047 55.6777 53.2956C54.2405 53.2865 52.8167 53.5725 51.4945 54.136C50.1723 54.6996 48.9799 55.5285 47.9911 56.5716C47.0023 57.6147 46.2381 58.8496 45.746 60.2C45.2539 61.5504 45.0442 62.9874 45.13 64.4221C45.2158 65.8568 45.5952 67.2587 46.2448 68.5408C46.8943 69.8229 47.8002 70.958 48.9063 71.8758C50.0124 72.7936 51.2951 73.4745 52.675 73.8764ZM80.5 18.4014L134.137 63.3764C136.019 64.9716 138.409 65.8407 140.875 65.8264C142.408 65.8142 143.921 65.4719 145.31 64.8226C146.699 64.1733 147.932 63.2324 148.925 62.0639C149.82 61.0117 150.498 59.7916 150.917 58.475C151.336 57.1584 151.489 55.7715 151.367 54.3952C151.245 53.0189 150.85 51.6806 150.205 50.4584C149.561 49.2362 148.679 48.1546 147.613 47.2764L93.975 2.30145C91.8319 0.586682 89.1026 -0.220766 86.3715 0.0520163C83.6404 0.324799 81.1247 1.65613 79.3631 3.76089C77.6015 5.86566 76.734 8.57653 76.9465 11.313C77.159 14.0494 78.4346 16.5939 80.5 18.4014Z"
          fill="#F43F5E"
        />
      </svg>
    ),
  },
];

const Features = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "free",

    slides: {
      perView: 1.25,
      spacing: 10,
    },

    breakpoints: {
      "(min-width: 1000px)": {
        slides: { perView: 3.25, spacing: 20 },
      },
    },
  });

  useEffect(() => {
    let context = gsap.context(() => {
      gsap.set("#feature-container > *", { opacity: 0 });
      gsap.set("#wave-emoji", { x: -10 });

      gsap.to("#feature-container > *", {
        duration: 2,
        opacity: 1,
        ease: "back",
        stagger: 0.25,
        scrollTrigger: "#feature-container",
      });

      gsap.to("#wave-emoji", {
        rotate: "-5deg",
        yoyo: true,
        repeat: Infinity,
      });
    }, ref);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <div ref={ref} className="relative py-20 lg:py-32">
      <div className="  px-4 lg:px-8   max-w-screen-xl mx-auto ">
        <div
          id="feature-container"
          ref={sliderRef}
          onMouseUp={(e) => {
            const target = e.target as Element;
            target.classList.remove("cursor-grabbing");
          }}
          onMouseDown={(e) => {
            const target = e.target as Element;
            target.classList.add("cursor-grabbing");
          }}
          className="keen-slider cursor-grab "
        >
          {featureList.map((e, i) => (
            <div
              id="feature-item"
              key={e.title}
              className="keen-slider__slide glass-morph-1 rounded-md px-6 py-6 flex flex-col"
            >
              {e.icon}
              <div>
                <h3 className="text-xl lg:text-2xl">{e.title}</h3>
                <p className="text-gray-400 text-md lg:text-lg">{e.details}</p>
              </div>
            </div>
          ))}

          <div className="keen-slider__slide glass-morph-1 glass-morph-1 rounded-md px-6 py-6 flex flex-col justify-between">
            <div className="flex-1 self-center  flex">
              <Image
                id="wave-emoji"
                alt="wave emoji"
                src={waveEmoji}
                className=" object-contain self-center "
              />
            </div>

            <a
              href="#form"
              className=" text-center rounded-md transition-all inline-block bg-rose-500 p-2 text-lg font-semibold leading-7 text-white shadow-sm ring-1 ring-rose-500 hover:bg-rose-700 hover:ring-rose-700 lg:text-xl  lg:px-16 lg:py-3"
            >
              Let&apos;s get digital!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
