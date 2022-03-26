import http from "./http-common";

class CarService {
  getAllCars() {
    return http.get("/cars");
  }
  createCar(data) {
    return http.post("/cars", data);
  }
  updateCar(id, data) {
    return http.put(`/cars/${id}`, data);
  }
  deleteCar(id) {
    return http.delete(`/cars/${id}`);
  }
}

export default new CarService();
