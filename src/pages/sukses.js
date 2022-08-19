import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../utils/constant";

export default class Sukses extends Component {
  componentDidMount() {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        keranjangs.map(function (item) {
          return axios
            .delete(API_URL + "keranjangs/" + item.id)
            .then((res) => console.log(res))
            .catch((error) => 
              console.log(error)); 
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="text-center mt-3">
        <Image src={"../assets/images/kartun/k01.png"} width="300px" />
        <h4>
          <strong>Sukses</strong>
        </h4>
        <p>Terimakasih telah belanja</p>
        <Button variant="primary" as={Link} to="/product">
          {" "}
          Kembali{" "}
        </Button>
      </div>
    );
  }
}
