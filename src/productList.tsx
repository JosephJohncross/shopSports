import { createElement } from "./tools/jsxFactory";
import { Product } from "./App/entities";
import { ProductItem } from "./productItem";
import { CategoryList } from "./categoryList";

/**
 * To display a list of product and
 * the category buttons
 */
export class ProductList {
  props: {
    products: Product[];
    categories: string[];
    selectedCategory: string;
    addToOrderCallback?: (product: Product, quantiy: number) => void;
    filterCallback?: (category: string) => void;
  };

  getContent(): HTMLElement {
    return (
        <div className="row">
          <div className="nav__column">
            <div className= "section__title">
              <p>Filter By Sports</p>
            </div>
            <CategoryList
              categories={this.props.categories}
              selectedCategory={this.props.selectedCategory}
              callback={this.props.filterCallback}
            />
          </div>
          <div className="body__column">
            <div className="products">
            {this.props.products.map((p) => (
              <ProductItem
                product={p}
                callback={this.props.addToOrderCallback}
              />
            ))}
            </div>
          </div>
        </div>
    );
  }
}
