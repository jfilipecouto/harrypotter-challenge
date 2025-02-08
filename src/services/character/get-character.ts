import axios from "axios";
import { GenericCharacter } from "../../types/types";



export const fetchCharacter = async (id: string): Promise<GenericCharacter[]> => {
  try {
    const response = await axios.get(
      `https://hp-api.onrender.com/api/character/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};
