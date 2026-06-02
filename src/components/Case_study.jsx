import React from 'react'
import { MdArrowOutward } from "react-icons/md"

function Case_study() {
  return (
    <div className="flex flex-col gap-8 my-14">
      <div class="flex flex-col gap-10 md:flex-row">
        <h3 class="bg-[#B9FF66] p-2 rounded-md max-w-fit text-2xl font-medium">
          Case Studies
        </h3>
        <p>
          Explore Real-Life Examples of Our Proven Digital Marketing <br /> Success through Our Case Studies
        </p>
      </div>

      <div className="bg-black rounded-4xl text-white text-sm grid grid-cols-1 gap-10 p-10 md:grid-cols-3">
        <div>
            <p>
                For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
            </p>
            <div>
                <a href="" className="flex items-center text-[#B9FF66]">Learn more   <MdArrowOutward /></a>
            </div>
        </div>
        <div className="border-t border-b md:px-10 md:border-l md:border-r md:border-b-0 md:border-t-0 ">
            <p className="py-5 md:py-0">
                For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
            </p>
            <div>
                <a href="" className="flex items-center text-[#B9FF66]">Learn more   <MdArrowOutward /></a>
            </div>
        </div>
        <div>
            <p>
                For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
            </p>
            <div>
                <a href="" className="flex items-center text-[#B9FF66]">Learn more   <MdArrowOutward /></a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Case_study