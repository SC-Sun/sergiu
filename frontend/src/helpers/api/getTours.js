import axios from "axios";

const getTours = async () => {
  const toursUrl = "http://localhost:5000/tours";
  return await axios.get(`${toursUrl}`);
};

export default getTours;
