import axios from "axios";

const getBio = async () => {
  const bioUrl = "http://localhost:5000/bio";
  return await axios.get(`${bioUrl}`);
};

export default getBio;
