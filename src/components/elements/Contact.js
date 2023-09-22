import React from "react";


//chart
import WordChart from "./charts/WordChart";

function Contact() {
  return (
    <div class="w-full rounded-lg h-fit bg-text-color-secondary text-text-color-primary">
      <div class="flex w-full lg:flex-row flex-col">
        <div class="lg:w-5/12 w-full flex flex-col items-center justify-start bg-gradient-to-r from-bg-color-primary to-text-color-tertiary text-text-color-secondary lg:rounded-l-lg rounded-t-lg">
          <img
            src={require("../../data/users/profile.jpeg")}
            alt="mohammad bayatzadeh"
            class="w-[200px] h-[200px] rounded-3xl mt-8 border-2 border-solid border-white"
          />
          <p class="mt-2.5">Mohammad Bayatzadeh</p>
          <p class="mt-2.5">Front-End developer</p>
        </div>
        <div class="lg:w-7/12 w-full flex flex-col items-start justify-start py-4 px-8">
          <p class="font-bold">Information</p>
          <div class="mt-1">
            <span class="flex w-full h-px bg-text-color-primary mt-2"></span>
            <p class="font-bold">bio</p>
            <p>
              Self-studied Front-End developer with 2 year exprience with
              Reactjs, Nextjs frameworks.
            </p>
          </div>
          <div class="mt-1">
            <p class="font-bold">Contact Me</p>
            <span class="flex w-full h-px bg-text-color-primary mt-2"></span>
            <p class="font-bold">email</p>
            <p>mamadbayat777@gmail.com</p>
          </div>
          <div class="mt-1">
            <p class="font-bold">number</p>
            <p>+989368376614</p>
          </div>
        </div>
        <WordChart />
      </div>
    </div>
  );
}

export default Contact;
