import React from 'react'

function Nav_bar() {
  return (
    <div>
      <nav className="flex items-center justify-between my-10">
        <div>
          <img src="/assets/img/logo.png" alt="" className="w-54.75" />
        </div>

        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-10">
            <li><a href="">About us</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Use Cases</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Blog</a></li>
          </ul>

          <a href="">
            <button className="border p-2.5 rounded-xl">Request a quote</button>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Nav_bar