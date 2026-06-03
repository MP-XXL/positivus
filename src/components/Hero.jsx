import React from "react";

function Hero() {
  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row justify-between">
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl font-bold">
            Navigating the <br /> digital landscape <br /> for success
          </h1>
          <p>
            Our digital marketing agency helps businesses <br /> grow and
            succeed online through a range of <br /> services including SEO,
            PPC, social media marketing, <br /> and content creation.
          </p>
          <a href="">
            <button className="bg-black text-white p-2.5 rounded-xl">
              Book a consultation
            </button>
          </a>
        </div>
        <div>
          <img src="/assets/img/Illustration.png" alt="" className="w-150" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 py-10 md:grid-cols-3 lg:grid-cols-6">
        <div><img src="/assets/img/amazon.png" alt="" /></div>
        <div><img src="/assets/img/dribble.png" alt="" /></div>
        <div><img src="/assets/img/hubspot.png" alt="" /></div>
        <div><img src="/assets/img/notion.png" alt="" /></div>
        <div><img src="/assets/img/netflix.png" alt="" /></div>
        <div><img src="/assets/img/zoom.png" alt="" /></div>
      </div>
    </div>
  );
}

export default Hero;
