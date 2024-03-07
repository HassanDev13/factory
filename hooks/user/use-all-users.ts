import { useQuery } from "react-query";
import axios from "../../utils/axios";
import { User } from "../../db/schema/users";


async function getAllUsers() : Promise<User[]> {
  const response = await axios.get("http://localhost:3000/api/users");
  return response.data;
}
export default function useGetAllUsers() {
  return useQuery<User[]>("users", () => getAllUsers());
}
