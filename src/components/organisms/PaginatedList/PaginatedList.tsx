import React, { useState } from "react";
import { Row, Col, Pagination } from "antd";

interface PaginatedListProps<T> {
  items: T[];
  pageSize?: number;
  renderItem: (item: T) => React.ReactNode;
}

const PaginatedList = <T,>({ items, pageSize = 6, renderItem }: PaginatedListProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedItems = items.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <Row gutter={[16, 16]}>
        {paginatedItems.map((item, index) => (
          <Col span={8} key={index}>
            {renderItem(item)}
          </Col>
        ))}
      </Row>
      <Row justify="center" style={{ marginBottom: 40, marginTop: 40 }}>
        <Pagination
          current={currentPage}
          total={items.length}
          pageSize={pageSize}
          onChange={onPageChange}
        />
      </Row>
    </>
  );
};

export default PaginatedList;
