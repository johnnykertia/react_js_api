import React from "react";
import { Col, Card, Row } from "react-bootstrap";

const Menus = ({ menu, masukKeranjang }) => {
  return (
      <Row>
        <Col className="mb-4">
          <Card className="shadow lebarkartu" onClick={() => masukKeranjang(menu)} >
            <Card.Img variant="top" src={"assets/images/" + menu.category.nama.toLowerCase() + "/" + menu.gambar} />
            <Card.Body>
              <Card.Title className="sizeName">{menu.nama}</Card.Title>
              <Card.Text>
                Rp : {menu.harga}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
  );
};

export default Menus;
