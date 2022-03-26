import Header from "../components/Headers/Header";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";
function Create() {
  return (
    <div className="h-screen bg-gray-100">
      <Header>
        <div className="">
          <div className="py-10">
            <div>
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                {/* Replace with your content */}
                <div className="bg-white p-8 shadow-md rounded-md">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900">
                      Creating a new Car
                    </h1>
                    <p className="text-gray-600">Create a new car</p>
                  </div>
                  <form>
                    <div className="space-y-5 mt-5">
                      <div className="flex items-center">
                        <label className="mr-3 ">Month: </label>
                        <input
                          type="text"
                          name="month"
                          id="month"
                          className="shadow-sm rounded-md py-1.5 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                          placeholder="10/20"
                        />
                      </div>

                      <div className="flex items-center">
                        <label className="mr-3">Make: </label>
                        <input
                          type="text"
                          name="make"
                          id="make"
                          className="shadow-sm rounded-md py-1.5 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                          placeholder="ALPINA"
                        />
                      </div>

                      <div className="flex items-center">
                        <label className="mr-3 whitespace-nowrap">
                          Fuel Type:{" "}
                        </label>
                        <input
                          type="text"
                          name="fuelType"
                          id="fuelType"
                          className="shadow-sm rounded-md py-1.5 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                          placeholder="Petrol"
                        />
                      </div>

                      <div className="flex items-center">
                        <label className="mr-3 whitespace-nowrap">
                          Vehicle Type:{" "}
                        </label>{" "}
                        <input
                          type="text"
                          name="vehicleType"
                          id="vehicleType"
                          className="shadow-sm rounded-md py-1.5 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                          placeholder="Hatchback"
                        />
                      </div>

                      <div className="flex items-center">
                        <label className="mr-3">Number: </label>{" "}
                        <input
                          type="text"
                          name="number"
                          id="number"
                          className="shadow-sm rounded-md py-1.5 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                          placeholder="0"
                        />
                      </div>
                    </div>
                    <div className="text-right">
                      <button
                        type="submit"
                        className="bg-indigo-500 text-white rounded-md px-4 py-2 mt-5"
                        onClick={() => {}}
                      >
                        <div className="flex items-center">
                          <ArrowCircleRightIcon className="h-5 w-5 mr-2" />
                          <p>Enviar</p>
                        </div>
                      </button>
                    </div>
                  </form>
                </div>

                {/* /End replace */}
              </div>
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
}

export default Create;
