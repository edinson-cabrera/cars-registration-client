import Header from "../components/Headers/Header";
import { RefreshIcon } from "@heroicons/react/outline";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import carService from "../services/car.service";

function Car() {
  const navigate = useNavigate();
  const [car, setCar] = useState([]);
  const month = useRef(null);
  const vehicleMake = useRef(null);
  const fuelType = useRef(null);
  const vehicleType = useRef(null);
  const numberOfVehicles = useRef(null);
  const fetchCar = (id) => {
    carService.getCarById(id).then((response) => {
      console.log(response);
      setCar(response.data);
    });
  };

  let { id } = useParams();

  useEffect(() => {
    fetchCar(id);
  }, [id]);

  async function updateCar() {
    const carData = {
      month: month.current.value,
      make: vehicleMake.current.value,
      fuel_type: fuelType.current.value,
      vehicle_type: vehicleType.current.value,
      number: numberOfVehicles.current.value,
    };
    carService.updateCar(car.id, carData).then((res) => {
      console.log(res);
      console.log("La data del carro es: ", carData);
    });
    navigate("/");
  }

  return (
    <Header>
      <div className="grid sm:grid md:grid-cols-8 md:m-4 sm:grid-cols-3">
        <div className="col-span-1 md:flex items-center text-white">
          <div className="border-indigo-800 bg-cyan-600 rounded-md px-1.5 py-2">
            <p className="">Car Information</p>
          </div>
        </div>
        <div className=" md:col-span-7 sm:col-span-2 space-y-4">
          <div className="border-gray-600 bg-cyan-600  rounded-md shadow-md">
            <div className="mx-8 p-4 space-y-4">
              <div className="flex items-center">
                <label className="text-white mr-4">Month:</label>
                <input
                  id="month"
                  ref={(input) => {
                    if (input) {
                      input.value = car.month;
                    }
                    month.current = input;
                  }}
                  type="text"
                  name="month"
                  className="rounded-md shadow-md px-1.5 py-2 w-full focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="flex items-center">
                <label className="text-white mr-4">Make:</label>
                <input
                  id="make"
                  ref={(input) => {
                    if (input) {
                      input.value = car.make;
                    }
                    vehicleMake.current = input;
                  }}
                  type="text"
                  name="make"
                  className="rounded-md shadow-md px-1.5 py-2 w-full focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="flex items-center">
                <label className="text-white mr-4 whitespace-nowrap">
                  Fuel Type:
                </label>
                <input
                  id="fuelType"
                  ref={(input) => {
                    if (input) {
                      input.value = car.fuel_type;
                    }
                    fuelType.current = input;
                  }}
                  type="text"
                  name="fuelType"
                  className="rounded-md shadow-md px-1.5 py-2 w-full focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="flex items-center">
                <label className="text-white mr-4 whitespace-nowrap">
                  Vehicle Type:
                </label>
                <input
                  id="vehicleType"
                  ref={(input) => {
                    if (input) {
                      input.value = car.vehicle_type;
                    }
                    vehicleType.current = input;
                  }}
                  type="text"
                  name="vehicleType"
                  className="rounded-md shadow-md px-1.5 py-2 w-full focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="flex items-center">
                <label className="text-white mr-4">Number:</label>
                <input
                  id="number"
                  ref={(input) => {
                    if (input) {
                      input.value = car.number;
                    }
                    numberOfVehicles.current = input;
                  }}
                  type="text"
                  name="number"
                  className="rounded-md shadow-md px-1.5 py-2 w-full focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </div>
          <div className="text-right">
            <button
              onClick={updateCar}
              className="px-1.5 py-2 items-center inline-flex text-white bg-cyan-600 border-cyan-600 rounded-md shadow-md"
            >
              <RefreshIcon className="h-5 w-5 mr-1" /> Actualizar
            </button>
          </div>
        </div>
      </div>
    </Header>
  );
}

export default Car;
