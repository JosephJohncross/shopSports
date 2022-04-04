import { AbstractDataSource } from "./abstractDataSource";
import { Product } from "./entities";

export class LocalDataSource extends AbstractDataSource {
  loadProducts(): Promise<Product[]> {
    return Promise.resolve([
      {
        id: 1,
        name: "Board",
        category: "Watersports",
        description: "Surfing",
        price: 3,
        image: "surfing.jpg"
      },
      {
        id: 2,
        name: "Canoe",
        category: "Watersports",
        description: "Canoeing",
        price: 4,
        image: "canoeing.jpg"
      },
      {
        id: 3,
        name: "Boots",
        category: "Running",
        description: "Marathon Boots",
        price: 5,
        image: "boots.jpg"
      },
      {
        id: 4,
        name: "Chess",
        category: "Outdoors",
        description: "Chess Board",
        price: 6,
        image: "chess.jpg"
      },
      {
        id: 5,
        name: "Ludo",
        category: "Outdoors",
        description: "Ludo Board",
        price: 7,
        image: "ludo.jpg"
      }
    ]);
  }

  storeOrder(): Promise<number> {
      console.log("Store Order");
      console.log(JSON.stringify(this.order));
      return Promise.resolve(1);
  }
}
