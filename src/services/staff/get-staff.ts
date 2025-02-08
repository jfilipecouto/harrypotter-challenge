import axios from "axios";
import { GenericCharacter } from "../../types/types";



export const fetchStaffCharacters = async (): Promise<GenericCharacter[]> => {
  try {
    const response = await axios.get(
      "https://hp-api.onrender.com/api/characters/staff"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};
