import axios from "axios";
import React, { Component } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { API_URL } from "../utils/constant";
import { Link } from "react-router-dom";

export default class TotalBayar extends Component {
  submitTotalBayar = (totalBayar) => {
    const pesanan = {
      total_bayar: totalBayar,
      menus: this.props.keranjangs,
    };

    axios.post(API_URL + "pesanans", pesanan).then((res) => {
      this.props.history.push("/sukses");
    });
  };

  render() {
    const totalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);

    return (
      <>
        {/* Web */}
        <div className="container fixed-bottom d-none d-md-block ">
          <Row>
            <Col md={{ span: 3, offset: 9 }} className="px-3">
              <h4 className="mt-3 sizeTotal">
                Total Harga : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <strong className="float-right ml-5"> Rp. {totalBayar}</strong>
              </h4>
              <div className="d-grid gap-2 mb-2 mt-2 mr-4">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => this.submitTotalBayar(totalBayar)}
                  as={Link}
                  to="/sukses"
                  className="sizeTotal"
                >
                  BAYAR
                </Button>
              </div>
            </Col>
          </Row>
        </div>

        {/* Mobile  */}
        <div className="d-sm-block d-md-none">
          <Row>
            <Col md={{ span: 3, offset: 9 }} className="px-3">
              <h4 className="mt-3">
                Total Harga : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <strong className="float-right ml-5"> Rp. {totalBayar}</strong>
              </h4>
              <div className="d-grid gap-2 mb-2 mt-2 mr-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => this.submitTotalBayar(totalBayar)}
                  as={Link}
                  to="/sukses"
                >
                  BAYAR
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
