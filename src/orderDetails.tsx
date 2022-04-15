import {createElement} from "./tools/jsxFactory";
import {Order, Product} from "./App/entities";

export class OrderDetails {
    props: {
        order: Order,
        cancelCallback: () => void,
        submitCallback: () => void
    }

    getContent(): HTMLElement {
        return <div>
            <h3>Order Summary</h3>
            <div className="summary__details">
                <table>
                    <thead>
                        <tr className="summary__header">
                            <th>Quantity</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.order.orderLines.map(line =>
                            <tr>
                                <td>{line.quantity}</td>
                                <td>{line.product.name}</td>
                                <td>${line.product.price.toFixed(2)}</td>
                                <td>${line.total.toFixed(2)}</td>
                            </tr>)}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="3">Total:</th>
                            <th>${this.props.order.total.toFixed(2)}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className="">
                <button className="btn btn-secondary" onclick={this.props.cancelCallback}>Back</button>
                <button className="btn btn-primary" onclick={this.props.submitCallback}>Submit Order</button>
            </div>
        </div>
    }
}
