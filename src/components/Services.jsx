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
        <div><img src="public/assets/img/seo.png" alt="" /></div>
        <div><img src="public/assets/img/ppAd.png" alt="" /></div>
        <div><img src="public/assets/img/smm.png" alt="" /></div>
        <div><img src="public/assets/img/em.png" alt="" /></div>
        <div><img src="public/assets/img/cc.png" alt="" /></div>
        <div><img src="public/assets/img/ant.png" alt="" /></div>
      </div>
    </div>
  );
}

export default Services