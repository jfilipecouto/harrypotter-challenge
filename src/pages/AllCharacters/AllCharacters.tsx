import React, { useEffect, useState } from "react";
import CardCharacter from "../../components/molecules/CardCharacter/CardCharacter";
import { fetchCharacters } from "../../services/characters";
import { GenericCharacter } from "../../types/types";
import PaginatedList from "../../components/organisms/PaginatedList/PaginatedList";

const AllCharacters: React.FC = () => {
  const [characters, setCharacters] = useState<GenericCharacter[]>([]);

  const getCharacters = async () => {
    const character = await fetchCharacters();
    setCharacters(character);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <PaginatedList
      items={characters}
      pageSize={6}
      renderItem={(allCharacters) => (
        <CardCharacter character={allCharacters} />
      )}
    />
  );
};

export default AllCharacters;
