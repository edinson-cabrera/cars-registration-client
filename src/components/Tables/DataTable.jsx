import { Link } from "react-router-dom";
import { TrashIcon, PencilIcon } from "@heroicons/react/outline";
import carService from "../../services/car.service";
import { useNavigate } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DataTable({ cars }) {
  const navigate = useNavigate();

  function refreshPage() {
    window.location.reload(false);
  }

  async function deleteCar(id) {
    carService.deleteCar(id).then(() => {
      carService.getAllCars(id);
    });
    refreshPage();
  }

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Cars</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the cars in the database including their month, make,
            fuel type vehicle type and number.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link to="/create">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Add Car
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="shadow-sm ring-1 ring-black ring-opacity-5">
              <table
                className="min-w-full border-separate"
                style={{ borderSpacing: 0 }}
              >
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                    >
                      Moth
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                    >
                      Vehicle Make
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                    >
                      Fuel Type
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Vehicle Type
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Numbers (No. of vehicles)
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                    >
                      <span>Edit</span>
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                    >
                      <span>Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {cars.map((car, carIdx) => (
                    <tr key={car.id}>
                      <td
                        className={classNames(
                          carIdx !== car.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                        )}
                      >
                        {car.month}
                      </td>
                      <td
                        className={classNames(
                          carIdx !== car.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell"
                        )}
                      >
                        {car.make}
                      </td>
                      <td
                        className={classNames(
                          carIdx !== car.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell"
                        )}
                      >
                        {car.fuel_type}
                      </td>
                      <td
                        className={classNames(
                          carIdx !== car.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                        )}
                      >
                        {car.vehicle_type}
                      </td>
                      <td
                        className={classNames(
                          carIdx !== car.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                        )}
                      >
                        {car.number}
                      </td>
                      <td
                        className={classNames(
                          carIdx !== car.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "relative whitespace-nowrap py-4 pr-4 pl-3 text-center text-sm font-medium sm:pr-6 lg:pr-8"
                        )}
                      >
                        <button
                          onClick={() => navigate(`/car/${car.id}`)}
                          type="button"
                          className="rounded-full  items-center text-center bg-gray-300 text-indigo-500 h-8 w-8 "
                        >
                          <PencilIcon className="inline-block h-5 w-5 " />
                        </button>
                      </td>
                      <td
                        className={classNames(
                          carIdx !== car.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "relative whitespace-nowrap py-4 pr-4 pl-3 text-center text-sm font-medium sm:pr-6 lg:pr-8"
                        )}
                      >
                        <button
                          onClick={() => deleteCar(car.id)}
                          className="text-indigo-600 rounded-full bg-gray-300 h-8 w-8 hover:text-indigo-900"
                        >
                          <TrashIcon className="inline-block h-5 w-5 text-red-500" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
