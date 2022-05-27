import React from "react";
import BucketGirl from "../../Assets/Images/bucketgirl.png";
const Landing = () => {
  return (
    <>
      <div class="hero h-screen lg:h-[65vh] bg-accent mt-16">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div>
            <p
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="text-xl"
            >
              Best Quality
            </p>
            <h1
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="900"
              class="text-5xl font-bold"
            >
              Professional Cleaning Service
            </h1>
            <p
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="800"
              class="py-6 max-w-xl"
            >
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              data-aos="zoom-in"
              data-aos-delay="1200"
              class="btn btn-primary"
            >
              Get Started
            </button>
          </div>
          <div className="h-[65vh]">
            <img src={BucketGirl} class="h-full shrink-0" alt="" />
          </div>
        </div>
      </div>
      <div className="rounded-2xl mx-auto mt-[-50px] w-5/6 z-20 bg-base-200 relative shadow-lg p-10">
        <h1 className="text-3xl mb-5">Get Free Estimate</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />

          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />

          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />

          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />

          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />

          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />

          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />

          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
        </div>
        <button className="btn btn-primary mt-5">REQUEST A QUITE</button>
      </div>
    </>
  );
};

export default Landing;
