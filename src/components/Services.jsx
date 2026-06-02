import React from 'react'

function Services() {
  return (
    <div class="py-10">
      <div class="flex flex-col gap-10 md:flex-row">
        <h3 class="bg-[#B9FF66] p-2 rounded-md max-w-fit text-2xl font-medium">Services</h3>
        <p>
          At our digital marketing agency, we offer a range of services to <br /> help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 my-10">
        <div> <a href=""><img src="public/assets/img/seo.png" alt="" /></a></div>
        <div> <a href=""><img src="public/assets/img/ppAd.png" alt="" /></a></div>
        <div> <a href=""><img src="public/assets/img/smm.png" alt="" /></a></div>
        <div> <a href=""><img src="public/assets/img/em.png" alt="" /></a></div>
        <div> <a href=""><img src="public/assets/img/cc.png" alt="" /></a></div>
        <div> <a href=""><img src="public/assets/img/ant.png" alt="" /></a></div>
      </div>

      <div class="bg-[#F3F3F3] rounded-4xl relative flex flex-col gap-5 items-center md:flex-row">
        <div class=" flex flex-col gap-5 p-10 ">
            <h3>Let’s make things happen</h3>
            <p class="text-sm">
                Contact us today to learn more about how our digital <br /> marketing services can help your business grow and succeed online.
            </p>
            <a href="">
                <button class="bg-black text-white p-3 rounded-xl">Get your free proposal</button>
            </a>
        </div>
        <div class="md:absolute right-28">
            <img class="w-60" src="public/assets/img/propImg.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Services