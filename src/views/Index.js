import Header from "../components/Headers/Header";
import DataTable from "../components/Tables/DataTable";
import { useEffect, useState } from "react";
import carService from "../services/car.service";
import Pagination from "../components/Tables/Pagination";
function Index() {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(10);
  const fetchData = () => {
    carService.getAllCars().then((response) => setCars(response.data));
  };

  const indexOfLastPost = currentPage * carsPerPage;
  const indexOfFirstPost = indexOfLastPost - carsPerPage;
  const currentCars = cars.slice(indexOfFirstPost, indexOfLastPost);

  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" h-full bg-gray-100 ">
      <Header>
        <div className="py-10">
          <div>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <DataTable cars={currentCars} />
              <Pagination
                carsPerPage={carsPerPage}
                totalCars={cars.length}
                paginateBack={paginateBack}
                paginateFront={paginateFront}
                currentPage={currentPage}
              />
              {/* /End replace */}
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
}

export default Index;
