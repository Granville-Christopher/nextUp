import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect, useRef } from 'react';


export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden md:pb-8 md:pt-24">


      <div className="absolute inset-0 bg-gradient-to-r from-slate-500 via-yellow-100 to-blue-300 opacity-20 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center p-4 md:p-8 max-w-4xl text-center">
        <h1 className="text-xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Elevate Your Productivity with{" "}
          <span className="text-blue-600">nextUp</span>
        </h1>

        <p className="text-xs md:text-xl text-gray-600 mb-10 max-w-2xl">
          Streamline your tasks and goals with our intuitive to-do app.
          Effortlessly create, prioritize, and manage your daily activities to
          enhance productivity and reduce chaos.
        </p>

        <div className="flex flex-row gap-4 md:mb-16 mb-8 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold md:py-3 md:px-8 rounded-lg shadow-md transition duration-300 flex items-center justify-center text-xs md:text-base w-full trialbtn px-2">
            <span className="">Start Your Free Trial</span>
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </button>
          <button className="bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 font-bold py-3 md:px-8 px-2 rounded-lg shadow-md transition duration-300 flex items-center justify-center text-xs md:text-base w-full trialbtn">
            <span className=""> Explore Features</span>
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </button>
        </div>

        <div className="relative w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden mt-6 md:mt-8">
          <img
            src="/image.png"
            alt="Product Dashboard Mockup"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-green-500"
        >
          <path d="M1.5 8.67v3.09c0 .755.459 1.417 1.125 1.638l8.25 2.75a2.25 2.25 0 0 0 2.25 0l8.25-2.75a1.5 1.5 0 0 0 1.125-1.638V8.67m-19.5 0A2.25 2.25 0 0 1 2.25 7.5h.375a2.25 2.25 0 0 1 2.25 2.25v.375m-3.75 0V7.5a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 21.75 7.5v.75m-18 0-.85-1.7a.75.75 0 0 1 .792-1.04l.982.551M1.5 8.67L2.25 7.5V5.25A2.25 2.25 0 0 1 4.5 3h15a2.25 2.25 0 0 1 2.25 2.25V7.5l.75 1.17m0 0A2.25 2.25 0 0 0 21.75 7.5m-.75 2.25h.375a2.25 2.25 0 0 0 2.25-2.25V7.5M10.702 4.394a1.517 1.517 0 0 0-.495-.446l-3.35-.918a1.5 1.5 0 0 0-1.222.25l-2.25 1.373A1.5 1.5 0 0 0 2.25 6.07v1.402m18 .018L21.75 7.5V5.25A2.25 2.25 0 0 0 19.5 3h-2.188A2.25 2.25 0 0 0 15 4.373L13.125 5.25M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12 4.5c.896 0 1.768.106 2.593.303a1.517 1.517 0 0 1-.495.446l-3.35.918a1.5 1.5 0 0 1-1.222-.25L8.75 5.539A1.5 1.5 0 0 1 9 6.07v1.402m-.037 4.792a1.5 1.5 0 0 0 .154.775l2.7 3.6a.75.75 0 0 0 1.137-.089l2.5-2.5a.75.75 0 0 0-1.06-1.06l-1.903 1.903-1.637-1.637a.75.75 0 0 0-.154-.775Z" />
        </svg>
      ),
      title: "Task Organization",
      description:
        "Create, edit, and delete tasks efficiently to streamline your daily workflow towards your goals.",
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-pink-500"
        >
          <path
            fillRule="evenodd"
            d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L12 4.56l-3.97 3.97a.75.75 0 0 1-1.06-1.06l4.5-4.5Z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 0 1 .75.75v16.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V3a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Prioritization Features",
      description:
        "Set due dates and categorize tasks to ensure you focus on what matters most and meet your deadlines confidently.",
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-orange-500"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.594 5.367c-.201.68-.962 1.04-1.633.757l-1.037-.463a1.125 1.125 0 0 1-.606-1.05V13.5c0-.687-.563-1.25-1.25-1.25H9.75c-.687 0-1.25.563-1.25 1.25v1.25c0 .687-.563 1.25-1.25 1.25H5.877c-.428 0-.829.213-1.061.574A8.25 8.25 0 0 1 2.25 10.5Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Timely Notifications",
      description:
        "Receive alerts for upcoming deadlines and overdue tasks to ensure you never miss an important commitment.",
    },
    {
      id: 4,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-red-500"
        >
          <path
            fillRule="evenodd"
            d="M3 3.75a.75.75 0 0 1 .75-.75h.9a.75.75 0 0 1 .75.75v17.5a.75.75 0 0 1-.75.75h-.9a.75.75 0 0 1-.75-.75V3.75Z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M7.72 4.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.44 12 7.72 5.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Insightful Analytics",
      description:
        "Monitor your progress with analytics that showcase completed tasks versus pending ones, helping you stay accountable.",
    },
    {
      id: 5,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-blue-500"
        >
          <path
            fillRule="evenodd"
            d="M12.963 2.05A9.75 9.75 0 0 0 12 21.75a.75.75 0 0 1-1.5 0 9.75 9.75 0 0 0-.963-19.699C9.421 2.07 10.5 2.25 12 2.25c1.5 0 2.579-.18 2.963-.2ZM12 2.25a.75.75 0 0 0-.75.75V6a.75.75 0 0 0 1.5 0V3a.75.75 0 0 0-.75-.75ZM6 5.25a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0V6a.75.75 0 0 0-.75-.75ZM18 5.25a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0V6a.75.75 0 0 0-.75-.75ZM3 10.5a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0V11.25A.75.75 0 0 0 3 10.5ZM21 10.5a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0V11.25A.75.75 0 0 0 21 10.5ZM4.5 15.75a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0V16.5a.75.75 0 0 0-.75-.75ZM19.5 15.75a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0V16.5a.75.75 0 0 0-.75-.75ZM9 19.5a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0V20.25a.75.75 0 0 0-.75-.75ZM15 19.5a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0V20.25a.75.75 0 0 0-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Goal Management",
      description:
        "Break down large projects into manageable tasks, making your ambitions achievable with structured steps.",
    },
    {
      id: 6,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-purple-500"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM12 18.75a4.5 4.5 0 0 0-4.5 4.5H16.5a4.5 4.5 0 0 0-4.5-4.5Z"
            clipRule="evenodd"
          />
          <path d="M12.75 12a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0V12ZM11.25 15a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z" />
        </svg>
      ),
      title: "Customizable Experience",
      description:
        "Enjoy a customizable interface with light and dark mode options to match your preferences and enhance usability.",
    },
  ];

  return (
    <section className="relative md:py-16 bg-gradient-to-b from-gray-100 via-slate-50 to-gray-50 overflow-hidden font-inter">
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-100 transform skew-x-[-15deg] origin-bottom-right -z-0 opacity-40 lg:w-[400px] lg:h-[400px]"></div>
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-yellow-200 transform skew-x-[20deg] origin-top-left -z-0 opacity-40 lg:w-[250px] lg:h-[250px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
        <p className="text-center text-blue-600 font-semibold text-xs md:text-sm mb-2 uppercase tracking-wide">
          How nextUp Works
        </p>

        <h2 className="text-center text-xl md:text-5xl font-extrabold text-gray-900 md:mb-12 mb-6 leading-tight">
          Master Task Management Effortlessly
        </h2>

        <p className="text-center text-sm md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          Experience the efficiency of nextUp, your ultimate productivity
          companion designed to simplify task management. Seamlessly navigate
          your daily responsibilities by creating, editing, and organizing your
          tasks in one intuitive platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center md:mb-6 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



export function ProductivitySection() {
  const features = [
    {
      id: 1,
      tag: 'Time Management',
      title: 'Personalized Task Organization',
      description: 'Customize your tasks with due dates and priorities, ensuring each action aligns with your goals and schedules.',
      bgColor: 'bg-red-500',
      textColor: 'text-white',
      tagBgColor: 'bg-black',
      tagColor: 'text-red-600',
      illustration: (
        <div className="flex justify-center items-center h-40 mb-4 shadow-lg">
          <img src="free-task-management.png" alt="Task Management Illustration" className="w-auto h-full object-contain" />
        </div>
      ),
    },
    {
      id: 2,
      tag: 'Intelligent Notifications',
      title: 'Timely Reminders for Every Deadline',
      description: 'Stay focused and on schedule with customizable reminders that ensure you never miss a deadline.',
      bgColor: 'bg-green-500',
      textColor: 'text-white',
      tagBgColor: 'bg-black',       
      tagColor: 'text-green-600',
      illustration: (
        <div className="flex justify-center items-center h-40 mb-4 shadow-lg">
          <img src="task-management-45png.png" alt="Notifications Illustration" className="w-auto h-full object-contain" />
        </div>
      ),
    },
    {
      id: 3,
      tag: 'Productivity Insights',
      title: 'Track Your Progress Effectively',
      description: 'Gain valuable insights into your productivity through analytical tools that track your progress and help you visualize your accomplishments.',
      bgColor: 'bg-yellow-500', 
      textColor: 'text-gray-800', 
      tagBgColor: 'bg-black', 
      tagColor: 'text-yellow-060',
      illustration: (
        <div className="flex justify-center items-center shadow-lg h-40 mb-4">
          <img src="task-management-4623webp.webp" alt="Progress Tracking Illustration" className="w-auto h-full object-contain" />
        </div>
      ),
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden font-inter">
      <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-blue-100 transform -skew-x-[20deg] origin-top-left opacity-30 -z-0 lg:w-[350px] lg:h-[350px]"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-blue-100 transform skew-x-[20deg] origin-bottom-right opacity-30 -z-0 lg:w-[350px] lg:h-[350px]"></div>

      <div className="max-w-7xl text-end mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <p className="bg-blue-50 rounded-lg w-1/2 text-center md:w-1/6 mx-auto shadow md:text-center text-blue-600 font-semibold text-xs md:text-sm mb-2 uppercase tracking-wide">
          Essential Features
        </p>

        <h2 className="text-center text-xl md:text-5xl font-extrabold text-gray-900 md:mb-12 mb-6 leading-tight">
          Optimize Your Productivity with <span className='text-blue-600'>nextUp</span>
        </h2>

        <p className="text-center text-sm md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          Experience unparalleled organization with nextUp, the smart to-do app designed to empower your productivity. Effortlessly manage your tasks by creating, prioritizing, and tracking them in an intuitive interface tailored for your unique needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`rounded-xl shadow-lg flex flex-col overflow-hidden ${feature.bgColor}`}
            >
              <div className="relative flex justify-center items-center p-6 md:p-8">
                {feature.illustration}
              </div>

              <div className={`p-6 md:p-8 ${feature.textColor} text-left flex-grow`}>
                <p className={`text-xs font-semibold mb-2 opacity-80 text-yellow-600  rounded-lg px-3 ${feature.tagBgColor} ${feature.tagColor}`} style={{width: "max-content"}}>
                  {feature.tag}
                </p>
                <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export function MaximizeProductivitySection() {
  const checkmarkIconSmall = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-600">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.052-.143Z" clipRule="evenodd" />
    </svg>
  );

  return (
    <section className="relative w-full  bg-gradient-to-b  min-h-screen overflow-hidden font-inter py-16 md:py-24">
      <div className="absolute top-0 left-0 w-full h-[300px] bg-yellow-300 transform -skew-y-3 origin-top-left -z-10 opacity-70"></div>
      <div className="absolute top-0 md:left-0 w-[400px] h-[2000px] bg-yellow-400 rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-10 -z-10"></div>

      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-yellow-300 transform skew-y-3 origin-bottom-left -z-10 opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[2500px] bg-yellow-400 rounded-full transform -translate-x-1/2 translate-y-1/2 opacity-10 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-gray-900">

        <div className="flex flex-col items-center text-center mb-20 md:mb-28">
          <p className="bg-blue-50 rounded-lg py-1 px-3 text-center md:w-1/6 mx-auto shadow md:text-center text-blue-600 font-semibold text-xs md:text-sm mb-2 uppercase tracking-wide">
            Key Features
          </p>
          <h2 className="text-xl md:text-6xl font-extrabold mb-6 leading-tight">
            Maximize Productivity with
            <br /> <span className="text-blue-600">nextUp</span>
          </h2>
          <p className="text-sm md:text-xl text-gray-700 max-w-3xl mx-auto">
           nextUp revolutionizes task management, providing you with a powerful
            platform to create, prioritize, and track your daily responsibilities
            effortlessly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-20 md:mb-28">
          <div className="lg:w-1/2 flex justify-center lg:justify-start mb-12 lg:mb-0 relative min-w-[300px] min-h-[300px] md:min-w-[400px] md:min-h-[300px] lg:min-w-[500px] lg:min-h-[400px]">
            <div className="absolute inset-x-0 bottom-0 mx-auto w-[90%] h-[90%] bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl z-0"></div>
            <img
              src="task-management-4223399-7.webp" 
              alt="Task Management Illustration"
              className="relative z-10 max-w-full h-auto rounded-xl transform -translate-y-4 -translate-x-4 md:-translate-y-16 md:-translate-x-4"
            />
          </div>

          <div className="lg:w-1/2 lg:pl-16 text-center lg:text-left">
            <h3 className="text-xl md:text-4xl font-bold mb-8 leading-tight">
              The Advantage of using <span className="text-blue-600">nextUp</span>
            </h3>
            <p className="text-base md:text-lg text-gray-700 mb-10">
              Streamline your workflow with advanced task prioritization, ensuring
              that you never miss a deadline and stay focused on what truly matters.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-x-8">
              <div className=" text-start">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-4 sm:mx-auto sm:mb-4 my-4">
                  <FontAwesomeIcon icon={faCalendarDays} className="text-orange-500 text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Customizable Notifications</h4>
                  <p className="text-gray-600 text-sm">
                    Stay on top of your deadlines with customizable reminders that ensure you never miss a deadline.
                  </p>
                </div>
              </div>

              <div className="text-start ">
                <div className="my-4 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 sm:mx-auto sm:mb-4">
                  <FontAwesomeIcon icon={faCalendarDays} className="text-orange-500 text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Goal Breakdown</h4>
                  <p className="text-gray-600 text-sm">
                    Simplify project planning by breaking large goals into manageable steps for better tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-between">
         
          <div className="lg:w-1/2 flex justify-center lg:justify-end relative min-w-[300px] min-h-[300px] md:min-w-[400px] md:min-h-[200px]">
            <div className="absolute inset-x-0 bottom-0 mx-auto w-[90%] h-[90%] bg-gradient-to-b from-yellow-400 via-yellow-100 to-yellow-400 rounded-xl z-0"></div>
            <img
              src="task-managempng.png" 
              alt="Feature Illustration"
              className="relative z-10 max-w-full h-auto rounded-xl transform -translate-y-4 translate-x-4 md:-translate-y-20 md:translate-x-4" 
            />
          </div>

          <div className="lg:w-1/2 lg:pl-16 text-center lg:text-left mb-12 lg:mb-0">
            <h3 className="text-xl my-4 md:text-4xl font-bold mb-8 leading-tight">
              Enhanced Features for Every User
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-x-8">
              <p className="flex items-center font-medium text-lg">
                {checkmarkIconSmall}
                <span className="ml-2">Comprehensive Task Management</span>
              </p>
              <p className="flex items-center font-medium text-lg">
                {checkmarkIconSmall}
                <span className="ml-2">Prioritization Tools</span>
              </p>
              <p className="flex items-center font-medium text-lg">
                {checkmarkIconSmall}
                <span className="ml-2">Progress Tracking Analytics</span>
              </p>
              <p className="flex items-center font-medium text-lg">
                {checkmarkIconSmall}
                <span className="ml-2">Flexible Deadline Reminders</span>
              </p>
            </div>
            <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 inline-flex items-center justify-center">
              Get Started
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


const CheckIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

// Inline SVG for ArrowRight icon
const ArrowRightIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);


// Define a reusable PricingCard component
const PricingCard = ({ plan, price, description, features, isFeatured = false }) => {
  return (
    <div className={`
      relative
      flex flex-col
      p-8
      rounded-2xl
      shadow-lg
      transition-all duration-300 ease-in-out
      border ${isFeatured ? 'bg-blue-600 text-white border-blue-600' : 'bg-blue-100 border-gray-200'}
      hover:shadow-xl
      h-full {/* Ensure cards take full height for consistent display in carousel */}
    `}>
      {isFeatured && (
        <span className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-semibold rounded-full uppercase tracking-wide">
          Most Popular
        </span>
      )}
      <h3 className={`text-2xl font-semibold mb-4 ${isFeatured ? 'text-white' : 'text-gray-900'}`}>
        {plan}
      </h3>
      <p className={`text-sm mb-6 ${isFeatured ? 'text-blue-200' : 'text-gray-600'}`}>
        {description}
      </p>
      <div className="flex items-baseline mb-6">
        <span className={`text-5xl font-bold ${isFeatured ? 'text-white' : 'text-gray-900'}`}>
          ${price}
        </span>
        <span className={`text-xl font-medium ml-2 ${isFeatured ? 'text-blue-200' : 'text-gray-600'}`}>
          per month
        </span>
      </div>
      <ul className="flex-grow space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            {isFeatured ? (
              <CheckIcon className="w-5 h-5 text-white mr-2 flex-shrink-0" />
            ) : (
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-3 flex-shrink-0"></span>
            )}
            <span className={`${isFeatured ? 'text-white' : 'text-gray-700'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <button className={`
        mt-auto
        flex items-center justify-center
        px-6 py-3
        rounded-xl
        font-medium
        transition-colors duration-300 ease-in-out
        ${isFeatured
          ? 'bg-white text-blue-600 hover:bg-gray-100'
          : 'bg-blue-600 text-white hover:bg-blue-700'
        }
      `}>
        {/* Choose Plan */}
        <span className="">Choose {plan}</span>
        <ArrowRightIcon className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
};

export function PricingSection() {
  const pricingPlans = [
    {
      plan: 'Basic Plan',
      price: 15,
      description: 'Ideal for individuals and small teams beginning their journey towards enhanced productivity.',
      features: [
        'All Core Task Management Tools',
        'Unlimited Projects & Tasks',
        'Basic Analytics & Reporting',
        'Standard Email Support',
        'Secure Cloud Storage (10GB)'
      ],
      isFeatured: false,
    },
    {
      plan: 'Professional',
      price: 29,
      description: 'Designed for growing teams needing advanced collaboration and insightful performance metrics.',
      features: [
        'Basic Plan',
        'Advanced Team Collaboration',
        'Customizable Workflows',
        'Priority Chat & Email Support',
        'Enhanced Security Features',
        'Dedicated Account Manager'
      ],
      isFeatured: true,
    },
    {
      plan: 'Enterprise',
      price: 70,
      description: 'Comprehensive solutions for large organizations requiring tailored support and robust features.',
      features: [
        'Professional Features',
        'Unlimited User Licenses',
        'Single Sign-On (SSO)',
        '24/7 Premium Phone Support',
        'On-Premise Deployment Options',
        'Custom Integrations & APIs',
        'Dedicated Technical Consultant'
      ],
      isFeatured: false,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Function to determine items per page based on screen width
  const getItemsPerPage = () => {
    if (window.innerWidth >= 1024) return 3; 
    if (window.innerWidth >= 768) return 2;  
    return 1; 
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      if (currentIndex > pricingPlans.length - itemsPerPage) {
        setCurrentIndex(Math.max(0, pricingPlans.length - itemsPerPage));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, itemsPerPage, pricingPlans.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, pricingPlans.length - itemsPerPage)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // Adjust scroll position when currentIndex changes
  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0]?.offsetWidth || 0;
      const gap = 0; // Corresponds to Tailwind's gap-x-8 (32px)
      carouselRef.current.scrollTo({
        left: currentIndex * (cardWidth + gap),
        behavior: 'smooth',
      });
    }
  }, [currentIndex, itemsPerPage]); // Dependency on itemsPerPage to re-calculate scroll if needed


  return (
    <div className="font-sans antialiased text-red-800 md:mt-16 bg-gray-50 min-h-screen">
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-white">
        <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full mb-4 inline-block">
          PRICING & PLANS
        </span>
        <h1 className="text-xl sm:text-5xl font-extrabold text-gray-900 mb-3 leading-tight">
          Choose Your <span className='text-blue-600'>nextUp</span> Plan
        </h1>
        <p className="max-w-3xl mx-auto text-xs md:text-xl mb-8 text-gray-600">
          Elevate your productivity with nextUp, the advanced task management application designed to help you stay organized and focused.
        </p>
      </section>

      {/* Pricing Cards Section (Custom Carousel) */}
      <section className="relative -mt-16 pb-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto relative">
          <div
            ref={carouselRef}
            className="flex overflow-hidden scroll-snap-x-mandatory"
            style={{ scrollBehavior: 'smooth' }}
          >
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4 pb-4" // Padding for gap
              >
                <PricingCard {...plan} />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-2 sm:px-0">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`
                p-2 rounded-full bg-white shadow-md text-gray-700
                transition-opacity duration-300
                ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}
              `}
            >
              <ArrowRightIcon className="w-6 h-6 transform rotate-180" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= pricingPlans.length - itemsPerPage}
              className={`
                p-2 rounded-full bg-white shadow-md text-gray-700
                transition-opacity duration-300
                ${currentIndex >= pricingPlans.length - itemsPerPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}
              `}
            >
              <ArrowRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-yellow-200 to-red-200 p-8 sm:p-12 rounded-2xl shadow-xl flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            Maximize Your Productivity with nextUp
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl">
            Revolutionize your task management with nextUp, an innovative app designed to help you organize, prioritize, and efficiently manage your to-do lists. Enjoy customizable reminders, intuitive categorizations, and advanced analytics to stay focused and on track.
          </p>
          <button className="flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-xl font-medium shadow-md hover:bg-blue-700 transition-colors duration-300 ease-in-out">
            Get Started
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
}
