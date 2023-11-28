import React from "react";


//chart
import WordChart from "./charts/WordChart";

function Contact() {
  return (
    <div className="w-full mx-2 rounded-lg h-fit bg-text-color-secondary text-text-color-primary">
      <div className="flex w-full lg:flex-row flex-col">
        <div className="lg:w-5/12 w-full flex flex-col items-center justify-start bg-gradient-to-r from-bg-color-primary to-text-color-tertiary text-text-color-secondary lg:rounded-l-lg lg:rounded-tr-none rounded-t-lg">
          {/* <img
            src={require("../../data/users/profile.jpeg")}
            alt="mohammad bayatzadeh"
            className="w-[200px] h-[200px] rounded-3xl mt-8 border-2 border-solid border-white"
          /> */}
          <p className="mt-2.5">Mohammad Bayatzadeh</p>
          <p className="mt-2.5">Front-End developer</p>
        </div>
        <div className="lg:w-7/12 w-full flex flex-col items-start justify-start py-4 px-8">
          <p className="font-bold">Information</p>
          <div className="mt-1">
            <span className="flex w-full h-px bg-text-color-primary mt-2"></span>
            <p className="font-bold">bio</p>
            <p>
              Self-studied Front-End developer with 2 year exprience with
              Reactjs, Nextjs frameworks.
            </p>
          </div>
          <div className="mt-1">
            <p className="font-bold">Contact Me</p>
            <span className="flex w-full h-px bg-text-color-primary mt-2"></span>
            <p className="font-bold">email</p>
            <p>mamadbayat777@gmail.com</p>
          </div>
          <div className="mt-1">
            <p className="font-bold">number</p>
            <p>+989368376614</p>
          </div>
        </div>
        <WordChart />
      </div>
    </div>
  );
}

export default Contact;
