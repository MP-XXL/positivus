import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { RiShining2Fill } from "react-icons/ri";


function Testimonials() {
  return (
    <div className="flex flex-col gap-10 py-10">
      <div class="flex flex-col gap-10 md:flex-row">
        <h3 class="bg-[#B9FF66] p-2 rounded-md max-w-fit text-2xl font-medium">
          Testimonials
        </h3>
        <p>
          Hear from Our Satisfied Clients: Read Our Testimonials <br /> to Learn
          More about Our Digital Marketing Services
        </p>
      </div>

      <div className="bg-[#191A23] flex flex-col gap-5 text-xs rounded-4xl py-10 overflow-x-hidden">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div>
            <div className="mb-5">
              <img src="/assets/img/Bubble.png" alt="" />
            </div>
            <div className="ml-10">
                <h3 className="text-[#B9FF66] font-bold">John Smith</h3>
                <p className="text-white">Marketing Director at XYZ Corp</p>
            </div>
          </div>

          <div>
            <div className="mb-5">
              <img src="/assets/img/Bubble.png" alt="" />
            </div>
            <div className="ml-10">
                <h3 className="text-[#B9FF66] font-bold">John Smith</h3>
                <p className="text-white">Marketing Director at XYZ Corp</p>
            </div>
          </div>

          <div>
            <div className="mb-5">
              <img src="/assets/img/Bubble.png" alt="" />
            </div>
            <div className="ml-10">
                <h3 className="text-[#B9FF66] font-bold">John Smith</h3>
                <p className="text-white">Marketing Director at XYZ Corp</p>
            </div>
          </div>
        </div>

        <div className="text-white text-xl flex gap-5 justify-center">
            <FaArrowLeft />
            <div className="flex gap-2.5">
                <RiShining2Fill />
                <RiShining2Fill />
                <RiShining2Fill />
                <RiShining2Fill />
                <RiShining2Fill />

            </div>
            <FaArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Testimonials