import React from 'react'

function Nav_bar() {
  return (
    <div>
      <nav class="flex items-center justify-between my-10">
        <div>
          <img src="public/assets/img/logo.png" alt="" class="w-54.75" />
        </div>

        <div class="hidden md:flex items-center gap-10">
          <ul class="flex gap-10">
            <li>About us</li>
            <li>Services</li>
            <li>Use Cases</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>

          <a href="">
            <button class="border p-2.5 rounded-xl">Request a quote</button>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Nav_bar