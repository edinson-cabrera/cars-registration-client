import Header from "../components/Headers/Header";

function Car() {
  return (
    <Header>
      <div className="grid sm:grid md:grid-cols-8 md:m-4 sm:grid-cols-3">
        <div className="col-span-1 md:flex items-center text-white">
          <div className="border-indigo-800 bg-cyan-600 rounded-md px-1.5 py-2">
            <p className="">Car Information</p>
          </div>
        </div>
        <div className=" md:col-span-7 sm:col-span-2">
          <div className="border-gray-600 bg-cyan-600  rounded-md shadow-md">
            <div className="mx-8 p-4 space-y-4">
              <div>
                <label className="text-white mr-4">Month:</label>
                <input
                  id="month"
                  type="text"
                  name="month"
                  className="rounded-md shadow-md px-1.5 py-2 w-full inline-flex focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="text-white mr-4">Make:</label>
                <input />
              </div>
              <div>
                <label className="text-white mr-4">Fuel Type:</label>
                <input />
              </div>
              <div>
                <label className="text-white mr-4">Vehicle Type:</label>
                <input />
              </div>
              <div>
                <label className="text-white mr-4">Number:</label>
                <input />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
}

export default Car;
