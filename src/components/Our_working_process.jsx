import React from 'react'
import { BsDash } from "react-icons/bs";


function Our_working_process() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-10 md:flex-row">
        <h3 className="bg-[#B9FF66] p-2 rounded-md max-w-fit text-2xl font-medium">
          Our Working Process
        </h3>
        <p>
          Step-by-Step Guide to Achieving <br /> Your Business Goals
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5">
        <details className="p-7 border border-b-3 rounded-4xl flex flex-col gap-2.5">
          <summary className="list-none flex justify-between items-center font-bold">
            <div className="flex items-center  gap-2">
                <p className="text-2xl">01</p>
                <h2>Consultation</h2>
            </div>
            <div className="border rounded-full">
                <BsDash />
            </div>
          </summary>
          <p className="border-t-2 py-2.5">
            During the initial consultation, we will discuss your business goals
            and objectives, target audience, and current marketing efforts. This
            will allow us to understand your needs and tailor our services to
            best fit your requirements.
          </p>
        </details>

        <details className="p-7 border border-b-3 rounded-4xl flex flex-col gap-2.5">
          <summary className="list-none flex justify-between items-center font-bold">
            <div className="flex items-center  gap-2">
                <p className="text-2xl">02</p>
                <h2>Research and Strategy Development</h2>
            </div>
            <div className="border rounded-full">
                <BsDash />
            </div>
          </summary>
          <p className="border-t-2 py-2.5">
            During the initial consultation, we will discuss your business goals
            and objectives, target audience, and current marketing efforts. This
            will allow us to understand your needs and tailor our services to
            best fit your requirements.
          </p>
        </details>

        <details class="p-7 border border-b-3 rounded-4xl flex flex-col gap-2.5">
          <summary class="list-none flex justify-between items-center font-bold">
            <div className="flex items-center  gap-2">
                <p className="text-2xl">03</p>
                <h2>Implementation</h2>
            </div>
            <div className="border rounded-full">
                <BsDash />
            </div>
          </summary>
          <p className="border-t-2 py-2.5">
            During the initial consultation, we will discuss your business goals
            and objectives, target audience, and current marketing efforts. This
            will allow us to understand your needs and tailor our services to
            best fit your requirements.
          </p>
        </details>

        <details className="p-7 border border-b-3 rounded-4xl flex flex-col gap-2.5">
          <summary className="list-none flex justify-between items-center font-bold">
            <div className="flex items-center  gap-2">
                <p className="text-2xl">04</p>
                <h2>Monitoring and Optimization</h2>
            </div>
            <div className="border rounded-full">
                <BsDash />
            </div>
          </summary>
          <p className="border-t-2 py-2.5">
            During the initial consultation, we will discuss your business goals
            and objectives, target audience, and current marketing efforts. This
            will allow us to understand your needs and tailor our services to
            best fit your requirements.
          </p>
        </details>

        <details className="p-7 border border-b-3 rounded-4xl flex flex-col gap-2.5">
          <summary className="list-none flex justify-between items-center font-bold">
            <div className="flex items-center  gap-2">
                <p className="text-2xl">05</p>
                <h2>Reporting and Communication</h2>
            </div>
            <div className="border rounded-full">
                <BsDash />
            </div>
          </summary>
          <p className="border-t-2 py-2.5">
            During the initial consultation, we will discuss your business goals
            and objectives, target audience, and current marketing efforts. This
            will allow us to understand your needs and tailor our services to
            best fit your requirements.
          </p>
        </details>

        <details className="p-7 border border-b-3 rounded-4xl flex flex-col gap-2.5">
          <summary className="list-none flex justify-between items-center font-bold">
            <div className="flex items-center gap-2">
                <p className="text-2xl">06</p>
                <h2>Continual Improvement</h2>
            </div>
            <div className="border rounded-full">
                <BsDash />
            </div>
          </summary>
          <p className="border-t-2 py-2.5">
            During the initial consultation, we will discuss your business goals
            and objectives, target audience, and current marketing efforts. This
            will allow us to understand your needs and tailor our services to
            best fit your requirements.
          </p>
        </details>
      </div>
    </div>
  );
}

export default Our_working_process