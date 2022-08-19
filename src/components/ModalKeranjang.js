import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const ModalKeranjang = ({
  showModal,
  handleClose,
  keranjangDetail,
  jumlah,
  keterangan,
  tambah,
  kurang,
  changeHandler,
  handleSubmit,
  totalHarga,
  hapusPesanan,
}) => {
  if (keranjangDetail) {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {keranjangDetail.product.nama}
            <strong> Rp. {keranjangDetail.product.harga}</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Total Harga :</Form.Label>
              <p>
                <strong>Rp. {totalHarga}</strong>
              </p>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Jumlah :</Form.Label>
              <p>
                <Button
                  variant="primary"
                  size="sm"
                  className="mr-4"
                  onClick={() => kurang()}
                >
                  -
                </Button>
                <strong> {jumlah} </strong>
                <Button
                  variant="primary"
                  size="sm"
                  className="ml-4"
                  onClick={() => tambah()}
                >
                  +
                </Button>
              </p>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Keterangan</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="keterangan"
                value={keterangan}
                onChange={(event) => changeHandler(event)}
              />
            </Form.Group>
            <br />
            <div className="text-end">
              <Button
                variant="danger"
                onClick={() => {
                  hapusPesanan(keranjangDetail.id);
                }}
              >
                Hapus Pesanan
              </Button>
              &nbsp; &nbsp;
              <Button variant="primary" type="submit">
                Simpan
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    );
  } else {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Kosong</Modal.Title>
        </Modal.Header>
        <Modal.Body>Kosong</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

export default ModalKeranjang;
