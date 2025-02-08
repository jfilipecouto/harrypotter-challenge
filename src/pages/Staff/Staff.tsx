import React, { useEffect, useState } from "react";
import CardCharacter from "../../components/molecules/CardCharacter/CardCharacter";
import { fetchStaffCharacters } from "../../services/staff";
import { GenericCharacter } from "../../types/types";
import PaginatedList from "../../components/organisms/PaginatedList/PaginatedList";

const Staff: React.FC = () => {
  const [characters, setCharacters] = useState<GenericCharacter[]>([]);

  const getCharacters = async () => {
    const character = await fetchStaffCharacters();
    setCharacters(character);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <PaginatedList
      items={characters}
      pageSize={6}
      renderItem={(character) => <CardCharacter character={character} />}
    />
  );
};

export default Staff;
