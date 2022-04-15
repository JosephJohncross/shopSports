import { AbstractDataSource } from "./abstractDataSource";
import { Product, Order } from "./entities";

// const protocol = "http";
// const hostname = "localhost";
// const port = 4500;

const urls = {
  // products: `${protocol}://${hostname}:${port}/products`,
  // orders: `${protocol}://${hostname}:${port}/orders`,
  products: "/api/products",
  orders: "/api/orders"
};

export class RemoteDataSource extends AbstractDataSource {
  async loadProducts(): Promise<Product[]> {
    return await fetch(urls.products).then((response) => response.json(), (error) => {
      console.log(error.message);
    });
  }

  async storeOrder(): Promise<number> {
    let orderData = {
      lines: [...this.order.orderLines.values()].map((ol) => ({
        productId: ol.product.id,
        productName: ol.product.name,
        quantity: ol.quantity,
      })),
    };

    const request = await fetch(urls.orders, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(orderData),
    });

    const data = await request.json();
    return data.id;
  }
}
