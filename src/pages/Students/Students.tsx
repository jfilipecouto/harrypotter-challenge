import React, { useEffect, useState } from "react";
import { fetchStudents } from "../../services";
import { Students as StudentsInterface } from "../../services";
import CardCharacter from "../../components/molecules/CardCharacter/CardCharacter";
import PaginatedList from "../../components/organisms/PaginatedList/PaginatedList";

const Students: React.FC = () => {
  const [studentsCharacters, setStudentsCharacters] = useState<
    StudentsInterface[]
  >([]);

  const getStudents = async () => {
    const students = await fetchStudents();
    setStudentsCharacters(students);
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <PaginatedList
      items={studentsCharacters}
      pageSize={6}
      renderItem={(studentCharacter) => (
        <CardCharacter character={studentCharacter} />
      )}
    />
  );
};

export default Students;
