const Pricing = () => {
  return (
    <section className="px-16 py-12 text-white">
      <div className="flex items-center mb-16 w-fit">
        <div className="w-2 h-10 bg-yellow-400 mr-3"></div>
        <h2 className="text-3xl font-bold">Our Pricing Plans</h2>
      </div>
      <div className="flex justify-around">
        <div className="h-[380px] bg-amber-700 w-[300px] flex flex-col items-center justify-around p-4">
          <h4 className="text-xl font-bold">Bronze Plan</h4>
          <div className="flex">
            <h2 className="text-4xl font-bold">$7.99</h2>
            <p className="mt-4">/month</p>
          </div>
          <hr className="w-full" />
          <div className="">
            <div className="flex gap-3 items-center">
              <span className="text-4xl">•</span>
              <p className="text-xl font-bold">No Ads</p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-4xl">•</span>
              <p className="text-xl font-bold">Unlimited Stream time</p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-4xl">•</span>
              <p className="text-xl font-bold">20 Monthly downloads</p>
            </div>
          </div>
          <button className="border-solid border-2 border-yellow-300 p-3 font-bold text-yellow-300">
            Choose Plan
          </button>
        </div>
        <div className="h-[380px] bg-yellow-400 w-[300px] flex flex-col items-center justify-around p-4">
          <h4 className="text-xl font-bold">Gold Plan</h4>
          <div className="flex">
            <h2 className="text-4xl font-bold">$12.99</h2>
            <p className="mt-4">/month</p>
          </div>
          <hr className="w-full" />
          <div className="">
            <div className="flex gap-3 items-center">
              <span className="text-4xl">•</span>
              <p className="text-xl font-bold">No Ads</p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-4xl">•</span>
              <p className="text-xl font-bold">Unlimited Stream time</p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-4xl">•</span>
              <p className="text-xl font-bold">100 Monthly downloads</p>
            </div>
          </div>
          <button className="border-solid border-2 border-yellow-300 p-3 font-bold text-yellow-300">
            Choose Plan
          </button>
        </div>
        <div className="h-[380px] bg-gray-500 w-[300px] flex flex-col items-center justify-around p-4">
          <h4 className="text-xl font-bold">Silver Plan</h4>
          <div className="flex">
            <h2 className="text-4xl font-bold">$9.99</h2>
            <p className="mt-4">/month</p>
          </div>
          <hr className="w-full" />
          <div className="">
            <div className="flex gap-3 items-center">
              <span className="text-4xl">•</span>
              <p className="text-xl font-bold">No Ads</p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-4xl">•</span>
              <p className="text-xl font-bold">Unlimited Stream time</p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-4xl">•</span>
              <p className="text-xl font-bold">50 Monthly downloads</p>
            </div>
          </div>
          <button className="border-solid border-2 border-yellow-300 p-3 font-bold text-yellow-300">
            Choose Plan
          </button>
        </div>
      </div>
      <div className="w-full h-[400px] ">

      </div>
    </section>
  );
};

export default Pricing;
