import {createElement} from "./tools/jsxFactory";
import {Order}  from "./App/entities";

export class Header {
    props: {
        order: Order,
        submitCallback: () => void
    }

    getContent(): HTMLElement {
        let count = this.props.order.productCount;
        return <div>
            {/* {this.addedToCart()} */}
            {/* <div className= "">
                {count === 0 ? "": this.addedToCart()}
            </div> */}
            <button onclick={this.props.submitCallback} className="submit__order">
                Submit Order
            </button>
        </div>
    }

    addedToCart(): HTMLElement {
        return <div className="add-modal">
            Added to Cart
        </div>
    }
}