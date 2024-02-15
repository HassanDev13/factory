import createClient from "../../utils/supabase/client";
import { Country } from "../../utils/types";
import { useQuery } from "react-query";

const getAllCountry = async () => {
  const client = createClient();
  const { data, error } = await client.from("country").select(`
      *
    `);
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export default function useGetAllCountries() {
  return useQuery<Country[]>("country", () => getAllCountry());
}
