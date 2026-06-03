import React from 'react'

function Contact_us() {
  return (
    <div className="flex flex-col gap-10 py-10">
      <div className="flex flex-col gap-10 md:flex-row">
        <h3 className="bg-[#B9FF66] p-2 rounded-md max-w-fit text-2xl font-medium">
          Contact Us
        </h3>
        <p>
          Connect with Us: Let's Discuss <br /> Your Digital Marketing Needs
        </p>
      </div>

      <div className="bg-[#F3F3F3] p-5 rounded-4xl relative md:flex md:p-16 ">
        <form action="" className="flex flex-col gap-5 z-50 md:w-125">
          <div className="flex gap-5">
            <div className="flex items-center gap-2.5">
              <input type="radio" name="yesorno" id="" />
              <label htmlFor="">Say Hi</label>
            </div>

            <div className="flex items-center gap-2.5">
              <input type="radio" name="yesorno" id="" />
              <label htmlFor="">Get a Quote</label>
            </div>
          </div>

          <div className="flex flex-col gap-2.0">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Name" className="border bg-white p-2.5 rounded-md" />
          </div>

          <div className="flex flex-col gap-2.0">
            <label htmlFor="">Email*</label>
            <input type="email" placeholder="Email" className="border bg-white p-2.5 rounded-md" />
          </div>

          <div className="flex flex-col gap-2.0">
            <label htmlFor="">Message</label>
            <textarea name="" id="" placeholder="Message" className="border bg-white p-2.5 rounded-md"></textarea>
          </div>

           <a href="">
            <button className="bg-black text-white p-2.5 rounded-xl w-full">
              Send Message
            </button>
          </a>
        </form>

        <div className="hidden md:block md:absolute -right-52">
            <img src="/assets/img/star.png" alt="" className="md:w-110" />
        </div>
      </div>
    </div>
  );
}

export default Contact_us