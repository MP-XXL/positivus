import React from 'react'

function Team() {
  return (
    <div className="flex flex-col gap-16 my-20">
      <div className="flex flex-col gap-10 md:flex-row">
        <h3 className="bg-[#B9FF66] p-2 rounded-md max-w-fit text-2xl font-medium">
          Team
        </h3>
        <p>
          Meet the skilled and experienced team behind our <br /> successful
          digital marketing strategies
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 text-sm md:grid-cols-2 lg:grid-cols-3">
        <div className="border border-b-5 p-5 rounded-4xl">
          <div className="flex items-start justify-between">
            <div className="flex items-end gap-3 pb-5">
              <div>
                <img
                  src="/assets/img/smith.png"
                  alt=""
                  className="w-20 h-20"
                />
              </div>
              <div>
                <h3 className="font-bold">John Smith</h3>
                <p>CEO and Founder</p>
              </div>
            </div>

            <div>
              <img src="/assets/img/linkedin.png" alt="" />
            </div>
          </div>

          <p className="border-t py-5">
            10+ years of experience in digital <br /> marketing. Expertise in
            SEO, PPC, <br /> and content strategy
          </p>
        </div>

        <div className="border border-b-5 p-5 rounded-4xl">
          <div className="flex items-start justify-between">
            <div className="flex items-end gap-3 pb-5">
              <div>
                <img
                  src="/assets/img/jane.png"
                  alt=""
                  className="w-20 h-20"
                />
              </div>
              <div>
                <h3 className="font-bold">Jane Doe</h3>
                <p>Director of Operations</p>
              </div>
            </div>

            <div>
              <img src="/assets/img/linkedin.png" alt="" />
            </div>
          </div>

          <p className="border-t py-5">
            7+ years of experience in project <br /> management and team
            leadership. <br /> Strong organizational and <br /> communication
            skills
          </p>
        </div>

        <div className="border border-b-5 p-5 rounded-4xl">
          <div className="flex items-start justify-between">
            <div className="flex items-end gap-3 pb-5">
              <div>
                <img
                  src="/assets/img/brown.png"
                  alt=""
                  className="w-20 h-20"
                />
              </div>
              <div>
                <h3 className="font-bold">Michael Brown</h3>
                <p>Senior SEO Specialist</p>
              </div>
            </div>

            <div>
              <img src="/assets/img/linkedin.png" alt="" />
            </div>
          </div>

          <p className="border-t py-5">
            5+ years of experience in SEO and <br /> content creation.
            Proficient in <br /> keyword research and on-page <br />{" "}
            optimization
          </p>
        </div>

        <div className="border border-b-5 p-5 rounded-4xl">
          <div className="flex items-start justify-between">
            <div className="flex items-end gap-3 pb-5">
              <div>
                <img
                  src="/assets/img/emily.png"
                  alt=""
                  className="w-20 h-20"
                />
              </div>
              <div>
                <h3 className="font-bold">Emily Johnson</h3>
                <p>PPC Manager</p>
              </div>
            </div>

            <div>
              <img src="/assets/img/linkedin.png" alt="" />
            </div>
          </div>

          <p className="border-t py-5">
            3+ years of experience in paid <br /> search advertising. Skilled in{" "}
            <br /> campaign management and <br /> performance analysis
          </p>
        </div>

        <div className="border border-b-5 p-5 rounded-4xl">
          <div className="flex items-start justify-between">
            <div className="flex items-end gap-3 pb-5">
              <div>
                <img
                  src="/assets/img/brian.png"
                  alt=""
                  className="w-20 h-20"
                />
              </div>
              <div>
                <h3 className="font-bold">Brian Williams</h3>
                <p>Social Media Specialist</p>
              </div>
            </div>

            <div>
              <img src="/assets/img/linkedin.png" alt="" />
            </div>
          </div>

          <p className="border-t py-5">
            4+ years of experience in social <br /> media marketing. Proficient
            in <br /> creating and scheduling content, <br /> analyzing metrics,
            and building <br /> engagement
          </p>
        </div>

        <div className="border border-b-5 p-5 rounded-4xl">
          <div className="flex items-start justify-between">
            <div className="flex items-end gap-3 pb-5">
              <div>
                <img
                  src="/assets/img/smith.png"
                  alt=""
                  className="w-20 h-20"
                />
              </div>
              <div>
                <h3 className="font-bold">Sarah Kim</h3>
                <p>Content Creator</p>
              </div>
            </div>

            <div>
              <img src="/assets/img/linkedin.png" alt="" />
            </div>
          </div>

          <p className="border-t py-5">
            2+ years of experience in writing <br /> and editing <br />
            Skilled in creating compelling, SEO- <br />
            optimized content for various <br /> industries
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team