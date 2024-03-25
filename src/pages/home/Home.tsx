import React from "react";
import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [{ id: "p1" }, { id: "p2" }, { id: "p3" }];

function HomePage() {
  return (
    <>
      <h1>홈 화면</h1>
      <section>
        {DUMMY_PRODUCTS.map((product, index) => (
          <div key={product.id}>
            <Link
              to={`products/:${product.id}`}
            >{`Product ${index + 1} `}</Link>
          </div>
        ))}
      </section>
    </>
  );
}

export default HomePage;
