import React, { useEffect, useState } from "react";
import { Col, Pagination, Row } from "antd";
import CardCharacter from "../../components/molecules/CardCharacter/CardCharacter";
import { fetchCharacters } from "../../services/characters";
import { GenericCharacter } from "../../types/types";


const AllCharacters: React.FC = () => {
  const [characters, setCharacters] = useState<
    GenericCharacter[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getCharacters = async () => {
    const character = await fetchCharacters();
    setCharacters(character);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const paginatedStudents = characters.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <Row gutter={[16, 16]}>
        {paginatedStudents.map((studentCharacter) => (
          <Col span={8} key={studentCharacter.id}>
            <CardCharacter character={studentCharacter} />
          </Col>
        ))}
      </Row>
      <Row justify="center" style={{ marginBottom: 40, marginTop: 40 }}>
        <Pagination
          current={currentPage}
          total={characters.length}
          pageSize={pageSize}
          onChange={onPageChange}
          style={{ marginTop: "20px", textAlign: "center" }}
        />
      </Row>
    </>
  );
};

export default AllCharacters;
