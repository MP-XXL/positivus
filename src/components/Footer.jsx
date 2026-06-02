import React from 'react'

function Footer() {
  return (
    <div className="bg-[#191A23] p-5 rounded-tl-4xl rounded-tr-4xl text-white flex flex-col gap-10">
      <div class="flex flex-col gap-5 items-center justify-between my-10 md:flex-row">
        <div>
          <img src="/assets/img/Logo-white.png" alt="" class="w-54.75" />
        </div>

        <div class="flex flex-col items-center justify-center gap-10 md:flex-row">
          <ul class="flex flex-col gap-3 md:flex-row md:gap-10">
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Use Cases</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>

          <div className="flex gap-8">
            <a href="">
              <img src="/assets/img/linked.png" alt="" />
            </a>
            <a href="">
              <img src="/assets/img/fb.png" alt="" />
            </a>
            <a href="">
              <img src="/assets/img/x.png" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex flex-col gap-2.5">
          <h3 className="bg-[#B9FF66] max-w-fit text-black rounded-md font-bold p-0.5">Contact us:</h3>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>
            Address: 1234 Main St <br />
            Moonstone City, Stardust State 12345
          </p>
        </div>

        <form action="" className="bg-[#292A32] p-5 rounded-md flex flex-col gap-2.5 md:flex-row">
          <div className="flex flex-col gap-2.0">
            <input type="email" placeholder="Email" className="border bg-[#292A32] p-2.5 rounded-md" />
          </div>

           <a href="">
            <button class="bg-black text-white p-2.5 rounded-xl w-full">
              Subscribe to news
            </button>
          </a>
        </form>
      </div>

      <div className="border-t border-white py-10">
        <p> &copy; 2023 Positivus. All Rights Reserved.</p>
        <a href="">Privacy Policy</a>
      </div>
    </div>
  );
}

export default Footer