import React from "react";

export const Product = () => {
  var products = [
    {
      id: 1,
      name: "Apple Watch SE",
      price: 20299,
      discount: 18,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Sweatshirt",
      price: 799,
      discount: 60,
      category: "Fashion",
    },
    {
      id: 3,
      name: "Lenovo Thinkpad",
      price: 17200,
      discount: 66,
      category: "Electronics",
    },
    {
      id: 4,
      name: "Men Hoodie",
      price: 1999,
      discount: 43,
      category: "Fashion",
    },
    {
      id: 5,
      name: "Gaming Desk",
      price: 26199,
      discount: 30,
      category: "Furniture",
    },
  ];
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Product Table</h1>
      <table class="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE ₹</th>
            <th>DISCOUNT %</th>
            <th>CATEGORY</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => {
            return (
              <tr>
                <td>{prod.id}</td>
                <td style={{ color: prod.discount >= 50 ? "green" : "white" }}>
                  {prod.name}
                </td>
                <td>₹ {prod.price}</td>
                <td>{prod.discount} %</td>
                <td>
                  <span
                    style={{
                      backgroundColor:
                        prod.category == "Fashion" ? "red" : "transparent",
                    }}
                  >
                    {prod.category}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
