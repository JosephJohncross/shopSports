import { createElement } from "./tools/jsxFactory";

/**
 * Allow the user to filter content, 
 * by displaying a list of category button
 */
export class CategoryList {
  props: {
    categories: string[];
    selectedCategory: string;
    callback: (selected: string) => void;
  };

  getContent(): HTMLElement {
    return (
      <div className="category__filter">
        {["All", ...this.props.categories].map((c) =>
          this.getCategoryButton(c)
        )}
      </div>
    );
  }

  getCategoryButton(cat?: string): HTMLElement {
    let selected =
      this.props.selectedCategory === undefined
        ? "All"
        : this.props.selectedCategory;
    let btnClass = selected === cat ? "btn-primary" : "btn-secondary";
    return (
      <div className={`btn ${btnClass}`} onclick={() => this.props.callback(cat)}>
        {cat}
      </div>
    );
  }
}
