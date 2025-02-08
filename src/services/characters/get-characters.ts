import axios from "axios";
import { GenericCharacter } from "../../types/types";



export const fetchCharacters = async (): Promise<GenericCharacter[]> => {
  try {
    const response = await axios.get(
      "https://hp-api.onrender.com/api/characters"
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar personagens:", error);
    throw error;
  }
};
