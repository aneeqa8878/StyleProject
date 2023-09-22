import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { accessories } from './AccessoriesData';

function ProductDetailsAccessories() {
    const [product, setProduct] = useState({});

    const params = useParams();
    useEffect(() => {
      const data = accessories.filter((selected) => selected.id == params.id);
      setProduct(data[0]);
    }, []);
  return (
    <div>
       <div className="container mt-2">
        <div className="row">
          <div className="col-lg-6 text-center">
            <img src={product.image} height="500px" width="500px" />
          </div>
          <div className="col-lg-4">
            <h2>{product.articleName}</h2>
            <small style={{ color: "darkslategrey" }}>
              Printed Embroidered Light Khaddar | Top Bottoms Dupatta
            </small>
            <p>
              <del>{product.originalPrice}</del>&nbsp; &nbsp;
              <ins style={{ color: "red" }}>{product.discountedPrice}</ins>{" "}
            </p>
            
            <small style={{ color: "darkslategrey" }}>
              Availability: <i style={{ color: "green" }}>In stock</i>
            </small>
            <br />
            <small style={{ color: "darkslategrey" }}>SKU: BLK22420</small>
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span class="minus">-</span>
            <span class="num">1</span>
            <span class="plus">+</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" class="button">
              <b> + Add to Cart </b>
            </button>
            <br />
            <br />
            <br />
            <emb style={{ color: "darkslategrey" }}>Details</emb>
            <hr />
            <emb style={{ color: "darkslategrey" }}>{product. description}</emb>
            
            
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsAccessories
