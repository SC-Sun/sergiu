import axios from "axios";

const getWork = async () => {
  const workUrl = "http://localhost:5000/work";
  return await axios.get(`${workUrl}`);
};

export default getWork;
