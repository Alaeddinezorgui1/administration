import React from "react";
import "./ProductCard.css";
import { IPCMaterial } from "../../utils/interfaces";

interface IProps {
  pc: IPCMaterial;
}
const ProductCard = (props: IProps) => {
  const discription = (): string => {
    return (
      props.pc.type +
      " " +
      props.pc.brand +
      " " +
      props.pc.specs.memory +
      " " +
      props.pc.specs.cores +
      " " +
      props.pc.specs.speed
    );
  };
  return (
    <div
      className="container-fluid bg-transparent my-4 p-3"
      style={{ position: "relative" }}
    >
      <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
        <div className="col hp">
          <div className="card h-100 shadow-sm">
            <a
              href="https://amzn.to/3qeS1Fe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://m.media-amazon.com/images/I/81gK08T6tYL._AC_SL1500_.jpg"
                className="card-img-top"
                alt="ASUS TUF FX505DT Gaming Laptop"
              />
            </a>
            <div className="label-top shadow-sm">
              <a
                className="text-white"
                href="https://amzn.to/3qeS1Fe"
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.pc.name}
              </a>
            </div>
            <div className="card-body">
              <div className="clearfix mb-3">
                <span className="float-start badge rounded-pill bg-success">
                  ${props.pc.price}
                </span>
                <span className="float-end">
                  <a
                    href="#"
                    className="small text-muted text-uppercase aff-link"
                  >
                    Reviews
                  </a>
                </span>
              </div>
              <h5 className="card-title">
                <a
                  href="https://amzn.to/3qeS1Fe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {discription()}
                </a>
              </h5>
              <div className="d-grid gap-2 my-4">
                <a href="#" className="btn btn-warning bold-btn">
                  Add to Cart
                </a>
              </div>
              <div className="clearfix mb-1">
                <span className="float-start">
                  <a href="#">
                    <i className="fas fa-question-circle"></i>
                  </a>
                </span>
                <span className="float-end">
                  <i className="far fa-heart" style={{ cursor: "pointer" }}></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
