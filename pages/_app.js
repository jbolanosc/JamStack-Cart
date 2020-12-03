import App from "next/app";
import Layout from "../components/Layout.js";
import CartContext from "../components/cartContext";

export default class MyApp extends App {
  state = {
    cart: [],
    cartTotal: 0,
  };

  componentDidMount = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const cartTotal = JSON.parse(localStorage.getItem("total"));

    if (cart) {
      this.setState({
        cart,
        cartTotal,
      });
    }
  };

  addToCart = (product) => {
    this.setState({
      cart: [...this.state.cart, product],
    });
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };

  calculateTotal = (price) => {
    console.log(price);
    this.setState({
      cartTotal: this.state.total + price,
    });

    localStorage.setItem("total", this.state.cartTotal);
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <CartContext.Provider
        value={{
          cart: this.state.cart,
          addToCart: this.addToCart,
          total: this.calculateTotal,
          cartTotal: this.state.cartTotal,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContext.Provider>
    );
  }
}
