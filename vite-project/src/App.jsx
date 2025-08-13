import './App.css'
import { CiSearch } from 'react-icons/ci'
import { IoIosMenu } from 'react-icons/io'

function App() {
  return (
    <div className="h-[1920px] w-full bg-[#D0E6E8] mx-auto ">
      {/* Section 1 */}
      {/* Navbar */}
      <div className="navbar shadow-sm border-0 bg-[#D0E6E8] md:px-25 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {/* responsive button */}
              <button className="btn bg-[#00A89B] text-white rounded-[40px] gap-[6px] pt-1.5 pr-2 pb-1.5 pl-3">
                Menu
                <svg
                  className="rounded-[40px] w-5 h-5 shrink-0 bg-[rgba(186,198,213,0.25)]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="1 0 9 11"
                  fill="none"
                >
                  <path
                    d="M1.5625 3.625H8.4375M1.5625 5.5H8.4375M1.5625 7.375H8.4375"
                    stroke="#003757"
                    stroke-miterlimit="7"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>
            {/* after clicking menu button */}
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-[#fff] rounded-box  md:w-full"
            >
              <div className="justify-between w-full md:flex bg-[#fff]">
                <div className="md:w-full text-[#003757] font-[Qualy] text-4xl md:text-[28px] font-qualy leading-normal">
                  <ul>

                    <li><a className='text-4xl font-qualy'>Brokers</a></li>
                    <li><a className='text-4xl'>Scam Alerts</a></li>
                    <li><a className='text-4xl'>Regulators</a></li>

                  </ul>
                </div>
                <div className="md:w-1/2">

                  <ul className='text-4xl text-black font-qualy'>
                    <li><a className='text-4xl'>Claims</a></li>
                    <li><a className='text-4xl'>Awards</a></li>
                    <li><a className='text-4xl'>News</a></li>
                    <li><a className='text-4xl'>About Us</a></li>

                  </ul>
                </div>
              </div>
              <button className="flex w-full p-[16px_22px] justify-center items-center  rounded-[40px] text-white  bg-[#00A89B]">
                Leave a Review
              </button>
            </ul>
          </div>

          {/* Logo - visible on mobile and desktop, hidden on tablet */}
          <a className="text-xl md:w-[204px] h-[40px] md:hidden lg:block">
            <img
              src="/p1.png"
              alt="Button Image"
              className="w-[204px] h-[40px] shrink-0"
            />
          </a>

        </div>

        {/* Centered logo for tablet - visible only on md screens */}
        <div className="justify-center navbar-center md:flex lg:hidden">
          <a className="text-xl w-[204px] h-[40px]">
            <img
              src="/p1.png"
              alt="Button Image"
              className="w-[204px] h-[40px] shrink-0"
            />
          </a>
        </div>

        {/* Desktop navigation - hidden on mobile and tablet */}
        <div className="navbar-center hidden lg:flex justify-center gap-[10px]  rounded-[45px] font-title ">
          <ul className="gap-6 text-[16px] font-normal menu menu-horizontal ">
            {['Brokers', 'Scam Alerts', 'Regulators', 'Claims', 'Awards', 'News', 'About Us'].map(item => (
              <li key={item} className="flex p-[18px_22px] justify-center items-center gap-[10px] rounded-[40px] border border-[#003757]/12 text-[16px] hover:bg-white active:bg-white">
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </div>



        <div className="flex items-center gap-3 navbar-end">
          {/* Search Icon visible on all devices */}
          <div className="rounded-[40px] bg-[rgba(186,_198,_213,_0.25)] p-2">
            <CiSearch className="text-lg text-[#003757]" />
          </div>
          <button className="hidden py-[18px] px-[22px] lg:block bg-[#00A89B] text-white rounded-[40px]">
            Leave a Review
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <section className="flex items-center justify-between mt-9 mb-9 px-25  text-[#003757] gap-[154px] text-[46px] ">
        {/* div 1 */}
        <div className=" flex  flex-col justify-between gap-10 items-start lg:w-[711px] lg:h-[338px py-[20px]">
        {/* text */}
        <div className='gap-[20px]'>
           <div className="text-[46px] font-bold text-[#003757] font-[Qualy] leading-normal" >
           <h2 >Find the Best Financial</h2>
           <h2> Broker for You</h2>
        </div>
          
          <p className="mt-4 text-lg w-[711px] h-[88px] text-[#003757] font-[Inter Tight] text-[18px] font-normal ">
            Since its inception, Investari has been the trusted source for expert, data-driven reviews
            of financial brokers across all sectors, including forex, stocks, bonds, crypto, and more.
            Our comprehensive analysis helps traders and investors find the best brokers suited to their needs,
            backed by years of hands-on research and unbiased insights.
          </p>
        </div>
       
          <button className=" btn btn-wide  bg-[#00A89B] rounded-[40px] flex justify-center items-center text-white w-[300px] h-[62px] p-[20px_22px]  gap-2 flex-shrink-0">Search all brokers</button>
        </div>
        {/* div 2*/}
        <div className='lg:grid lg:grid-cols-2 lg:gap-[9px]  '>
          {/* Cards 1*/}
          <div className='lg:grid lg:grid-rows-3 lg:gap-[9px] '>
            {/* 1 */}
            <div className=" lg:w-[423px] lg:h-[106px] bg-base-100 card-xs shadow-sm rounded-[45px] p-[20px]">
              <div className="flex items-center justify-evenly">
                {/* logo1 */}
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.33301 8.13379H9.99967" stroke="#003757" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.33301 10.7998H8.25301" stroke="#003757" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.66634 3.99967H9.33301C10.6663 3.99967 10.6663 3.33301 10.6663 2.66634C10.6663 1.33301 9.99967 1.33301 9.33301 1.33301H6.66634C5.99967 1.33301 5.33301 1.33301 5.33301 2.66634C5.33301 3.99967 5.99967 3.99967 6.66634 3.99967Z" stroke="#003757" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.6667 2.67969C12.8867 2.79969 14 3.61969 14 6.66635V10.6664C14 13.333 13.3333 14.6664 10 14.6664H6C2.66667 14.6664 2 13.333 2 10.6664V6.66635C2 3.62635 3.11333 2.79969 5.33333 2.67969" stroke="#003757" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <h2 className="text-[26px]">Explore best brokers <br /> By category </h2>

                {/* logo2 */}
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M13.7606 0.989927C13.7606 0.575714 13.4248 0.239927 13.0106 0.239927L6.26056 0.239927C5.84635 0.239927 5.51056 0.575713 5.51056 0.989927C5.51056 1.40414 5.84635 1.73993 6.26056 1.73993H12.2606V7.73993C12.2606 8.15414 12.5963 8.48993 13.0106 8.48993C13.4248 8.48993 13.7606 8.15414 13.7606 7.73993L13.7606 0.989927ZM1.52008 13.5411L13.5409 1.52026L12.4802 0.459597L0.459416 12.4804L1.52008 13.5411Z" fill="#003757" />
                  </svg>
                </div>

              </div>
            </div>
            {/* 2 */}
            <div className="lg:w-[423px] lg:h-[106px] bg-base-100 card-xs shadow-sm rounded-[45px] p-[20px]">
              <div className="flex items-center justify-evenly">
                {/* logo1 */}
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clip-path="url(#clip0_500_4684)">
                      <path d="M3.58114 15.6769C3.40584 15.6769 3.23177 15.6222 3.0832 15.5148C2.80646 15.3142 2.67719 14.9695 2.75251 14.6368L3.78183 10.1027L0.291017 7.04131C0.0344181 6.8173 -0.0636068 6.46256 0.0417426 6.13797C0.147092 5.81398 0.43372 5.58461 0.773085 5.55323L5.39186 5.13391L7.21795 0.860487C7.3526 0.546514 7.65925 0.34375 7.99996 0.34375C8.34066 0.34375 8.64731 0.546514 8.78196 0.859754L10.6081 5.13391L15.2261 5.55323C15.5662 5.58387 15.8528 5.81398 15.9582 6.13797C16.0635 6.46195 15.9661 6.8173 15.7095 7.04131L12.2187 10.1021L13.248 14.6361C13.3235 14.9695 13.1941 15.3142 12.9174 15.5142C12.6414 15.7141 12.2734 15.7295 11.9827 15.5548L7.99996 13.1748L4.01719 15.5562C3.88254 15.6361 3.73251 15.6769 3.58114 15.6769ZM7.99996 12.1495C8.15133 12.1495 8.30123 12.1901 8.436 12.2701L12.1948 14.5182L11.2233 10.2387C11.154 9.93408 11.2574 9.61608 11.4927 9.41002L14.7888 6.51932L10.428 6.12332C10.114 6.09463 9.844 5.89724 9.72131 5.60792L7.99996 1.5751L6.27652 5.60853C6.15518 5.89589 5.88515 6.09329 5.57191 6.12197L1.21047 6.51798L4.50646 9.40868C4.74255 9.61535 4.84582 9.93274 4.77587 10.238L3.80515 14.5175L7.56391 12.2701C7.69856 12.1901 7.84858 12.1495 7.99996 12.1495ZM5.35658 5.21656C5.35658 5.21656 5.35658 5.21729 5.35584 5.2179L5.35658 5.21656ZM10.642 5.2146L10.6427 5.21595C10.6427 5.21521 10.6427 5.21521 10.642 5.2146Z" fill="#003757" />
                    </g>
                    <defs>
                      <clipPath id="clip0_500_4684">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h2 className="text-[26px]">Explore best brokers <br /> reviews </h2>

                {/* logo2 */}
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M13.7606 0.989927C13.7606 0.575714 13.4248 0.239927 13.0106 0.239927L6.26056 0.239927C5.84635 0.239927 5.51056 0.575713 5.51056 0.989927C5.51056 1.40414 5.84635 1.73993 6.26056 1.73993H12.2606V7.73993C12.2606 8.15414 12.5963 8.48993 13.0106 8.48993C13.4248 8.48993 13.7606 8.15414 13.7606 7.73993L13.7606 0.989927ZM1.52008 13.5411L13.5409 1.52026L12.4802 0.459597L0.459416 12.4804L1.52008 13.5411Z" fill="#003757" />
                  </svg>
                </div>

              </div>
            </div>
            {/* 3 */}
            <div className="lg:w-[423px] lg:h-[106px] bg-base-100 card-xs shadow-sm rounded-[45px] p-[20px]">
              <div className="flex items-center justify-evenly">
                {/* logo1 */}
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1.33301 14.667H14.6663" stroke="#003757" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.5 2.66634V14.6663H9.5V2.66634C9.5 1.93301 9.2 1.33301 8.3 1.33301H7.7C6.8 1.33301 6.5 1.93301 6.5 2.66634Z" stroke="#003757" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2 6.66634V14.6663H4.66667V6.66634C4.66667 5.93301 4.4 5.33301 3.6 5.33301H3.06667C2.26667 5.33301 2 5.93301 2 6.66634Z" stroke="#003757" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.333 10.0003V14.667H13.9997V10.0003C13.9997 9.26699 13.733 8.66699 12.933 8.66699H12.3997C11.5997 8.66699 11.333 9.26699 11.333 10.0003Z" stroke="#003757" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <h2 className="text-[26px]">Browse our broker reviews <br /> ide-by-side </h2>

                {/* logo2 */}
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M13.7606 0.989927C13.7606 0.575714 13.4248 0.239927 13.0106 0.239927L6.26056 0.239927C5.84635 0.239927 5.51056 0.575713 5.51056 0.989927C5.51056 1.40414 5.84635 1.73993 6.26056 1.73993H12.2606V7.73993C12.2606 8.15414 12.5963 8.48993 13.0106 8.48993C13.4248 8.48993 13.7606 8.15414 13.7606 7.73993L13.7606 0.989927ZM1.52008 13.5411L13.5409 1.52026L12.4802 0.459597L0.459416 12.4804L1.52008 13.5411Z" fill="#003757" />
                  </svg>
                </div>

              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="lg:w-[423px] lg:h-[338px] bg-base-100 rounded-[45px]">
              <div className="">
           <div className="">
      <img
        className="rounded-t-[45px] pt-[30px] pr-[65.263px] pb-[30.261px] pl-[65px] flex justify-center items-center" // Make the image responsive and rounded at the top
        src="/Group 12.png"
        alt="Broker Reviews"
      />
    </div>
    
  </div>
  
</div>

        </div>
      </section>

      {/* section3 */}
      <section className='bg-[#E7EDF0] w-[1720px] h-[30px] rounded-tl-[50px] rounded-tr-[50px] rounded-bl-none rounded-br-none p-[30px] mt-9'>
        {/* card 1 */}
        <div className='px-25 py-9 '>
          <div className="gap-4  bg-base-100 p-9">
            <h1 className=' text-[30px] text-[#003757] '>How Investari Tests, Reviews, and Ranks Brokers</h1>
            <div className="flex justify-between">
              <h2 className="w-1/2 ">CInvestari's broker review process follows a rigorous methodology. Our financial experts, with extensive industry experience, evaluate brokers across multiple categories using hundreds of data points. We conduct live testing, real account evaluations, and in-depth comparisons to ensure accuracy. These comprehensive reviews allow us to rank brokers based on their strengths, catering to different trading styles, asset classes, and regions.</h2>

              <div className='w-1/2 '>
                <p className="">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <button className="btn rounded-[40px] bg-[#00A89B] w-full text-amber-50 mt-4">Read Full Methodology</button>
              </div>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className='px-25'>
          <div className="w-full p-9 card card-border bg-base-100 rounded-[50px] gap-4 mt-4">
            <div className='flex gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 14.667H14" stroke="#003757" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.73332 5.58594H2.66667C2.3 5.58594 2 5.88594 2 6.2526V11.9993C2 12.3659 2.3 12.6659 2.66667 12.6659H3.73332C4.09998 12.6659 4.39998 12.3659 4.39998 11.9993V6.2526C4.39998 5.88594 4.09998 5.58594 3.73332 5.58594Z" stroke="#003757" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.53312 3.45996H7.46647C7.0998 3.45996 6.7998 3.75996 6.7998 4.12663V12C6.7998 12.3666 7.0998 12.6666 7.46647 12.6666H8.53312C8.89979 12.6666 9.19979 12.3666 9.19979 12V4.12663C9.19979 3.75996 8.89979 3.45996 8.53312 3.45996Z" stroke="#003757" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.3329 1.33301H12.2663C11.8996 1.33301 11.5996 1.63301 11.5996 1.99967V11.9997C11.5996 12.3663 11.8996 12.6663 12.2663 12.6663H13.3329C13.6996 12.6663 13.9996 12.3663 13.9996 11.9997V1.99967C13.9996 1.63301 13.6996 1.33301 13.3329 1.33301Z" stroke="#003757" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <h1>Discover the Best Brokers for Every Market</h1>
            </div>
            <div className='w-1/2'>
              Whether you're trading stocks, forex, bonds, or crypto, Investari's expert guides and rankings help you find the best brokers tailored to your investment goals and trading strategies. Explore our top-rated financial broker reviews today.
            </div>

            {/* div2 */}
            <div className='flex'>
              {/* 1 */}
              <div className='grid w-1/2 grid-cols-2 '>
                <div className="shadow-sm card w-96 bg-base-100 card-md rounded-[45px]">

                  <div className="items-center card-body">
                    <svg className='rounded-[65.455px] bg-[#FFC338] w-[40px] h-[40px] flex-shrink-0' xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                      <path d="M10.5 8.33333V15M10.5 8.33333C10.5 6.49238 11.9924 5 13.8333 5H27.1667C29.0076 5 30.5 6.49238 30.5 8.33333M10.5 8.33333H8.83333C6.99238 8.33333 5.5 9.82571 5.5 11.6667C5.5 13.5076 6.99238 15 8.83333 15H10.5M10.5 15C10.5 20.5228 14.9771 25 20.5 25M30.5 15V8.33333M30.5 15C30.5 20.5228 26.0228 25 20.5 25M30.5 15H32.1667C34.0076 15 35.5 13.5076 35.5 11.6667C35.5 9.82571 34.0076 8.33333 32.1667 8.33333L30.5 8.33333M20.5 25V28.3333M20.5 28.3333C20.5 32.0152 21.8181 35 25.5 35M20.5 28.3333C20.5 32.0152 19.1819 35 15.5 35M25.5 35H15.5M25.5 35H27.1667M15.5 35H13.8333" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                    </svg>


                    <h1>Best Brokers</h1>

                  </div>


                </div>
                <div className="shadow-sm card w-96 bg-base-100 card-md rounded-[45px] border-[rgba(0,55,87,0.12)]">
                  <div className="items-center card-body">
                    <svg className='rounded-[65.455px] bg-[#FFC338] w-[40px] h-[40px] flex-shrink-0' xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                      <path d="M10.5 8.33333V15M10.5 8.33333C10.5 6.49238 11.9924 5 13.8333 5H27.1667C29.0076 5 30.5 6.49238 30.5 8.33333M10.5 8.33333H8.83333C6.99238 8.33333 5.5 9.82571 5.5 11.6667C5.5 13.5076 6.99238 15 8.83333 15H10.5M10.5 15C10.5 20.5228 14.9771 25 20.5 25M30.5 15V8.33333M30.5 15C30.5 20.5228 26.0228 25 20.5 25M30.5 15H32.1667C34.0076 15 35.5 13.5076 35.5 11.6667C35.5 9.82571 34.0076 8.33333 32.1667 8.33333L30.5 8.33333M20.5 25V28.3333M20.5 28.3333C20.5 32.0152 21.8181 35 25.5 35M20.5 28.3333C20.5 32.0152 19.1819 35 15.5 35M25.5 35H15.5M25.5 35H27.1667M15.5 35H13.8333" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                    </svg>


                    <h1>Best Brokers</h1>

                  </div>


                </div>
                <div className="shadow-sm card w-96 bg-base-100 card-md rounded-[45px] border-[rgba(0,55,87,0.12)]">
                  <div className="items-center card-body">
                    <svg className='rounded-[65.455px] bg-[#FFC338] w-[40px] h-[40px] flex-shrink-0' xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                      <path d="M10.5 8.33333V15M10.5 8.33333C10.5 6.49238 11.9924 5 13.8333 5H27.1667C29.0076 5 30.5 6.49238 30.5 8.33333M10.5 8.33333H8.83333C6.99238 8.33333 5.5 9.82571 5.5 11.6667C5.5 13.5076 6.99238 15 8.83333 15H10.5M10.5 15C10.5 20.5228 14.9771 25 20.5 25M30.5 15V8.33333M30.5 15C30.5 20.5228 26.0228 25 20.5 25M30.5 15H32.1667C34.0076 15 35.5 13.5076 35.5 11.6667C35.5 9.82571 34.0076 8.33333 32.1667 8.33333L30.5 8.33333M20.5 25V28.3333M20.5 28.3333C20.5 32.0152 21.8181 35 25.5 35M20.5 28.3333C20.5 32.0152 19.1819 35 15.5 35M25.5 35H15.5M25.5 35H27.1667M15.5 35H13.8333" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                    </svg>


                    <h1>Best Brokers</h1>

                  </div>


                </div>
                <div className="shadow-sm card w-96 bg-base-100 card-md rounded-[45px] border-[rgba(0,55,87,0.12)]">
                  <div className="items-center card-body">
                    <svg className='rounded-[65.455px] bg-[#FFC338] w-[40px] h-[40px] flex-shrink-0' xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                      <path d="M10.5 8.33333V15M10.5 8.33333C10.5 6.49238 11.9924 5 13.8333 5H27.1667C29.0076 5 30.5 6.49238 30.5 8.33333M10.5 8.33333H8.83333C6.99238 8.33333 5.5 9.82571 5.5 11.6667C5.5 13.5076 6.99238 15 8.83333 15H10.5M10.5 15C10.5 20.5228 14.9771 25 20.5 25M30.5 15V8.33333M30.5 15C30.5 20.5228 26.0228 25 20.5 25M30.5 15H32.1667C34.0076 15 35.5 13.5076 35.5 11.6667C35.5 9.82571 34.0076 8.33333 32.1667 8.33333L30.5 8.33333M20.5 25V28.3333M20.5 28.3333C20.5 32.0152 21.8181 35 25.5 35M20.5 28.3333C20.5 32.0152 19.1819 35 15.5 35M25.5 35H15.5M25.5 35H27.1667M15.5 35H13.8333" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                    </svg>


                    <h1>Best Brokers</h1>

                  </div>
                </div><div className="card-body">



                </div>
              </div>
              {/* 2 */}
              <div className="w-1/2">
                <div className="w-full h-full bg-base-100 rounded-[45px] border border-[rgba(0,55,87,0.12)] p-6">
                  {/* a */}
                  <div>
                    <h1>By Type</h1>
                    <div className='flex gap-5 mt-3'>
                      <div className="text-[#00A89B] text-[16px] flex  justify-center rounded-[20px] bg-[rgba(0,168,155,0.10)]">
                        Best Fixed Income Brokers
                      </div>
                      <div className="text-[#00A89B] text-[16px] flex  justify-center rounded-[20px] bg-[rgba(0,168,155,0.10)]">
                        Best Fixed Income Brokers
                      </div>
                      <div className="text-[#00A89B] text-[16px] flex  justify-center rounded-[20px] bg-[rgba(0,168,155,0.10)]">
                        Best Fixed Income Brokers
                      </div>
                    </div>
                  </div>
                  {/* b */}
                  <div>
                    <h1>By Type</h1>
                    <div className='flex gap-5 mt-3'>
                      <div className="text-[#00A89B] text-[16px] flex  justify-center rounded-[20px] bg-[rgba(0,168,155,0.10)]">
                        Best Experienced Brokers
                      </div>
                      <div className="text-[#00A89B] text-[16px] flex  justify-center rounded-[20px] bg-[rgba(0,168,155,0.10)]">
                        Best New Brokers
                      </div>
                      <div className="text-[#00A89B] text-[16px] flex  justify-center rounded-[20px] bg-[rgba(0,168,155,0.10)]">
                        Best Global Brokers
                      </div>
                    </div>
                  </div>
                  {/* c */}
                  <div>
                    <h1>By Type</h1>
                    <div className='flex gap-5 mt-3'>
                      <div className="text-[#00A89B] text-[16px] flex  justify-center rounded-[20px] px-1 py-1 bg-[rgba(0,168,155,0.10)]">
                        Americas
                      </div>
                      <div className="text-[#00A89B] text-[16px] flex  justify-center rounded-[20px] bg-[rgba(0,168,155,0.10)]">
                        Europe
                      </div>
                      <div className="text-[#00A89B] text-[16px] flex  justify-center rounded-[20px] bg-[rgba(0,168,155,0.10)]">
                        Asia
                      </div>
                    </div>
                  </div>

                  <h1>See all the brokers accepting clients from:</h1>
                  {/* ** */}
                  <div className="flex justify-between gap-2 mt-4">
                    <button className="flex h-[62px] p-[18px] justify-between items-center flex-1 rounded-[40px] border border-[rgba(0,55,87,0.12)] text-center ">Read Full Methodology</button>
                    <button className="flex h-[62px] p-[18px] justify-between items-center flex-1 rounded-[40px] bg-[rgba(0,55,87,0.12)] text-[#00A89B] text-[18px]  ">Read Full Methodology</button>
                  </div>





                </div>
              </div>

            </div>

          </div>
        </div>
        {/* card 3 */}

        <div className='px-25'>

          <div className='rounded-[50px] border gap-[20px]  border-[rgba(0,55,87,0.12)] bg-[#fff]  mt-4 p-2'>

            {/* text */}
            <div className='flex gap-4 p-7'>
              <svg xmlns="http://www.w3.org/2000/svg" className='rounded-[32px] border border-[rgba(0,55,87,0.12)]' width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 14.667H14" stroke="#003757" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.73332 5.58594H2.66667C2.3 5.58594 2 5.88594 2 6.2526V11.9993C2 12.3659 2.3 12.6659 2.66667 12.6659H3.73332C4.09998 12.6659 4.39998 12.3659 4.39998 11.9993V6.2526C4.39998 5.88594 4.09998 5.58594 3.73332 5.58594Z" stroke="#003757" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.53312 3.45996H7.46647C7.0998 3.45996 6.7998 3.75996 6.7998 4.12663V12C6.7998 12.3666 7.0998 12.6666 7.46647 12.6666H8.53312C8.89979 12.6666 9.19979 12.3666 9.19979 12V4.12663C9.19979 3.75996 8.89979 3.45996 8.53312 3.45996Z" stroke="#003757" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.3329 1.33301H12.2663C11.8996 1.33301 11.5996 1.63301 11.5996 1.99967V11.9997C11.5996 12.3663 11.8996 12.6663 12.2663 12.6663H13.3329C13.6996 12.6663 13.9996 12.3663 13.9996 11.9997V1.99967C13.9996 1.63301 13.6996 1.33301 13.3329 1.33301Z" stroke="#003757" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <h1>Explore Broker Reviews</h1>
            </div>

            {/* 1 */}
            <div className='grid grid-cols-4 gap-2 p-4 mt-4 '>
              <div className="w-full p-3  rounded-[40px] border border-[rgba(0,55,87,0.12)] bg-base-100">
                <div className='flex justify-between'>
                  <div className='flex gap-2 p-2'>
                    <img className='w-[55px] h-[55px] rounded-[30px]' src="../public/logo1.png" alt="" srcset="" />
                    <h1>IS Markets</h1>
                  </div>

                  <div className='flex justify-evenly'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                      <path d="M10.5003 18.3337C15.0837 18.3337 18.8337 14.5837 18.8337 10.0003C18.8337 5.41699 15.0837 1.66699 10.5003 1.66699C5.91699 1.66699 2.16699 5.41699 2.16699 10.0003C2.16699 14.5837 5.91699 18.3337 10.5003 18.3337Z" stroke="#00A89B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6.95801 9.99993L9.31634 12.3583L14.0413 7.6416" stroke="#00A89B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <img className='w-[49px] h-[25px]' src="../public/logo2.png" alt="" srcset="" />

                  </div>

                </div>

                {/*  */}
                <div className='flex '>
                  <div className="rating">
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="1 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="2 star" defaultChecked />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="3 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="4 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="5 star" />
                  </div>

                  <p>4.5 (70 Reviews)</p>
                </div>
                <p>Emma Watson</p>

                <p>General Risk Warning: CFDs are leveraged products. Trading in CFDs  carries a high level of risk thus may no</p>

                <div className="mt-11">
                  <button className="rounded-[40px] btn text-white btn-block bg-[#00A89B]">View Broker Profile</button>
                </div>
              </div>
              <div className="w-full p-3  rounded-[40px] border border-[rgba(0,55,87,0.12)] bg-base-100">
                <div className='flex justify-between'>
                  <div className='flex gap-2 p-2'>
                    <img className='w-[55px] h-[55px] rounded-[30px]' src="../public/logo1.png" alt="" srcset="" />
                    <h1>IS Markets</h1>
                  </div>

                  <div className='flex justify-evenly'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                      <path d="M10.5003 18.3337C15.0837 18.3337 18.8337 14.5837 18.8337 10.0003C18.8337 5.41699 15.0837 1.66699 10.5003 1.66699C5.91699 1.66699 2.16699 5.41699 2.16699 10.0003C2.16699 14.5837 5.91699 18.3337 10.5003 18.3337Z" stroke="#00A89B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6.95801 9.99993L9.31634 12.3583L14.0413 7.6416" stroke="#00A89B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <img className='w-[49px] h-[25px]' src="../public/logo2.png" alt="" srcset="" />

                  </div>

                </div>

                {/*  */}
                <div className='flex '>
                  <div className="rating">
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="1 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="2 star" defaultChecked />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="3 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="4 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="5 star" />
                  </div>

                  <p>4.5 (70 Reviews)</p>
                </div>
                <p>Emma Watson</p>

                <p>General Risk Warning: CFDs are leveraged products. Trading in CFDs  carries a high level of risk thus may no</p>

                <div className="mt-11">
                  <button className="rounded-[40px] btn text-white btn-block bg-[#00A89B]">View Broker Profile</button>
                </div>
              </div>
              <div className="w-full p-3  rounded-[40px] border border-[rgba(0,55,87,0.12)] bg-base-100">
                <div className='flex justify-between'>
                  <div className='flex gap-2 p-2'>
                    <img className='w-[55px] h-[55px] rounded-[30px]' src="../public/logo1.png" alt="" srcset="" />
                    <h1>IS Markets</h1>
                  </div>

                  <div className='flex justify-evenly'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                      <path d="M10.5003 18.3337C15.0837 18.3337 18.8337 14.5837 18.8337 10.0003C18.8337 5.41699 15.0837 1.66699 10.5003 1.66699C5.91699 1.66699 2.16699 5.41699 2.16699 10.0003C2.16699 14.5837 5.91699 18.3337 10.5003 18.3337Z" stroke="#00A89B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6.95801 9.99993L9.31634 12.3583L14.0413 7.6416" stroke="#00A89B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <img className='w-[49px] h-[25px]' src="../public/logo2.png" alt="" srcset="" />

                  </div>

                </div>

                {/*  */}
                <div className='flex '>
                  <div className="rating">
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="1 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="2 star" defaultChecked />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="3 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="4 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="5 star" />
                  </div>

                  <p>4.5 (70 Reviews)</p>
                </div>
                <p>Emma Watson</p>

                <p>General Risk Warning: CFDs are leveraged products. Trading in CFDs  carries a high level of risk thus may no</p>

                <div className="mt-11">
                  <button className="rounded-[40px] btn text-white btn-block bg-[#00A89B]">View Broker Profile</button>
                </div>
              </div>
              <div className="w-full p-3  rounded-[40px] border border-[rgba(0,55,87,0.12)] bg-base-100">
                <div className='flex justify-between'>
                  <div className='flex gap-2 p-2'>
                    <img className='w-[55px] h-[55px] rounded-[30px]' src="../public/logo1.png" alt="" srcset="" />
                    <h1>IS Markets</h1>
                  </div>

                  <div className='flex justify-evenly'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                      <path d="M10.5003 18.3337C15.0837 18.3337 18.8337 14.5837 18.8337 10.0003C18.8337 5.41699 15.0837 1.66699 10.5003 1.66699C5.91699 1.66699 2.16699 5.41699 2.16699 10.0003C2.16699 14.5837 5.91699 18.3337 10.5003 18.3337Z" stroke="#00A89B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6.95801 9.99993L9.31634 12.3583L14.0413 7.6416" stroke="#00A89B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <img className='w-[49px] h-[25px]' src="../public/logo2.png" alt="" srcset="" />

                  </div>

                </div>

                {/*  */}
                <div className='flex '>
                  <div className="rating">
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="1 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="2 star" defaultChecked />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="3 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="4 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="5 star" />
                  </div>

                  <p>4.5 (70 Reviews)</p>
                </div>
                <p>Emma Watson</p>

                <p>General Risk Warning: CFDs are leveraged products. Trading in CFDs  carries a high level of risk thus may no</p>

                <div className="mt-11">
                  <button className="rounded-[40px] btn text-white btn-block bg-[#00A89B]">View Broker Profile</button>
                </div>
              </div>
              <div className="w-full p-3  rounded-[40px] border border-[rgba(0,55,87,0.12)] bg-base-100">
                <div className='flex justify-between'>
                  <div className='flex gap-2 p-2'>
                    <img className='w-[55px] h-[55px] rounded-[30px]' src="../public/logo1.png" alt="" srcset="" />
                    <h1>IS Markets</h1>
                  </div>

                  <div className='flex justify-evenly'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                      <path d="M10.5003 18.3337C15.0837 18.3337 18.8337 14.5837 18.8337 10.0003C18.8337 5.41699 15.0837 1.66699 10.5003 1.66699C5.91699 1.66699 2.16699 5.41699 2.16699 10.0003C2.16699 14.5837 5.91699 18.3337 10.5003 18.3337Z" stroke="#00A89B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6.95801 9.99993L9.31634 12.3583L14.0413 7.6416" stroke="#00A89B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <img className='w-[49px] h-[25px]' src="../public/logo2.png" alt="" srcset="" />

                  </div>

                </div>

                {/*  */}
                <div className='flex '>
                  <div className="rating">
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="1 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="2 star" defaultChecked />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="3 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="4 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="5 star" />
                  </div>

                  <p>4.5 (70 Reviews)</p>
                </div>
                <p>Emma Watson</p>

                <p>General Risk Warning: CFDs are leveraged products. Trading in CFDs  carries a high level of risk thus may no</p>

                <div className="mt-11">
                  <button className="rounded-[40px] btn text-white btn-block bg-[#00A89B]">View Broker Profile</button>
                </div>
              </div>
              <div className="w-full p-3  rounded-[40px] border border-[rgba(0,55,87,0.12)] bg-base-100">
                <div className='flex justify-between'>
                  <div className='flex gap-2 p-2'>
                    <img className='w-[55px] h-[55px] rounded-[30px]' src="../public/logo1.png" alt="" srcset="" />
                    <h1>IS Markets</h1>
                  </div>

                  <div className='flex justify-evenly'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                      <path d="M10.5003 18.3337C15.0837 18.3337 18.8337 14.5837 18.8337 10.0003C18.8337 5.41699 15.0837 1.66699 10.5003 1.66699C5.91699 1.66699 2.16699 5.41699 2.16699 10.0003C2.16699 14.5837 5.91699 18.3337 10.5003 18.3337Z" stroke="#00A89B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6.95801 9.99993L9.31634 12.3583L14.0413 7.6416" stroke="#00A89B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <img className='w-[49px] h-[25px]' src="../public/logo2.png" alt="" srcset="" />

                  </div>

                </div>

                {/*  */}
                <div className='flex '>
                  <div className="rating">
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="1 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="2 star" defaultChecked />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="3 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="4 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="5 star" />
                  </div>

                  <p>4.5 (70 Reviews)</p>
                </div>
                <p>Emma Watson</p>

                <p>General Risk Warning: CFDs are leveraged products. Trading in CFDs  carries a high level of risk thus may no</p>

                <div className="mt-11">
                  <button className="rounded-[40px] btn text-white btn-block bg-[#00A89B]">View Broker Profile</button>
                </div>
              </div>
              <div className="w-full p-3  rounded-[40px] border border-[rgba(0,55,87,0.12)] bg-base-100">
                <div className='flex justify-between'>
                  <div className='flex gap-2 p-2'>
                    <img className='w-[55px] h-[55px] rounded-[30px]' src="../public/logo1.png" alt="" srcset="" />
                    <h1>IS Markets</h1>
                  </div>

                  <div className='flex justify-evenly'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                      <path d="M10.5003 18.3337C15.0837 18.3337 18.8337 14.5837 18.8337 10.0003C18.8337 5.41699 15.0837 1.66699 10.5003 1.66699C5.91699 1.66699 2.16699 5.41699 2.16699 10.0003C2.16699 14.5837 5.91699 18.3337 10.5003 18.3337Z" stroke="#00A89B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6.95801 9.99993L9.31634 12.3583L14.0413 7.6416" stroke="#00A89B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <img className='w-[49px] h-[25px]' src="../public/logo2.png" alt="" srcset="" />

                  </div>

                </div>

                {/*  */}
                <div className='flex '>
                  <div className="rating">
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="1 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="2 star" defaultChecked />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="3 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="4 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="5 star" />
                  </div>

                  <p>4.5 (70 Reviews)</p>
                </div>
                <p>Emma Watson</p>

                <p>General Risk Warning: CFDs are leveraged products. Trading in CFDs  carries a high level of risk thus may no</p>

                <div className="mt-11">
                  <button className="rounded-[40px] btn text-white btn-block bg-[#00A89B]">View Broker Profile</button>
                </div>
              </div>
              <div className="w-full p-3  rounded-[40px] border border-[rgba(0,55,87,0.12)] bg-base-100">
                <div className='flex justify-between'>
                  <div className='flex gap-2 p-2'>
                    <img className='w-[55px] h-[55px] rounded-[30px]' src="../public/logo1.png" alt="" srcset="" />
                    <h1>IS Markets</h1>
                  </div>

                  <div className='flex justify-evenly'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                      <path d="M10.5003 18.3337C15.0837 18.3337 18.8337 14.5837 18.8337 10.0003C18.8337 5.41699 15.0837 1.66699 10.5003 1.66699C5.91699 1.66699 2.16699 5.41699 2.16699 10.0003C2.16699 14.5837 5.91699 18.3337 10.5003 18.3337Z" stroke="#00A89B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6.95801 9.99993L9.31634 12.3583L14.0413 7.6416" stroke="#00A89B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <img className='w-[49px] h-[25px]' src="../public/logo2.png" alt="" srcset="" />

                  </div>

                </div>

                {/*  */}
                <div className='flex '>
                  <div className="rating">
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="1 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="2 star" defaultChecked />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="3 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="4 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="5 star" />
                  </div>

                  <p>4.5 (70 Reviews)</p>
                </div>
                <p>Emma Watson</p>

                <p>General Risk Warning: CFDs are leveraged products. Trading in CFDs  carries a high level of risk thus may no</p>

                <div className="mt-11">
                  <button className="rounded-[40px] btn text-white btn-block bg-[#00A89B]">View Broker Profile</button>
                </div>
              </div>
              <div className="w-full p-3  rounded-[40px] border border-[rgba(0,55,87,0.12)] bg-base-100">
                <div className='flex justify-between'>
                  <div className='flex gap-2 p-2'>
                    <img className='w-[55px] h-[55px] rounded-[30px]' src="../public/logo1.png" alt="" srcset="" />
                    <h1>IS Markets</h1>
                  </div>

                  <div className='flex justify-evenly'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                      <path d="M10.5003 18.3337C15.0837 18.3337 18.8337 14.5837 18.8337 10.0003C18.8337 5.41699 15.0837 1.66699 10.5003 1.66699C5.91699 1.66699 2.16699 5.41699 2.16699 10.0003C2.16699 14.5837 5.91699 18.3337 10.5003 18.3337Z" stroke="#00A89B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6.95801 9.99993L9.31634 12.3583L14.0413 7.6416" stroke="#00A89B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <img className='w-[49px] h-[25px]' src="../public/logo2.png" alt="" srcset="" />

                  </div>

                </div>

                {/*  */}
                <div className='flex '>
                  <div className="rating">
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="1 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="2 star" defaultChecked />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="3 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="4 star" />
                    <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="5 star" />
                  </div>

                  <p>4.5 (70 Reviews)</p>
                </div>
                <p>Emma Watson</p>

                <p>General Risk Warning: CFDs are leveraged products. Trading in CFDs  carries a high level of risk thus may no</p>

                <div className="mt-11">
                  <button className="rounded-[40px] btn text-white btn-block bg-[#00A89B]">View Broker Profile</button>
                </div>
              </div></div>
            <button className=" mt-4  h-[62px] w-full p-[20px_22px]  gap-2 self- rounded-[40px] bg-[rgba(0,55,87,0.12)]">Subscribe</button>


          </div>
        </div>

        {/*  card 4 */}
        <div className='px-25'>
        <div className="rounded-[32px] border gap-[2px]  p-4 border-[rgba(0,55,87,0.12)] bg-[#fff] mt-4">
          {/* logo */}
          <div className='flex gap-2 p-6'>
            <svg xmlns="http://www.w3.org/2000/svg" className='rounded-[50px] border border-[rgba(0,55,87,0.12)]' width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8.00033 1.33301V2.66634M8.00033 13.333V14.6663M8.00033 6.66634V9.33301M12.0003 6.66634L4.00033 6.66634C3.26395 6.66634 2.66699 6.06939 2.66699 5.33301L2.66699 3.99967C2.66699 3.26329 3.26395 2.66634 4.00033 2.66634L12.0003 2.66634C12.7367 2.66634 13.3337 3.26329 13.3337 3.99967V5.33301C13.3337 6.06939 12.7367 6.66634 12.0003 6.66634ZM10.0003 13.333H6.00033C5.26395 13.333 4.66699 12.7361 4.66699 11.9997L4.66699 10.6663C4.66699 9.92996 5.26395 9.33301 6.00033 9.33301L10.0003 9.33301C10.7367 9.33301 11.3337 9.92996 11.3337 10.6663V11.9997C11.3337 12.7361 10.7367 13.333 10.0003 13.333Z" stroke="#003757" stroke-linecap="round" />
            </svg>
            <h1>Compare Brokers</h1>
          </div>
          {/* card */}
          <div className='flex gap-4 m-2 justify-evenly'>
            {/* 1 */}

            <div className="border border-[rgba(0,55,87,0.12)] rounded-[45px] w-full bg-base-100">
              {/* a */}
              <div className="flex gap-2 p-4">
                <img className="w-[55px] h-[55px] rounded-[30px]" src="../public/logo1.png" alt="" srcset="" />
                <p >IS Markets</p>
              </div>
              {/* b */}
              <div className="flex gap-2 p-4">
                <img className="w-[55px] h-[55px] rounded-[30px]" src="../public/logo1.png" alt="" srcset="" />
                <p >IS Markets</p>
              </div>
            </div>
            <div className="border border-[rgba(0,55,87,0.12)] rounded-[45px] w-full bg-base-100">
              {/* a */}
              <div className="flex gap-2 p-4">
                <img className="w-[55px] h-[55px] rounded-[30px]" src="../public/logo1.png" alt="" srcset="" />
                <p >IS Markets</p>
              </div>
              {/* b */}
              <div className="flex gap-2 p-4">
                <img className="w-[55px] h-[55px] rounded-[30px]" src="../public/logo1.png" alt="" srcset="" />
                <p >IS Markets</p>
              </div>
            </div>
            <div className="border border-[rgba(0,55,87,0.12)] rounded-[45px] w-full bg-base-100">
              {/* a */}
              <div className="flex gap-2 p-4">
                <img className="w-[55px] h-[55px] rounded-[30px]" src="../public/logo1.png" alt="" srcset="" />
                <p >IS Markets</p>
              </div>
              {/* b */}
              <div className="flex gap-2 p-4">
                <img className="w-[55px] h-[55px] rounded-[30px]" src="../public/logo1.png" alt="" srcset="" />
                <p >IS Markets</p>
              </div>
            </div>
            <div className="border border-[rgba(0,55,87,0.12)] rounded-[45px] w-full bg-base-100">
              {/* a */}
              <div className="flex gap-2 p-4">
                <img className="w-[55px] h-[55px] rounded-[30px]" src="../public/logo1.png" alt="" srcset="" />
                <p >IS Markets</p>
              </div>
              {/* b */}
              <div className="flex gap-2 p-4">
                <img className="w-[55px] h-[55px] rounded-[30px]" src="../public/logo1.png" alt="" srcset="" />
                <p >IS Markets</p>
              </div>
            </div>

          </div>
          <button className=" mt-4  h-[62px] w-full p-[20px_22px]  gap-2 self- rounded-[40px] bg-[rgba(0,55,87,0.12)]">Subscribe</button>



        </div>

</div>

        {/* footer */}
<div className='px-25 py-[0_25px]'>
        <div className="rounded-[50px] border gap-[2px]  p-4  bg-[#003757] mt-4">

          {/* nav */}
          <div className='flex justify-between p-4'>



            {/* a */}
            <div className='w-[204px] h-[47px]'>
              <img src="../public/p1.png" alt="" srcset="" />
            </div>
            {/* b */}
            <div className='flex gap-5'>
              <button className="btn btn-ghost  text-white bg-[#003757] rounded-[40px] border border-[rgba(255,255,255,0.12)]">Brokers</button>
              <button className="btn btn-ghost   text-white bg-[#003757] rounded-[40px] border border-[rgba(255,255,255,0.12)]">Scam Alerts</button>
              <button className="btn btn-ghost   text-white bg-[#003757] rounded-[40px] border border-[rgba(255,255,255,0.12)]">Regulators</button>
              <button className="btn btn-ghost  text-white bg-[#003757] rounded-[40px] border border-[rgba(255,255,255,0.12)]">Claims</button>
              <button className="btn btn-ghost  text-white bg-[#003757] rounded-[40px] border border-[rgba(255,255,255,0.12)]">Awards</button>
              <button className="btn btn-ghost  text-white bg-[#003757] rounded-[40px] border border-[rgba(255,255,255,0.12)]">News</button>
              <button className="btn btn-ghost  text-white bg-[#003757] rounded-[40px] border border-[rgba(255,255,255,0.12)]">About Us</button>

            </div>
            {/* c */}

            <div className='flex gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className='rounded-[40px] bg-[#03A9F4] ' width="44" height="44" viewBox="0 0 18 19" fill="none">
                <path d="M18 3.91887C17.3306 4.2125 16.6174 4.40712 15.8737 4.50162C16.6388 4.04487 17.2226 3.32712 17.4971 2.462C16.7839 2.88725 15.9964 3.18763 15.1571 3.35525C14.4799 2.63413 13.5146 2.1875 12.4616 2.1875C10.4186 2.1875 8.77387 3.84575 8.77387 5.87863C8.77387 6.17113 8.79862 6.45237 8.85938 6.72012C5.7915 6.5705 3.07687 5.10013 1.25325 2.86025C0.934875 3.41263 0.748125 4.04488 0.748125 4.7255C0.748125 6.0035 1.40625 7.13637 2.38725 7.79225C1.79437 7.781 1.21275 7.60888 0.72 7.33775C0.72 7.349 0.72 7.36363 0.72 7.37825C0.72 9.1715 1.99912 10.661 3.6765 11.0041C3.37612 11.0863 3.04875 11.1256 2.709 11.1256C2.47275 11.1256 2.23425 11.1121 2.01038 11.0626C2.4885 12.524 3.84525 13.5984 5.4585 13.6332C4.203 14.6154 2.60888 15.2071 0.883125 15.2071C0.5805 15.2071 0.29025 15.1936 0 15.1565C1.63462 16.2106 3.57188 16.8125 5.661 16.8125C12.4515 16.8125 16.164 11.1875 16.164 6.31175C16.164 6.14862 16.1584 5.99113 16.1505 5.83475C16.8829 5.315 17.4982 4.66587 18 3.91887Z" fill="white" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" className='rounded-[40px] bg-[#03A9F4] ' width="44" height="44" viewBox="0 0 18 19" fill="none">
                <g clip-path="url(#clip0_500_4750)">
                  <path d="M10.3936 18.5V10.29H13.1482L13.5615 7.08941H10.3936V5.04632C10.3936 4.11998 10.6498 3.48869 11.9796 3.48869L13.673 3.48799V0.625307C13.3802 0.587251 12.3749 0.5 11.2049 0.5C8.76181 0.5 7.08919 1.99127 7.08919 4.72934V7.08941H4.32617V10.29H7.08919V18.5H10.3936Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_500_4750">
                    <rect width="18" height="18" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>


              <svg xmlns="http://www.w3.org/2000/svg" className='rounded-[40px] bg-[#03A9F4] ' width="44" height="44" viewBox="0 0 18 19" fill="none">
                <path d="M16.1996 16.6995V11.4255C16.1996 8.83352 15.6416 6.85352 12.6176 6.85352C11.1596 6.85352 10.1876 7.64552 9.79156 8.40152H9.75556V7.08752H6.89355V16.6995H9.88156V11.9295C9.88156 10.6695 10.1156 9.46352 11.6636 9.46352C13.1936 9.46352 13.2116 10.8855 13.2116 12.0015V16.6815H16.1996V16.6995Z" fill="white" />
                <path d="M2.03418 7.08789H5.02218V16.6999H2.03418V7.08789Z" fill="white" />
                <path d="M3.5278 2.2998C2.5738 2.2998 1.7998 3.0738 1.7998 4.0278C1.7998 4.9818 2.5738 5.7738 3.5278 5.7738C4.4818 5.7738 5.2558 4.9818 5.2558 4.0278C5.2558 3.0738 4.4818 2.2998 3.5278 2.2998Z" fill="white" />
              </svg>
            </div>

          </div>

          {/* text */}


          <div >
            <p className='p-4 text-amber-50'>At Investari.com, we respect your privacy and are committed to protecting your personal information. We collect and store user data, such as reviews and browsing activity, solely to enhance our brokerage comparison services and improve user experience. Your personal data will never be sold, shared, or disclosed to third parties, except as required by law or for site functionality (e.g., fraud prevention, security measures). By submitting a review, you agree that your feedback may be publicly displayed while keeping your personal details anonymous unless otherwise specified. We use cookies and analytics tools to track site performance and user interactions, which you
              can manage through your browser settings. For more details on how we handle data, please review our full Privacy Policy.</p>

            <p className='p-4 text-center text-amber-50'>©2018-2025 Investari. All Rights Reserved.</p>
          </div>

        </div>
</div>



      </section>



    </div>
  )
}

export default App
