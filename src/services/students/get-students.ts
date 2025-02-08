import axios from "axios";
import { Students } from './get-students.d'



export const fetchStudents = async (): Promise<Students[]> => {
  try {
    const response = await axios.get(
      "https://hp-api.onrender.com/api/characters/students"
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar personagens:", error);
    throw error;
  }
};
