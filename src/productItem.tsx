import { createElement } from "./tools/jsxFactory";
import { Product } from "./App/entities";

/**
 * Class display details of a single product
 */
export class ProductItem {
  private quantity: number = 1;

  props: {
    product: Product;
    callback: (product: Product, quantity: number) => void;
  };

  getContent(): HTMLElement {
    const path: string = "./src/images/";
    return (
      <div className="card">
        <img src={`${path}${this.props.product.image}`} alt="" />
        <div className="product__details">
          <h4>
            {this.props.product.name}
            <span className="price">${this.props.product.price.toFixed(2)}</span>
          </h4>
          <div className="">
            {this.props.product.description}
            <button className="add__cart" onclick={this.handleAddToCart}>
              Add To Cart
            </button>
            {/* <select className="" onchange={this.handleQuantityChange}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select> */}
          </div>
        </div>
      </div>
    );
  }

  handleQuantityChange = (ev: Event): void => {
    this.quantity = Number((ev.target as HTMLSelectElement).value);
  };

  handleAddToCart = (): void => {
    this.props.callback(this.props.product, this.quantity);
  };
}
