import axios from "axios";

const API_URL = "http://localhost:5000/api/advice";

export async function getAdvice() {
  const response = await axios.get(API_URL);
  return response.data;
}
