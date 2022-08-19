import { Component } from "react";
import { Row, Col, ListGroup, Badge, Card } from "react-bootstrap";
import ModalKeranjang from "./ModalKeranjang";
import TotalBayar from "./TotalBayar";
import { API_URL } from "../utils/constant";
import axios from "axios";
import swal from "sweetalert";

export default class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      keranjangDetail: false,
      jumlah: 0,
      keterangan: "",
      totalHarga: 0,
    };
  }

  handleShow = (menukeranjang) => {
    this.setState({
      showModal: true,
      keranjangDetail: menukeranjang,
      jumlah: menukeranjang.jumlah,
      keterangan: menukeranjang.keterangan,
      totalHarga: menukeranjang.total_harga,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  tambah = () => {
    this.setState({
      jumlah: this.state.jumlah + 1,
      totalHarga:
        this.state.keranjangDetail.product.harga * (this.state.jumlah + 1),
    });
  };

  kurang = () => {
    if (this.state.jumlah !== 1) {
      this.setState({
        jumlah: this.state.jumlah - 1,
        totalHarga:
          this.state.keranjangDetail.product.harga * (this.state.jumlah - 1),
      });
    }
  };

  changeHandler = (event) => {
    this.setState({
      keterangan: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.handleClose();

    const data = {
      jumlah: this.state.jumlah,
      total_harga: this.state.totalHarga,
      product: this.state.keranjangDetail.product,
      keterangan: this.state.keterangan,
    };

    axios
      .put(API_URL + "keranjangs/" + this.state.keranjangDetail.id, data)
      .then((res) => {
        swal({
          title: "Update Pesanan",
          text: "Sukses Update " + data.product.nama,
          icon: "success",
          button: false,
          timer: 1300,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  hapusPesanan = (id) => {
    this.handleClose();

    axios
      .delete(API_URL + "keranjangs/" + id)
      .then((res) => {
        swal({
          title: "Hapus Pesanan",
          text: "Sukses Hapus " + this.state.keranjangDetail.product.nama,
          icon: "error",
          button: false,
          timer: 1300,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { keranjangs } = this.props;
    return (
      <Col md={3} mt="2" className="text-start result">
        <h5 className="mt-3"><strong>Hasil Pesanan</strong></h5>
        <hr />
        {keranjangs.length !== 0 && (
          <Card className="overflow-auto hasil">
            <ListGroup>
              {keranjangs.map((menukeranjang) => (
                <ListGroup.Item
                  key={menukeranjang.id}
                  onClick={() => this.handleShow(menukeranjang)}
                >
                  <Row>
                    <Col xs={2}>
                      <Badge pill variant="success">
                        {menukeranjang.jumlah}
                      </Badge>
                    </Col>
                    <Col ml={0}>
                      {menukeranjang.product.nama}
                      <p>Rp. {menukeranjang.product.harga}</p>
                    </Col>
                    <Col>{menukeranjang.total_harga}</Col>
                  </Row>
                </ListGroup.Item>
              ))}

              <ModalKeranjang
                handleClose={this.handleClose}
                {...this.state}
                tambah={this.tambah}
                kurang={this.kurang}
                changeHandler={this.changeHandler}
                handleSubmit={this.handleSubmit}
                hapusPesanan={this.hapusPesanan}
              />
            </ListGroup>
          </Card>
        )}
        <TotalBayar keranjangs={keranjangs} {...this.props} />
      </Col>
    );
  }
}
