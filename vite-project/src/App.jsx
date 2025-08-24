import "./App.css";
import { CiSearch } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";

function App() {
  return (
    <div className=" bg-[#D0E6E8]   ">
      {/* Section 1 */}
      {/* Navbar */}
      <div className=" flex justify-between lg:p-[30px] md:p-[20px] sm:p-[12px] p-[12px]  text-[#003757] lg:mr-[100px] lg:ml-[100px] md:mr-[20px] md:ml-[20px] sm:mr-[5px] sm:ml-[5px]">

        <img src="/p1.png" className="w-[204px] h-[40px] " alt="" srcset="" />
        <div className="flex gap-[6px]" >
          <button className="p-[18px_22px] text-[16px] rounded-[40px] border text-[#003757] border-[rgba(0,55,87,0.12)]">Brokers</button>
          <button className="p-[18px_22px] text-[16px] rounded-[40px] border text-[#003757] border-[rgba(0,55,87,0.12)]">Scam Alerts</button>
          <button className="p-[18px_22px] text-[16px] rounded-[40px] border text-[#003757] border-[rgba(0,55,87,0.12)]">Regulators</button>
          <button className="p-[18px_22px] text-[16px] rounded-[40px] border text-[#003757] border-[rgba(0,55,87,0.12)]">Claims</button>
          <button className="p-[18px_22px] text-[16px] rounded-[40px] border text-[#003757] border-[rgba(0,55,87,0.12)]">Awards</button>
          <button className="p-[18px_22px] text-[16px] rounded-[40px] border text-[#003757] border-[rgba(0,55,87,0.12)]">News</button>
          <button className="p-[18px_22px] text-[16px] rounded-[40px] border text-[#003757] border-[rgba(0,55,87,0.12)]">About Us</button>

        </div>

        <div className="flex gap-[15px]">
          <div className="rounded-[40px] bg-[rgba(186,198,213,0.25)] p-[18px] w-[55px] h-[55px]">
            <svg className="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
              <path d="M9.13633 3C7.92268 3 6.73628 3.35989 5.72717 4.03416C4.71806 4.70843 3.93155 5.66679 3.4671 6.78806C3.00266 7.90932 2.88114 9.14314 3.11791 10.3335C3.35468 11.5238 3.93911 12.6172 4.79729 13.4754C5.65547 14.3335 6.74886 14.918 7.93919 15.1547C9.12952 15.3915 10.3633 15.27 11.4846 14.8056C12.6059 14.3411 13.5642 13.5546 14.2385 12.5455C14.9128 11.5364 15.2727 10.35 15.2727 9.13633C15.2726 7.5089 14.626 5.94817 13.4753 4.7974C12.3245 3.64664 10.7638 3.0001 9.13633 3Z" stroke="#003757" stroke-width="1.5" stroke-miterlimit="10" />
              <path d="M13.7148 13.7144L18.0004 17.9999" stroke="#003757" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
            </svg>

          </div>
          <button className="p-[18px_22px] bg-[#00A89B] text-[white] rounded-[40px]" >Leave a Review</button>
        </div>
      </div>

      {/* Section 2 */}
      <section className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 gap-[20px] sm:grid sm:grid-cols-1 grid grid-cols-1 lg:p-[30px] md:p-[20px] sm:p-[12px] p-[12px]  text-[#003757] lg:mr-[100px] lg:ml-[100px] md:mr-[20px] md:ml-[20px] sm:mr-[5px] sm:ml-[5px]">
        {/* div 1 */}
        <div className="grid grid-cols-1">
          {/* text */}
          <div className="gap-[20px]">
            <div className="text-[46px] font-bold text-[#003757] font-[Qualy] leading-normal">
              <h2>Find the Best Financial</h2>
              <h2> Broker for You</h2>
            </div>

            <p className="mt-[20px] w-[711px] text-lg md:text-[14px] text-[#003757] font-[Inter Tight] text-[18px] w-[711px]">
              Since its inception, Investari has been the trusted source for
              expert, data-driven reviews of financial brokers across all
              sectors, including forex, stocks, bonds, crypto, and more. Our
              comprehensive analysis helps traders and investors find the best
              brokers suited to their needs, backed by years of hands-on
              research and unbiased insights.
            </p>
          </div>

          {/* PRIMARY CTA BUTTON - Full width on medium devices */}
          <button className="btn btn-ghost bg-[#00A89B] rounded-[40px] flex text-white w-full md:w-full lg:w-[300px] text-[18px] h-[62px] p-[20px_22px] justify-center">
            Search all brokers
          </button>
        </div>
        {/* div 2*/}
        <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-[9px]">
          {/* Cards 1*/}
          <div className="grid grid-rows-3 gap-[10px] ">
            {/* 1 */}
            <div className=" bg-white rounded-[45px] lg:p-[20px] md:p-[15px] sm:p-[12px] p-[12px] ">
              <div className="flex items-center justify-between">
                {/* logo1 */}
                <div className="rounded-[26.182px] border-[0.818px] border-[#0037571f] w-[36px] h-[36px] p-[13.091px] gap-[8.182px] flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_500_4684)">
                      <path
                        d="M3.58114 15.6769C3.40584 15.6769 3.23177 15.6222 3.0832 15.5148C2.80646 15.3142 2.67719 14.9695 2.75251 14.6368L3.78183 10.1027L0.291017 7.04131C0.0344181 6.8173 -0.0636068 6.46256 0.0417426 6.13797C0.147092 5.81398 0.43372 5.58461 0.773085 5.55323L5.39186 5.13391L7.21795 0.860487C7.3526 0.546514 7.65925 0.34375 7.99996 0.34375C8.34066 0.34375 8.64731 0.546514 8.78196 0.859754L10.6081 5.13391L15.2261 5.55323C15.5662 5.58387 15.8528 5.81398 15.9582 6.13797C16.0635 6.46195 15.9661 6.8173 15.7095 7.04131L12.2187 10.1021L13.248 14.6361C13.3235 14.9695 13.1941 15.3142 12.9174 15.5142C12.6414 15.7141 12.2734 15.7295 11.9827 15.5548L7.99996 13.1748L4.01719 15.5562C3.88254 15.6361 3.73251 15.6769 3.58114 15.6769ZM7.99996 12.1495C8.15133 12.1495 8.30123 12.1901 8.436 12.2701L12.1948 14.5182L11.2233 10.2387C11.154 9.93408 11.2574 9.61608 11.4927 9.41002L14.7888 6.51932L10.428 6.12332C10.114 6.09463 9.844 5.89724 9.72131 5.60792L7.99996 1.5751L6.27652 5.60853C6.15518 5.89589 5.88515 6.09329 5.57191 6.12197L1.21047 6.51798L4.50646 9.40868C4.74255 9.61535 4.84582 9.93274 4.77587 10.238L3.80515 14.5175L7.56391 12.2701C7.69856 12.1901 7.84858 12.1495 7.99996 12.1495ZM5.35658 5.21656C5.35658 5.21656 5.35658 5.21729 5.35584 5.2179L5.35658 5.21656ZM10.642 5.2146L10.6427 5.21595C10.6427 5.21521 10.6427 5.21521 10.642 5.2146Z"
                        fill="#003757"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_500_4684">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h2 className="lg:text-[26px] md:text-[20px] sm:text-[14px] text-14px font-[Qualy]">
                  Explore best brokers By category
                </h2>

                {/* logo2 */}
                <div className="flex w-[36px] h-[36px] p-[13.091px] justify-center items-center gap-[8.182px] rounded-[26.182px] bg-[#E7EDF0]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M13.7606 0.989927C13.7606 0.575714 13.4248 0.239927 13.0106 0.239927L6.26056 0.239927C5.84635 0.239927 5.51056 0.575713 5.51056 0.989927C5.51056 1.40414 5.84635 1.73993 6.26056 1.73993H12.2606V7.73993C12.2606 8.15414 12.5963 8.48993 13.0106 8.48993C13.4248 8.48993 13.7606 8.15414 13.7606 7.73993L13.7606 0.989927ZM1.52008 13.5411L13.5409 1.52026L12.4802 0.459597L0.459416 12.4804L1.52008 13.5411Z"
                      fill="#003757"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="w-full bg-white rounded-[45px] lg:p-[20px] md:p-[15px] sm:p-[12px] p-[12px]">
              <div className="flex items-center justify-evenly">
                {/* logo1 */}
                <div className="rounded-[26.182px] border-[0.818px] border-[#0037571f] w-[36px] h-[36px] p-[13.091px] gap-[8.182px] flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_500_4684)">
                      <path
                        d="M3.58114 15.6769C3.40584 15.6769 3.23177 15.6222 3.0832 15.5148C2.80646 15.3142 2.67719 14.9695 2.75251 14.6368L3.78183 10.1027L0.291017 7.04131C0.0344181 6.8173 -0.0636068 6.46256 0.0417426 6.13797C0.147092 5.81398 0.43372 5.58461 0.773085 5.55323L5.39186 5.13391L7.21795 0.860487C7.3526 0.546514 7.65925 0.34375 7.99996 0.34375C8.34066 0.34375 8.64731 0.546514 8.78196 0.859754L10.6081 5.13391L15.2261 5.55323C15.5662 5.58387 15.8528 5.81398 15.9582 6.13797C16.0635 6.46195 15.9661 6.8173 15.7095 7.04131L12.2187 10.1021L13.248 14.6361C13.3235 14.9695 13.1941 15.3142 12.9174 15.5142C12.6414 15.7141 12.2734 15.7295 11.9827 15.5548L7.99996 13.1748L4.01719 15.5562C3.88254 15.6361 3.73251 15.6769 3.58114 15.6769ZM7.99996 12.1495C8.15133 12.1495 8.30123 12.1901 8.436 12.2701L12.1948 14.5182L11.2233 10.2387C11.154 9.93408 11.2574 9.61608 11.4927 9.41002L14.7888 6.51932L10.428 6.12332C10.114 6.09463 9.844 5.89724 9.72131 5.60792L7.99996 1.5751L6.27652 5.60853C6.15518 5.89589 5.88515 6.09329 5.57191 6.12197L1.21047 6.51798L4.50646 9.40868C4.74255 9.61535 4.84582 9.93274 4.77587 10.238L3.80515 14.5175L7.56391 12.2701C7.69856 12.1901 7.84858 12.1495 7.99996 12.1495ZM5.35658 5.21656C5.35658 5.21656 5.35658 5.21729 5.35584 5.2179L5.35658 5.21656ZM10.642 5.2146L10.6427 5.21595C10.6427 5.21521 10.6427 5.21521 10.642 5.2146Z"
                        fill="#003757"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_500_4684">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h2 className="lg:text-[26px] md:text-[20px] sm:text-[14px] text-14px font-[Qualy]">
                  Explore best brokers reviews
                </h2>

                {/* logo2 */}
                <div className="flex w-[36px] h-[36px] p-[13.091px] justify-center items-center gap-[8.182px] rounded-[26.182px] bg-[#E7EDF0]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M13.7606 0.989927C13.7606 0.575714 13.4248 0.239927 13.0106 0.239927L6.26056 0.239927C5.84635 0.239927 5.51056 0.575713 5.51056 0.989927C5.51056 1.40414 5.84635 1.73993 6.26056 1.73993H12.2606V7.73993C12.2606 8.15414 12.5963 8.48993 13.0106 8.48993C13.4248 8.48993 13.7606 8.15414 13.7606 7.73993L13.7606 0.989927ZM1.52008 13.5411L13.5409 1.52026L12.4802 0.459597L0.459416 12.4804L1.52008 13.5411Z"
                      fill="#003757"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="w-full bg-white rounded-[45px] lg:p-[20px] md:p-[15px] sm:p-[12px] p-[12px]">
              <div className="flex items-center justify-evenly gap-[15px]">
                {/* logo1 */}
                <div className="rounded-[26.182px] border-[0.818px] border-[#0037571f] w-[36px] h-[36px] p-[13.091px] gap-[8.182px] flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M1.33301 14.667H14.6663"
                      stroke="#003757"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.5 2.66634V14.6663H9.5V2.66634C9.5 1.93301 9.2 1.33301 8.3 1.33301H7.7C6.8 1.33301 6.5 1.93301 6.5 2.66634Z"
                      stroke="#003757"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 6.66634V14.6663H4.66667V6.66634C4.66667 5.93301 4.4 5.33301 3.6 5.33301H3.06667C2.26667 5.33301 2 5.93301 2 6.66634Z"
                      stroke="#003757"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.333 10.0003V14.667H13.9997V10.0003C13.9997 9.26699 13.733 8.66699 12.933 8.66699H12.3997C11.5997 8.66699 11.333 9.26699 11.333 10.0003Z"
                      stroke="#003757"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h2 className="lg:text-[26px] md:text-[20px] sm:text-[14px] text-14px font-[Qualy]">
                  Compare brokers side-by-side
                </h2>

                {/* logo2 */}
                <div className="flex w-[36px] h-[36px] p-[13.091px] justify-center items-center gap-[8.182px] rounded-[26.182px] bg-[#E7EDF0]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M13.7606 0.989927C13.7606 0.575714 13.4248 0.239927 13.0106 0.239927L6.26056 0.239927C5.84635 0.239927 5.51056 0.575713 5.51056 0.989927C5.51056 1.40414 5.84635 1.73993 6.26056 1.73993H12.2606V7.73993C12.2606 8.15414 12.5963 8.48993 13.0106 8.48993C13.4248 8.48993 13.7606 8.15414 13.7606 7.73993L13.7606 0.989927ZM1.52008 13.5411L13.5409 1.52026L12.4802 0.459597L0.459416 12.4804L1.52008 13.5411Z"
                      fill="#003757"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* cad 2 */}
          <div className="w-full bg-white rounded-[45px]">
            <div className="">
              <div className="">
                <img
                  className="pt-[30px] pr-[65.263px] pb-[30.261px] pl-[65px] " // Make the image responsive and rounded at the top
                  src="/Group 12.png"
                  alt="Broker Reviews"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* curved section */}
      <section className="bg-[#E7EDF0] w-full rounded-tl-[50px] rounded-tr-[50px] rounded-bl-none rounded-br-none lg:py-[80px] md:py-[30px] sm:py-[15px] py-[15px]">
        {/* Section 3 */}

        <div className="lg:p-[30px] md:p-[20px] sm:p-[12px] p-[12px] rounded-[50px] border border-[#0037571f] bg-white lg:mr-[100px] lg:ml-[100px] md:mr-[20px] md:ml-[20px] sm:mr-[5px] sm:ml-[5px]">
          {/* logo */}
          <div className="flex gap-[15px]">
            <div className="flex w-[44px] h-[44px] justify-center items-center gap-[10px] rounded-[32px] border-[1px] border-[#0037571f]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_500_4635)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 1.84615C0 0.82655 0.82655 0 1.84615 0H14.1538C15.1735 0 16 0.826558 16 1.84615V7.99998C16 8.33984 15.7244 8.61537 15.3846 8.61537C15.0447 8.61537 14.7692 8.33984 14.7692 7.99998V1.84615C14.7692 1.50628 14.4937 1.23077 14.1538 1.23077H1.84615C1.50629 1.23077 1.23077 1.50629 1.23077 1.84615V14.1538C1.23077 14.4937 1.50628 14.7692 1.84615 14.7692H7.99998C8.33984 14.7692 8.61537 15.0447 8.61537 15.3846C8.61537 15.7244 8.33984 16 7.99998 16H1.84615C0.826558 16 0 15.1735 0 14.1538V1.84615Z"
                    fill="#003757"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.282 9.43584C10.2624 9.43584 9.43584 10.2624 9.43584 11.282C9.43584 12.3016 10.2624 13.1281 11.282 13.1281C12.3016 13.1281 13.1281 12.3016 13.1281 11.282C13.1281 10.2624 12.3016 9.43584 11.282 9.43584ZM8.20508 11.282C8.20508 9.58263 9.58263 8.20508 11.282 8.20508C12.9814 8.20508 14.3589 9.58263 14.3589 11.282C14.3589 12.9814 12.9814 14.3589 11.282 14.3589C9.58263 14.3589 8.20508 12.9814 8.20508 11.282Z"
                    fill="#003757"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.8527 12.5386C13.0649 12.2732 13.4522 12.2302 13.7176 12.4425L15.7688 14.0835C16.0343 14.2958 16.0773 14.6831 15.865 14.9485C15.6527 15.2139 15.2655 15.2569 15 15.0445L12.9487 13.4035C12.6834 13.1913 12.6403 12.804 12.8527 12.5386Z"
                    fill="#003757"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.28223 4.71792C3.28223 4.37806 3.55775 4.10254 3.89761 4.10254H12.1027C12.4426 4.10254 12.7181 4.37806 12.7181 4.71792C12.7181 5.05779 12.4426 5.33331 12.1027 5.33331H3.89761C3.55775 5.33331 3.28223 5.05779 3.28223 4.71792Z"
                    fill="#003757"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.28223 8.00015C3.28223 7.66029 3.55775 7.38477 3.89761 7.38477H7.17965C7.51951 7.38477 7.79504 7.66029 7.79504 8.00015C7.79504 8.34 7.51951 8.61553 7.17965 8.61553H3.89761C3.55775 8.61553 3.28223 8.34 3.28223 8.00015Z"
                    fill="#003757"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_500_4635">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h1 className="font-qualy w-[721px] lg:mb-[20px] mb:mb-[15px] sm:mb-[10px]  text-black lg:text-[30px] md:text-[20px] sm:text-[14px] text-[14px] ">
              How Investari Tests, Reviews, and Ranks Brokers
            </h1>
          </div>
          {/* text */}
          <div className="lg:grid-cols-2 lg:grid md:grid md:grid-cols-1 gap-[20px] sm:grid sm:grid-cols-1 grid grid-cols-1">
            {/* div1 */}
            <h2 className="font:InterTight lg:text-[18px] md:text-[14px] sm:text-[12px] text-[12px] text-black ">
              CInvestari's broker review process follows a rigorous methodology.
              Our financial experts, with extensive industry experience,
              evaluate brokers across multiple categories using hundreds of data
              points. We conduct live testing, real account evaluations, and
              in-depth comparisons to ensure accuracy. These comprehensive
              reviews allow us to rank brokers based on their strengths,
              catering to different trading styles, asset classes, and regions.
            </h2>
            {/* div2 */}
            <div className=" grid grid-cols-1 gap-[20px]  ">
              <p className=" lg:text-[18px] md:text-[14px] sm:text-[12px] text-[12px] text-black">
                Our transparent and expert-driven approach makes Investari the
                go-to platform for identifying top-tier financial brokers.
              </p>
              <button className="btn btn-ghost lg:text-[18px] md:text-[14px] sm:text-[12px] text-[12px] text-white flex w-full h-[62px] lg:p-[20px_22px] md:p-[16px_18px] sm:p-[14px_16px] p-[14px_16px] justify-center items-center gap-[10px] self-stretch rounded-[40px] bg-[#00A89B]">
                Read Full Methodology
              </button>
            </div>
          </div>
        </div>

        {/* section 4 */}
        <div className="lg:p-[30px] md:p-[20px] sm:p-[12px] p-[12px] rounded-[50px] mt-[20px] border border-[#0037571f] bg-white lg:mr-[100px] lg:ml-[100px] md:mr-[20px] md:ml-[20px] sm:mr-[5px] sm:ml-[5px]">
          {/* text1 */}
          <div className="flex gap-[10px] mt-[20px]">
            <div className="flex w-[44px] h-[44px] font-[Qualy]  justify-center items-center gap-[10px] rounded-[32px] border-[1px] border-[#0037571f]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2 14.667H14"
                  stroke="#003757"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.73332 5.58594H2.66667C2.3 5.58594 2 5.88594 2 6.2526V11.9993C2 12.3659 2.3 12.6659 2.66667 12.6659H3.73332C4.09998 12.6659 4.39998 12.3659 4.39998 11.9993V6.2526C4.39998 5.88594 4.09998 5.58594 3.73332 5.58594Z"
                  stroke="#003757"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.53312 3.45996H7.46647C7.0998 3.45996 6.7998 3.75996 6.7998 4.12663V12C6.7998 12.3666 7.0998 12.6666 7.46647 12.6666H8.53312C8.89979 12.6666 9.19979 12.3666 9.19979 12V4.12663C9.19979 3.75996 8.89979 3.45996 8.53312 3.45996Z"
                  stroke="#003757"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3329 1.33301H12.2663C11.8996 1.33301 11.5996 1.63301 11.5996 1.99967V11.9997C11.5996 12.3663 11.8996 12.6663 12.2663 12.6663H13.3329C13.6996 12.6663 13.9996 12.3663 13.9996 11.9997V1.99967C13.9996 1.63301 13.6996 1.33301 13.3329 1.33301Z"
                  stroke="#003757"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h1 className="lg:text-[30px] md:text-[20px] text-black font-qualy sm:text-[14px] text-[14px] ">
              Discover the Best Brokers for Every Market.
            </h1>
          </div>
          {/* text2 */}
          <div className="lg:w-1/2 mt-[20px] lg:text-[18px] md:text-[14px] sm:text-[12px] text-[14px] text-black ">
            Whether you're trading stocks, forex, bonds, or crypto, Investari's
            expert guides and rankings help you find the best brokers tailored
            to your investment goals and trading strategies. Explore our
            top-rated financial broker reviews today.
          </div>

          {/* card */}

          <div className="lg:grid lg:grid-cols-2 gap-[10px] grid grid-cols-1 mt-[20px] md:grid md:grid-cols-1">
            {/* card1 */}
            {/* a */}
            <div className=" gap-[10px] lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 grid grid-cols-1 w-full">
              {/* 1 */}
              <div className="rounded-[45px] border-[1px]  border-[#0037571f] flex items-center justify-center">
                <div className=" lg:p-[40px] md:p-[30px] sm:p-[20px] p-[20px] lg:gap-[40px] md:gap-[20px] sm:gap-[10px] gap-[10px] text-center flex justify-center flex-col items-center">
                     <img className="bg-[#FFC338] rounded-[65px] w-[88] h-[88] p-[32px] gap-[20px]" src="../public/trophy.svg" alt="" srcset="" />

                  <h1 className="  font-qualy lg:text-[26px] text-[#003757] md:text-[20px] sm:text-[14px] text-[14px]">Best Brokers</h1>
                </div>
              </div>
              {/* 2 */}
              <div className="rounded-[45px] border-[1px]  border-[#0037571f] flex items-center justify-center">
                <div className=" lg:p-[40px] md:p-[30px] sm:p-[20px] p-[20px] lg:gap-[40px] md:gap-[20px] sm:gap-[10px] gap-[10px] text-center flex justify-center flex-col items-center">
                 <img className="bg-[#FFC338] rounded-[65px] w-[88] h-[88] p-[32px] gap-[20px]" src="../public/bullseye.svg" alt="" srcset="" />
                  <h1 className="  font-qualy text-[#003757] lg:text-[26px] md:text-[20px] sm:text-[14px] text-[14px]">Best Platforms</h1>
                </div>
              </div>
              {/* 3 */}
              <div className="rounded-[45px] border-[1px]  border-[#0037571f] flex items-center justify-center">
                <div className=" lg:p-[40px] md:p-[30px] sm:p-[20px] p-[20px] lg:gap-[40px] md:gap-[20px] sm:gap-[10px] gap-[10px] text-center flex justify-center flex-col items-center">
                    <img className="bg-[#FFC338] rounded-[65px] w-[88] h-[88] p-[32px] gap-[20px]" src="../public/coins.svg" alt="" srcset="" />

                  <h1 className="  font-qualy text-[#003757] lg:text-[26px] md:text-[20px] sm:text-[14px] text-[14px]">Best Low Fee Brokers</h1>
                </div>
              </div>
              {/* 4 */}
              <div className="rounded-[45px] border-[1px]  border-[#0037571f] flex items-center justify-center">
                <div className=" lg:p-[40px] md:p-[30px] sm:p-[20px] p-[20px] lg:gap-[40px] md:gap-[20px] sm:gap-[10px] gap-[10px] text-center flex justify-center flex-col items-center">
                   <img className="bg-[#FFC338] rounded-[65px] w-[88] h-[88] p-[32px] gap-[20px]" src="../public/dot.svg" alt="" srcset="" />

                  <h1 className="  font-qualy text-[#003757] lg:text-[26px] md:text-[20px] sm:text-[14px] text-[14px]">Best for Beginners</h1>
                </div>
              </div>
            </div>
            {/* card2 */}
            <div className="">
              <div className="w-full h-full bg-white rounded-[45px] border border-[rgba(0,55,87,0.12)] lg:p-[40px] md:p-[20px] sm:p-[15px] p-[15px]">
                {/* a */}
                <div>
                  <h1 className=" font-qualy text-black  mb-[10px] lg:text-[26px] md:text-[20px] sm:text-[14px] text-[14px]">By Type</h1>
                  {/* 1 */}
                  <div className="flex flex-wrap gap-[10px]">
                    <div className="text-[#00A89B] p-[5px_10px] lg:text-[16px] md:text-[12px] sm:text-[12px] text-[12px] flex  justify-center rounded-[20px] bg-[rgba(0,168,155,0.10)]">
                      Best Fixed Income Brokers
                    </div>
                    {/* responsive */}

                    <div className="text-[#00A89B] p-[5px_10px] lg:text-[16px] md:text-[12px] sm:text-[12px] text-[12px] flex  justify-center rounded-[20px] bg-[rgba(0,168,155,0.10)]">
                      Best Fixed Income Brokers
                    </div>
                    <div className="text-[#00A89B] p-[5px_10px] lg:text-[16px] md:text-[12px] sm:text-[12px] text-[12px] flex  justify-center rounded-[20px] bg-[rgba(0,168,155,0.10)]">
                      Best Fixed Income Brokers
                    </div>
                  </div>
                </div>
                {/* b */}
                <div>
                  <h1 className=" font-qualy my-[10px_10px] text-black lg:text-[26px] md:text-[20px] sm:text-[14px] text-[14px]">By Experience</h1>
                  {/* 1 */}
                  <div className="flex flex-wrap gap-[10px]">
                    <div className="text-[#00A89B] p-[5px_10px] lg:text-[16px] md:text-[12px] sm:text-[12px] text-[12px] flex  justify-center rounded-[20px] bg-[rgba(0,168,155,0.10)]">
                      Best Fixed Income Brokers
                    </div>
                    {/* responsive */}

                    <div className="text-[#00A89B] p-[5px_10px] lg:text-[16px] md:text-[12px] sm:text-[12px] text-[12px] flex  justify-center rounded-[20px] bg-[rgba(0,168,155,0.10)]">
                      Best Stock & Equity Brokers
                    </div>
                    <div className="text-[#00A89B] p-[5px_10px] lg:text-[16px] md:text-[12px] sm:text-[12px] text-[12px] flex  justify-center rounded-[20px] bg-[rgba(0,168,155,0.10)]">
                      Best Term Deposit Brokers
                    </div>
                  </div>
                </div>
                {/* c */}
                <div>
                  <h1 className="lg:text-[26px] md:text-[20px] sm:text-[14px] text-[14px] font-qualy text-black my-[10px_10px]  ">By Region</h1>
                  {/* 1 */}
                  <div className="flex flex-wrap gap-5">
                    <div className="text-[#00A89B] p-[5px_10px] lg:text-[16px] md:text-[12px] sm:text-[12px] text-[12px] flex  justify-center rounded-[20px] bg-[rgba(0,168,155,0.10)]">
                      Americas
                    </div>
                    {/* responsive */}

                    <div className="text-[#00A89B] p-[5px_10px] lg:text-[16px] md:text-[12px] sm:text-[12px] text-[12px] flex  justify-center rounded-[20px] bg-[rgba(0,168,155,0.10)]">
                      Europe
                    </div>
                    <div className="text-[#00A89B] p-[5px_10px] lg:text-[16px] md:text-[12px] sm:text-[12px] text-[12px] flex  justify-center rounded-[20px] bg-[rgba(0,168,155,0.10)]">
                      Asia
                    </div>
                  </div>
                </div>

                <h1 className=" font-qualy text-black mt-[30px] lg:text-[26px] md:text-[20px] sm:text-[14px] text-[14px]">
                  See all the brokers accepting clients from:
                </h1>
                {/* ** */}
                <div className="flex justify-between gap-2 mt-4">
                  <button className="flex h-[62px] text-black p-[18px] justify-between items-center flex-1 rounded-[40px] border border-[rgba(0,55,87,0.12)] text-center ">
                    Armenia
                    <img src="../public/chevron-down.svg" alt="" srcset="" />
                  </button>
                  <button className="flex justify-center h-[62px] p-[18px] items-center flex-1 rounded-[40px] bg-[rgba(0,55,87,0.12)] text-[#00A89B] text-[18px]  ">
                    See All Brokers
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* seciton 5 */}
        <div className=" lg:mr-[100px] lg:ml-[100px] md:mr-[20px] md:ml-[20px] sm:mr-5 sm:ml-5 ">
          <div className="rounded-[50px] border gap-[20px] lg:p-[30px] md:p-[20px] sm:p-[12px] p-[12px] border-[rgba(0,55,87,0.12)] bg-[#fff]  mt-4 ">
            {/* text */}
            <div className="flex gap-[10px]">
              <div className="flex w-[44px] h-[44px]  justify-center items-center gap-[10px] rounded-[32px] border-[1px] border-[#0037571f]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rounded-[32px] border border-[rgba(0,55,87,0.12)]"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2 14.667H14"
                    stroke="#003757"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.73332 5.58594H2.66667C2.3 5.58594 2 5.88594 2 6.2526V11.9993C2 12.3659 2.3 12.6659 2.66667 12.6659H3.73332C4.09998 12.6659 4.39998 12.3659 4.39998 11.9993V6.2526C4.39998 5.88594 4.09998 5.58594 3.73332 5.58594Z"
                    stroke="#003757"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.53312 3.45996H7.46647C7.0998 3.45996 6.7998 3.75996 6.7998 4.12663V12C6.7998 12.3666 7.0998 12.6666 7.46647 12.6666H8.53312C8.89979 12.6666 9.19979 12.3666 9.19979 12V4.12663C9.19979 3.75996 8.89979 3.45996 8.53312 3.45996Z"
                    stroke="#003757"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.3329 1.33301H12.2663C11.8996 1.33301 11.5996 1.63301 11.5996 1.99967V11.9997C11.5996 12.3663 11.8996 12.6663 12.2663 12.6663H13.3329C13.6996 12.6663 13.9996 12.3663 13.9996 11.9997V1.99967C13.9996 1.63301 13.6996 1.33301 13.3329 1.33301Z"
                    stroke="#003757"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h1 className="lg:text-[30px] font-qualy text-black md:text-[20px] sm:text-[14px] text-[14px] ">
                Explore Broker Reviews
              </h1>
            </div>

            {/* 1 */}
            <div className="grid grid-cols-1 gap-[10px] mt-[10px] lg:grid-cols-4 lg:grid md:grid md:grid-cols-2 sm:grid sm:grid-cols-1">
              <div className="w-full lg:p-[20px]  md:p-[20px] sm:p-[15px] p-[15px]  rounded-[40px] border border-[rgba(0,55,87,0.12)] bg-white">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 p-2 items-center">
                    <img
                      className="lg:w-[55px] md:w-[36px] md:h-[36px] sm:w-[32px] sm:h-[32px] w-[32px] h-[32px] lg:h-[55px] rounded-[30px]"
                      src="../public/logo1.png"
                      alt=""
                      srcset=""
                    />
                    <h1 className="font-qualy text-black lg:text-[26px] md:text-[20px] sm:text-[14px] text-[14px] ">IS Markets</h1>
                  </div>

                  <div className="flex justify-evenly ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M10.5003 18.3337C15.0837 18.3337 18.8337 14.5837 18.8337 10.0003C18.8337 5.41699 15.0837 1.66699 10.5003 1.66699C5.91699 1.66699 2.16699 5.41699 2.16699 10.0003C2.16699 14.5837 5.91699 18.3337 10.5003 18.3337Z"
                        stroke="#00A89B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.95801 9.99993L9.31634 12.3583L14.0413 7.6416"
                        stroke="#00A89B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <img
                      className="w-[49px] h-[25px]"
                      src="../public/logo2.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>

                {/*  */}
                <div className="flex ">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="2 star"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="4 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="5 star"
                    />
                  </div>

                  <p className="text-black text-[18px]">4.5 (70 Reviews)</p>
                </div>
                <p className="text-black">Emma Watson</p>

                <p className="text-black">
                  General Risk Warning: CFDs are leveraged products. Trading in
                  CFDs carries a high level of risk thus may no
                </p>

                <div className="lg:mt-[20px] md:mt-[15px] sm:mt-[10px] mt-[10px]">
                  <button className="rounded-[40px] p-[20px_22px] btn btn-ghost text-white w-full h-[62px] bg-[#00A89B] ">
                    View Broker Profile
                  </button>
                </div>
              </div>
              <div className="w-full lg:p-[20px]  md:p-[20px] sm:p-[15px] p-[15px]  rounded-[40px] border border-[rgba(0,55,87,0.12)] bg-white">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 p-2 items-center">
                    <img
                      className="lg:w-[55px] md:w-[36px] md:h-[36px] sm:w-[32px] sm:h-[32px] w-[32px] h-[32px] lg:h-[55px] rounded-[30px]"
                      src="../public/logo1.png"
                      alt=""
                      srcset=""
                    />
                    <h1 className="font-qualy text-black lg:text-[26px] md:text-[20px] sm:text-[14px] text-[14px] ">IS Markets</h1>
                  </div>

                  <div className="flex justify-evenly ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M10.5003 18.3337C15.0837 18.3337 18.8337 14.5837 18.8337 10.0003C18.8337 5.41699 15.0837 1.66699 10.5003 1.66699C5.91699 1.66699 2.16699 5.41699 2.16699 10.0003C2.16699 14.5837 5.91699 18.3337 10.5003 18.3337Z"
                        stroke="#00A89B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.95801 9.99993L9.31634 12.3583L14.0413 7.6416"
                        stroke="#00A89B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <img
                      className="w-[49px] h-[25px]"
                      src="../public/logo2.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>

                {/*  */}
                <div className="flex ">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="2 star"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="4 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="5 star"
                    />
                  </div>

                  <p className="text-black text-[18px]">4.5 (70 Reviews)</p>
                </div>
                <p className="text-black">Emma Watson</p>

                <p className="text-black">
                  General Risk Warning: CFDs are leveraged products. Trading in
                  CFDs carries a high level of risk thus may no
                </p>

                <div className="lg:mt-[20px] md:mt-[15px] sm:mt-[10px] mt-[10px]">
                  <button className="rounded-[40px] p-[20px_22px] btn btn-ghost text-white w-full h-[62px] bg-[#00A89B] ">
                    View Broker Profile
                  </button>
                </div>
              </div>
              <div className="w-full lg:p-[20px]  md:p-[20px] sm:p-[15px] p-[15px]  rounded-[40px] border border-[rgba(0,55,87,0.12)] bg-white">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 p-2 items-center">
                    <img
                      className="lg:w-[55px] md:w-[36px] md:h-[36px] sm:w-[32px] sm:h-[32px] w-[32px] h-[32px] lg:h-[55px] rounded-[30px]"
                      src="../public/logo1.png"
                      alt=""
                      srcset=""
                    />
                    <h1 className="font-qualy text-black lg:text-[26px] md:text-[20px] sm:text-[14px] text-[14px] ">IS Markets</h1>
                  </div>

                  <div className="flex justify-evenly ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M10.5003 18.3337C15.0837 18.3337 18.8337 14.5837 18.8337 10.0003C18.8337 5.41699 15.0837 1.66699 10.5003 1.66699C5.91699 1.66699 2.16699 5.41699 2.16699 10.0003C2.16699 14.5837 5.91699 18.3337 10.5003 18.3337Z"
                        stroke="#00A89B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.95801 9.99993L9.31634 12.3583L14.0413 7.6416"
                        stroke="#00A89B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <img
                      className="w-[49px] h-[25px]"
                      src="../public/logo2.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>

                {/*  */}
                <div className="flex ">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="2 star"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="4 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="5 star"
                    />
                  </div>

                  <p className="text-black text-[18px]">4.5 (70 Reviews)</p>
                </div>
                <p className="text-black">Emma Watson</p>

                <p className="text-black">
                  General Risk Warning: CFDs are leveraged products. Trading in
                  CFDs carries a high level of risk thus may no
                </p>

                <div className="lg:mt-[20px] md:mt-[15px] sm:mt-[10px] mt-[10px]">
                  <button className="rounded-[40px] p-[20px_22px] btn btn-ghost text-white w-full h-[62px] bg-[#00A89B] ">
                    View Broker Profile
                  </button>
                </div>
              </div>
              <div className="w-full lg:p-[20px]  md:p-[20px] sm:p-[15px] p-[15px]  rounded-[40px] border border-[rgba(0,55,87,0.12)] bg-white">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 p-2 items-center">
                    <img
                      className="lg:w-[55px] md:w-[36px] md:h-[36px] sm:w-[32px] sm:h-[32px] w-[32px] h-[32px] lg:h-[55px] rounded-[30px]"
                      src="../public/logo1.png"
                      alt=""
                      srcset=""
                    />
                    <h1 className="font-qualy text-black lg:text-[26px] md:text-[20px] sm:text-[14px] text-[14px] ">IS Markets</h1>
                  </div>

                  <div className="flex justify-evenly ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M10.5003 18.3337C15.0837 18.3337 18.8337 14.5837 18.8337 10.0003C18.8337 5.41699 15.0837 1.66699 10.5003 1.66699C5.91699 1.66699 2.16699 5.41699 2.16699 10.0003C2.16699 14.5837 5.91699 18.3337 10.5003 18.3337Z"
                        stroke="#00A89B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.95801 9.99993L9.31634 12.3583L14.0413 7.6416"
                        stroke="#00A89B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <img
                      className="w-[49px] h-[25px]"
                      src="../public/logo2.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>

                {/*  */}
                <div className="flex ">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="2 star"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="4 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="5 star"
                    />
                  </div>

                  <p className="text-black text-[18px]">4.5 (70 Reviews)</p>
                </div>
                <p className="text-black">Emma Watson</p>

                <p className="text-black">
                  General Risk Warning: CFDs are leveraged products. Trading in
                  CFDs carries a high level of risk thus may no
                </p>

                <div className="lg:mt-[20px] md:mt-[15px] sm:mt-[10px] mt-[10px]">
                  <button className="rounded-[40px] p-[20px_22px] btn btn-ghost text-white w-full h-[62px] bg-[#00A89B] ">
                    View Broker Profile
                  </button>
                </div>
              </div>
              <div className="w-full lg:p-[20px]  md:p-[20px] sm:p-[15px] p-[15px]  rounded-[40px] border border-[rgba(0,55,87,0.12)] bg-white">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 p-2 items-center">
                    <img
                      className="lg:w-[55px] md:w-[36px] md:h-[36px] sm:w-[32px] sm:h-[32px] w-[32px] h-[32px] lg:h-[55px] rounded-[30px]"
                      src="../public/logo1.png"
                      alt=""
                      srcset=""
                    />
                    <h1 className="font-qualy text-black lg:text-[26px] md:text-[20px] sm:text-[14px] text-[14px] ">IS Markets</h1>
                  </div>

                  <div className="flex justify-evenly ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M10.5003 18.3337C15.0837 18.3337 18.8337 14.5837 18.8337 10.0003C18.8337 5.41699 15.0837 1.66699 10.5003 1.66699C5.91699 1.66699 2.16699 5.41699 2.16699 10.0003C2.16699 14.5837 5.91699 18.3337 10.5003 18.3337Z"
                        stroke="#00A89B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.95801 9.99993L9.31634 12.3583L14.0413 7.6416"
                        stroke="#00A89B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <img
                      className="w-[49px] h-[25px]"
                      src="../public/logo2.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>

                {/*  */}
                <div className="flex ">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="2 star"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="4 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="5 star"
                    />
                  </div>

                  <p className="text-black text-[18px]">4.5 (70 Reviews)</p>
                </div>
                <p className="text-black">Emma Watson</p>

                <p className="text-black">
                  General Risk Warning: CFDs are leveraged products. Trading in
                  CFDs carries a high level of risk thus may no
                </p>

                <div className="lg:mt-[20px] md:mt-[15px] sm:mt-[10px] mt-[10px]">
                  <button className="rounded-[40px] p-[20px_22px] btn btn-ghost text-white w-full h-[62px] bg-[#00A89B] ">
                    View Broker Profile
                  </button>
                </div>
              </div>
              <div className="w-full lg:p-[20px]  md:p-[20px] sm:p-[15px] p-[15px]  rounded-[40px] border border-[rgba(0,55,87,0.12)] bg-white">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 p-2 items-center">
                    <img
                      className="lg:w-[55px] md:w-[36px] md:h-[36px] sm:w-[32px] sm:h-[32px] w-[32px] h-[32px] lg:h-[55px] rounded-[30px]"
                      src="../public/logo1.png"
                      alt=""
                      srcset=""
                    />
                    <h1 className="font-qualy text-black lg:text-[26px] md:text-[20px] sm:text-[14px] text-[14px] ">IS Markets</h1>
                  </div>

                  <div className="flex justify-evenly ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M10.5003 18.3337C15.0837 18.3337 18.8337 14.5837 18.8337 10.0003C18.8337 5.41699 15.0837 1.66699 10.5003 1.66699C5.91699 1.66699 2.16699 5.41699 2.16699 10.0003C2.16699 14.5837 5.91699 18.3337 10.5003 18.3337Z"
                        stroke="#00A89B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.95801 9.99993L9.31634 12.3583L14.0413 7.6416"
                        stroke="#00A89B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <img
                      className="w-[49px] h-[25px]"
                      src="../public/logo2.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>

                {/*  */}
                <div className="flex ">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="2 star"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="4 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="5 star"
                    />
                  </div>

                  <p className="text-black text-[18px]">4.5 (70 Reviews)</p>
                </div>
                <p className="text-black">Emma Watson</p>

                <p className="text-black">
                  General Risk Warning: CFDs are leveraged products. Trading in
                  CFDs carries a high level of risk thus may no
                </p>

                <div className="lg:mt-[20px] md:mt-[15px] sm:mt-[10px] mt-[10px]">
                  <button className="rounded-[40px] p-[20px_22px] btn btn-ghost text-white w-full h-[62px] bg-[#00A89B] ">
                    View Broker Profile
                  </button>
                </div>
              </div>
              <div className="w-full lg:p-[20px]  md:p-[20px] sm:p-[15px] p-[15px]  rounded-[40px] border border-[rgba(0,55,87,0.12)] bg-white">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 p-2 items-center">
                    <img
                      className="lg:w-[55px] md:w-[36px] md:h-[36px] sm:w-[32px] sm:h-[32px] w-[32px] h-[32px] lg:h-[55px] rounded-[30px]"
                      src="../public/logo1.png"
                      alt=""
                      srcset=""
                    />
                    <h1 className="font-qualy text-black lg:text-[26px] md:text-[20px] sm:text-[14px] text-[14px] ">IS Markets</h1>
                  </div>

                  <div className="flex justify-evenly ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M10.5003 18.3337C15.0837 18.3337 18.8337 14.5837 18.8337 10.0003C18.8337 5.41699 15.0837 1.66699 10.5003 1.66699C5.91699 1.66699 2.16699 5.41699 2.16699 10.0003C2.16699 14.5837 5.91699 18.3337 10.5003 18.3337Z"
                        stroke="#00A89B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.95801 9.99993L9.31634 12.3583L14.0413 7.6416"
                        stroke="#00A89B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <img
                      className="w-[49px] h-[25px]"
                      src="../public/logo2.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>

                {/*  */}
                <div className="flex ">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="2 star"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="4 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="5 star"
                    />
                  </div>

                  <p className="text-black text-[18px]">4.5 (70 Reviews)</p>
                </div>
                <p className="text-black">Emma Watson</p>

                <p className="text-black">
                  General Risk Warning: CFDs are leveraged products. Trading in
                  CFDs carries a high level of risk thus may no
                </p>

                <div className="lg:mt-[20px] md:mt-[15px] sm:mt-[10px] mt-[10px]">
                  <button className="rounded-[40px] p-[20px_22px] btn btn-ghost text-white w-full h-[62px] bg-[#00A89B] ">
                    View Broker Profile
                  </button>
                </div>
              </div>
              <div className="w-full lg:p-[20px]  md:p-[20px] sm:p-[15px] p-[15px]  rounded-[40px] border border-[rgba(0,55,87,0.12)] bg-white">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 p-2 items-center">
                    <img
                      className="lg:w-[55px] md:w-[36px] md:h-[36px] sm:w-[32px] sm:h-[32px] w-[32px] h-[32px] lg:h-[55px] rounded-[30px]"
                      src="../public/logo1.png"
                      alt=""
                      srcset=""
                    />
                    <h1 className="font-qualy text-black lg:text-[26px] md:text-[20px] sm:text-[14px] text-[14px] ">IS Markets</h1>
                  </div>

                  <div className="flex justify-evenly ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M10.5003 18.3337C15.0837 18.3337 18.8337 14.5837 18.8337 10.0003C18.8337 5.41699 15.0837 1.66699 10.5003 1.66699C5.91699 1.66699 2.16699 5.41699 2.16699 10.0003C2.16699 14.5837 5.91699 18.3337 10.5003 18.3337Z"
                        stroke="#00A89B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.95801 9.99993L9.31634 12.3583L14.0413 7.6416"
                        stroke="#00A89B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <img
                      className="w-[49px] h-[25px]"
                      src="../public/logo2.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>

                {/*  */}
                <div className="flex ">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="2 star"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="4 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      aria-label="5 star"
                    />
                  </div>

                  <p className="text-black text-[18px]">4.5 (70 Reviews)</p>
                </div>
                <p className="text-black">Emma Watson</p>

                <p className="text-black">
                  General Risk Warning: CFDs are leveraged products. Trading in
                  CFDs carries a high level of risk thus may no
                </p>

                <div className="lg:mt-[20px] md:mt-[15px] sm:mt-[10px] mt-[10px]">
                  <button className="rounded-[40px] p-[20px_22px] btn btn-ghost text-white w-full h-[62px] bg-[#00A89B] ">
                    View Broker Profile
                  </button>
                </div>
              </div>
            </div>
            <button className=" mt-4  h-[62px] w-full p-[20px_22px] text-[18px] text-[#00A89B] gap-2 self- rounded-[40px] bg-[rgba(0,55,87,0.12)]">
              See All Brokers
            </button>
          </div>
        </div>
        {/* section 6 */}
        {/*  card 1 */}

        <div className="rounded-[32px] lg:p-[30px] md:p-[20px] sm:p-[12px] p-[12px] lg:mr-[100px] lg:ml-[100px] md:mr-[20px] md:ml-[20px] border gap-[20px]   border-[rgba(0,55,87,0.12)] bg-[#fff] mt-4">
          {/* text */}
          <div className="flex mb-[20px] gap-[15px]">
            <div className="flex w-[44px] h-[44px] justify-center items-center gap-[10px] rounded-[32px] border-[1px] border-[#0037571f]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8.00033 1.33301V2.66634M8.00033 13.333V14.6663M8.00033 6.66634V9.33301M12.0003 6.66634L4.00033 6.66634C3.26395 6.66634 2.66699 6.06939 2.66699 5.33301L2.66699 3.99967C2.66699 3.26329 3.26395 2.66634 4.00033 2.66634L12.0003 2.66634C12.7367 2.66634 13.3337 3.26329 13.3337 3.99967V5.33301C13.3337 6.06939 12.7367 6.66634 12.0003 6.66634ZM10.0003 13.333H6.00033C5.26395 13.333 4.66699 12.7361 4.66699 11.9997L4.66699 10.6663C4.66699 9.92996 5.26395 9.33301 6.00033 9.33301L10.0003 9.33301C10.7367 9.33301 11.3337 9.92996 11.3337 10.6663V11.9997C11.3337 12.7361 10.7367 13.333 10.0003 13.333Z"
                  stroke="#003757"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <h1 className="lg:text-[30px] text-black md:text-[20px] sm:text-[14px] text-[14px] font-bold font-qualy">
              Compare Brokers
            </h1>
          </div>

          {/* card */}
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-4 md:grid md:grid-cols-2 sm:grid">
            {/* 1 */}

            <div className="border border-[rgba(0,55,87,0.12)] rounded-[45px] w-full">
              {/* a */}
              <div className="flex gap-2 p-4 items-center">
                <img
                  className="w-[55px] h-[55px] rounded-[30px]"
                  src="../public/logo1.png"
                  alt=""
                  srcset=""
                />
                <p className="font-qualy text-black lg:text-[26px] md:text-[20px] sm:text-[18px] text-[18px] ">IS Markets</p>
              </div>
              <p className="lg:text-[26px] md:text-[20px] sm:text-[18px] text-[18px]  font-qualy text-[#E7EDF0] flex items-center justify-center">Vs</p>
              {/* b */}
              <div className="flex gap-2 p-4 items-center ">
                <img
                  className="w-[55px] h-[55px] rounded-[30px]"
                  src="../public/image (2).png"
                  alt=""
                  srcset=""
                />
                <p className=" text-black font-qualy lg:text-[26px] md:text-[20px] sm:text-[18px] text-[18px]">AvaTrade</p>
              </div>

            </div>


            <div className="border border-[rgba(0,55,87,0.12)] rounded-[45px] w-full">
              {/* a */}
              <div className="flex gap-2 p-4 items-center">
                <img
                  className="w-[55px] h-[55px] rounded-[30px]"
                  src="../public/logo1.png"
                  alt=""
                  srcset=""
                />
                <p className="font-qualy text-black lg:text-[26px] md:text-[20px] sm:text-[18px] text-[18px] ">IS Markets</p>
              </div>
              <p className="lg:text-[26px] md:text-[20px] sm:text-[18px] text-[18px]  font-qualy text-[#E7EDF0] flex items-center justify-center">Vs</p>
              {/* b */}
              <div className="flex gap-2 p-4 items-center ">
                <img
                  className="w-[55px] h-[55px] rounded-[30px]"
                  src="../public/image (2).png"
                  alt=""
                  srcset=""
                />
                <p className=" text-black font-qualy lg:text-[26px] md:text-[20px] sm:text-[18px] text-[18px]">AvaTrade</p>
              </div>

            </div>

            <div className="border border-[rgba(0,55,87,0.12)] rounded-[45px] w-full">
              {/* a */}
              <div className="flex gap-2 p-4 items-center">
                <img
                  className="w-[55px] h-[55px] rounded-[30px]"
                  src="../public/logo1.png"
                  alt=""
                  srcset=""
                />
                <p className="font-qualy text-black lg:text-[26px] md:text-[20px] sm:text-[18px] text-[18px] ">IS Markets</p>
              </div>
              <p className="lg:text-[26px] md:text-[20px] sm:text-[18px] text-[18px]  font-qualy text-[#E7EDF0] flex items-center justify-center">Vs</p>
              {/* b */}
              <div className="flex gap-2 p-4 items-center ">
                <img
                  className="w-[55px] h-[55px] rounded-[30px]"
                  src="../public/image (2).png"
                  alt=""
                  srcset=""
                />
                <p className=" text-black font-qualy lg:text-[26px] md:text-[20px] sm:text-[18px] text-[18px]">AvaTrade</p>
              </div>

            </div>

            <div className="border border-[rgba(0,55,87,0.12)] rounded-[45px] w-full">
              {/* a */}
              <div className="flex gap-2 p-4 items-center">
                <img
                  className="w-[55px] h-[55px] rounded-[30px]"
                  src="../public/logo1.png"
                  alt=""
                  srcset=""
                />
                <p className="font-qualy text-black lg:text-[26px] md:text-[20px] sm:text-[18px] text-[18px] ">IS Markets</p>
              </div>
              <p className="lg:text-[26px] md:text-[20px] sm:text-[18px] text-[18px]  font-qualy text-[#E7EDF0] flex items-center justify-center">Vs</p>
              {/* b */}
              <div className="flex gap-2 p-4 items-center ">
                <img
                  className="w-[55px] h-[55px] rounded-[30px]"
                  src="../public/image (2).png"
                  alt=""
                  srcset=""
                />
                <p className=" text-black font-qualy lg:text-[26px] md:text-[20px] sm:text-[18px] text-[18px]">AvaTrade</p>
              </div>

            </div>





          </div>
          <button className=" mt-4  h-[62px] w-full p-[20px_22px] text-[#00A89B] text-[18pxc:\Users\SVA\Downloads\image (2).png]  gap-2 self- rounded-[40px] bg-[rgba(0,55,87,0.12)]">
            See All Brokers Comparison
          </button>
        </div>

        {/* footer */}
        <div className="rounded-[50px] border gap-[2px] lg:mr-[100px] lg:ml-[100px] md:mr-[20px] md:ml-[20px] p-4 bg-[#003757] mt-4">
          {/* nav */}
          <div className="flex-wrap hidden lg:justify-between lg:flex">
            {/* a */}
            <div className="w-[204px] h-[47px] mb-4 lg:mb-0">
              <img src="../public/p1.png" alt="" />
            </div>
            {/* b */}
            <div className="flex flex-wrap justify-center gap-5 lg:justify-start ">
              <button className="btn btn-ghost text-white bg-[#003757] rounded-[40px] border border-[rgba(255,255,255,0.12)] mb-2">
                Brokers
              </button>
              <button className="btn btn-ghost text-white bg-[#003757] rounded-[40px] border border-[rgba(255,255,255,0.12)] mb-2">
                Scam Alerts
              </button>
              <button className="btn btn-ghost text-white bg-[#003757] rounded-[40px] border border-[rgba(255,255,255,0.12)] mb-2">
                Regulators
              </button>
              <button className="btn btn-ghost text-white bg-[#003757] rounded-[40px] border border-[rgba(255,255,255,0.12)] mb-2">
                Claims
              </button>
              <button className="btn btn-ghost text-white bg-[#003757] rounded-[40px] border border-[rgba(255,255,255,0.12)] mb-2">
                Awards
              </button>
              <button className="btn btn-ghost text-white bg-[#003757] rounded-[40px] border border-[rgba(255,255,255,0.12)] mb-2">
                News
              </button>
              <button className="btn btn-ghost text-white bg-[#003757] rounded-[40px] border border-[rgba(255,255,255,0.12)] mb-2">
                About Us
              </button>
            </div>
            {/* c */}
            <div className="flex justify-center gap-2 lg:justify-start lg:mt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-[40px] bg-[#03A9F4]"
                width="44"
                height="44"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M18 3.91887C17.3306 4.2125 16.6174 4.40712 15.8737 4.50162C16.6388 4.04487 17.2226 3.32712 17.4971 2.462C16.7839 2.88725 15.9964 3.18763 15.1571 3.35525C14.4799 2.63413 13.5146 2.1875 12.4616 2.1875C10.4186 2.1875 8.77387 3.84575 8.77387 5.87863C8.77387 6.17113 8.79862 6.45237 8.85938 6.72012C5.7915 6.5705 3.07687 5.10013 1.25325 2.86025C0.934875 3.41263 0.748125 4.04488 0.748125 4.7255C0.748125 6.0035 1.40625 7.13637 2.38725 7.79225C1.79437 7.781 1.21275 7.60888 0.72 7.33775C0.72 7.349 0.72 7.36363 0.72 7.37825C0.72 9.1715 1.99912 10.661 3.6765 11.0041C3.37612 11.0863 3.04875 11.1256 2.709 11.1256C2.47275 11.1256 2.23425 11.1121 2.01038 11.0626C2.4885 12.524 3.84525 13.5984 5.4585 13.6332C4.203 14.6154 2.60888 15.2071 0.883125 15.2071C0.5805 15.2071 0.29025 15.1936 0 15.1565C1.63462 16.2106 3.57188 16.8125 5.661 16.8125C12.4515 16.8125 16.164 11.1875 16.164 6.31175C16.164 6.14862 16.1584 5.99113 16.1505 5.83475C16.8829 5.315 17.4982 4.66587 18 3.91887Z"
                  fill="white"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-[40px] bg-[#03A9F4]"
                width="44"
                height="44"
                viewBox="0 0 18 19"
                fill="none"
              >
                <g clip-path="url(#clip0_500_4750)">
                  <path
                    d="M10.3936 18.5V10.29H13.1482L13.5615 7.08941H10.3936V5.04632C10.3936 4.11998 10.6498 3.48869 11.9796 3.48869L13.673 3.48799V0.625307C13.3802 0.587251 12.3749 0.5 11.2049 0.5C8.76181 0.5 7.08919 1.99127 7.08919 4.72934V7.08941H4.32617V10.29H7.08919V18.5H10.3936Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_500_4750">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-[40px] bg-[#03A9F4]"
                width="44"
                height="44"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M16.1996 16.6995V11.4255C16.1996 8.83352 15.6416 6.85352 12.6176 6.85352C11.1596 6.85352 10.1876 7.64552 9.79156 8.40152H9.75556V7.08752H6.89355V16.6995H9.88156V11.9295C9.88156 10.6695 10.1156 9.46352 11.6636 9.46352C13.1936 9.46352 13.2116 10.8855 13.2116 12.0015V16.6815H16.1996V16.6995Z"
                  fill="white"
                />
                <path
                  d="M2.03418 7.08789H5.02218V16.6999H2.03418V7.08789Z"
                  fill="white"
                />
                <path
                  d="M3.5278 2.2998C2.5738 2.2998 1.7998 3.0738 1.7998 4.0278C1.7998 4.9818 2.5738 5.7738 3.5278 5.7738C4.4818 5.7738 5.2558 4.9818 5.2558 4.0278C5.2558 3.0738 4.4818 2.2998 3.5278 2.2998Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          {/* res nav */}
          <div className="gap-4 lg:hidden">
            <div className="flex justify-between">
              {/* a */}
              <div className="w-[127px] h-[29px] mb-4 lg:mb-0">
                <img src="../public/p1.png" alt="" />
              </div>

              {/* c */}
              <div className="flex justify-between gap-2 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rounded-[40px] p-[10px] gap-[10px] bg-[#03A9F4]"
                  width="44"
                  height="44"
                  viewBox="0 0 18 19"
                  fill="none"
                >
                  <path
                    d="M18 3.91887C17.3306 4.2125 16.6174 4.40712 15.8737 4.50162C16.6388 4.04487 17.2226 3.32712 17.4971 2.462C16.7839 2.88725 15.9964 3.18763 15.1571 3.35525C14.4799 2.63413 13.5146 2.1875 12.4616 2.1875C10.4186 2.1875 8.77387 3.84575 8.77387 5.87863C8.77387 6.17113 8.79862 6.45237 8.85938 6.72012C5.7915 6.5705 3.07687 5.10013 1.25325 2.86025C0.934875 3.41263 0.748125 4.04488 0.748125 4.7255C0.748125 6.0035 1.40625 7.13637 2.38725 7.79225C1.79437 7.781 1.21275 7.60888 0.72 7.33775C0.72 7.349 0.72 7.36363 0.72 7.37825C0.72 9.1715 1.99912 10.661 3.6765 11.0041C3.37612 11.0863 3.04875 11.1256 2.709 11.1256C2.47275 11.1256 2.23425 11.1121 2.01038 11.0626C2.4885 12.524 3.84525 13.5984 5.4585 13.6332C4.203 14.6154 2.60888 15.2071 0.883125 15.2071C0.5805 15.2071 0.29025 15.1936 0 15.1565C1.63462 16.2106 3.57188 16.8125 5.661 16.8125C12.4515 16.8125 16.164 11.1875 16.164 6.31175C16.164 6.14862 16.1584 5.99113 16.1505 5.83475C16.8829 5.315 17.4982 4.66587 18 3.91887Z"
                    fill="white"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rounded-[40px] p-[10px] gap-[10px] bg-[#03A9F4]"
                  width="44"
                  height="44"
                  viewBox="0 0 18 19"
                  fill="none"
                >
                  <g clip-path="url(#clip0_500_4750)">
                    <path
                      d="M10.3936 18.5V10.29H13.1482L13.5615 7.08941H10.3936V5.04632C10.3936 4.11998 10.6498 3.48869 11.9796 3.48869L13.673 3.48799V0.625307C13.3802 0.587251 12.3749 0.5 11.2049 0.5C8.76181 0.5 7.08919 1.99127 7.08919 4.72934V7.08941H4.32617V10.29H7.08919V18.5H10.3936Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_500_4750">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rounded-[40px] p-[10px] gap-[10px] bg-[#03A9F4]"
                  width="44"
                  height="44"
                  viewBox="0 0 18 19"
                  fill="none"
                >
                  <path
                    d="M16.1996 16.6995V11.4255C16.1996 8.83352 15.6416 6.85352 12.6176 6.85352C11.1596 6.85352 10.1876 7.64552 9.79156 8.40152H9.75556V7.08752H6.89355V16.6995H9.88156V11.9295C9.88156 10.6695 10.1156 9.46352 11.6636 9.46352C13.1936 9.46352 13.2116 10.8855 13.2116 12.0015V16.6815H16.1996V16.6995Z"
                    fill="white"
                  />
                  <path
                    d="M2.03418 7.08789H5.02218V16.6999H2.03418V7.08789Z"
                    fill="white"
                  />
                  <path
                    d="M3.5278 2.2998C2.5738 2.2998 1.7998 3.0738 1.7998 4.0278C1.7998 4.9818 2.5738 5.7738 3.5278 5.7738C4.4818 5.7738 5.2558 4.9818 5.2558 4.0278C5.2558 3.0738 4.4818 2.2998 3.5278 2.2998Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            {/* b */}
            <div className="grid grid-cols-4 gap-4 sm:grid-cols-4 md:grid-cols-7">
              <button className="btn btn-ghost text-white bg-[#003757] rounded-[40px] border border-[rgba(255,255,255,0.12)] mb-2">
                Brokers
              </button>
              <button className="btn btn-ghost text-white bg-[#003757] rounded-[40px] border border-[rgba(255,255,255,0.12)] mb-2">
                Scam Alerts
              </button>
              <button className="btn btn-ghost text-white bg-[#003757] rounded-[40px] border border-[rgba(255,255,255,0.12)] mb-2">
                Regulators
              </button>
              <button className="btn btn-ghost text-white bg-[#003757] rounded-[40px] border border-[rgba(255,255,255,0.12)] mb-2">
                Claims
              </button>
              <button className="btn btn-ghost text-white bg-[#003757] rounded-[40px] border border-[rgba(255,255,255,0.12)] mb-2">
                Awards
              </button>
              <button className="btn btn-ghost text-white bg-[#003757] rounded-[40px] border border-[rgba(255,255,255,0.12)] mb-2">
                News
              </button>
              <button className="btn btn-ghost text-white bg-[#003757] rounded-[40px] border border-[rgba(255,255,255,0.12)] mb-2">
                About Us
              </button>
            </div>
          </div>

          {/* text */}
          <div className="">
            <p className="p-4 text-sm text-amber-50 md:text-base">
              At Investari.com, we respect your privacy and are committed to
              protecting your personal information. We collect and store user
              data, such as reviews and browsing activity, solely to enhance our
              brokerage comparison services and improve user experience. Your
              personal data will never be sold, shared, or disclosed to third
              parties, except as required by law or for site functionality
              (e.g., fraud prevention, security measures). By submitting a
              review, you agree that your feedback may be publicly displayed
              while keeping your personal details anonymous unless otherwise
              specified. We use cookies and analytics tools to track site
              performance and user interactions, which you can manage through
              your browser settings. For more details on how we handle data,
              please review our full Privacy Policy.
            </p>

            <p className="p-4 text-sm text-center text-amber-50 md:text-base">
              ©2018-2025 Investari. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;