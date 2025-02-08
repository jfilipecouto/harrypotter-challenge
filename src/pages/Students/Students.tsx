import React, { useEffect, useState } from "react";
import { fetchStudents } from "../../services";
import { Students as StudentsInterface } from "../../services";
import { Col, Pagination, Row } from "antd";
import CardCharacter from "../../components/molecules/CardCharacter/CardCharacter";


const Students: React.FC = () => {
  const [studentsCharacters, setStudentsCharacters] = useState<
    StudentsInterface[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getStudents = async () => {
    const students = await fetchStudents();
    setStudentsCharacters(students);
  };

  useEffect(() => {
    getStudents();
  }, []);

  const paginatedStudents = studentsCharacters.slice(
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
          total={studentsCharacters.length}
          pageSize={pageSize}
          onChange={onPageChange}
          style={{ marginTop: "20px", textAlign: "center" }}
        />
      </Row>
    </>
  );
};

export default Students;
