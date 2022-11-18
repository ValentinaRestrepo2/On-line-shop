import CartProduct from './CartProduct';

const Cart = ({ cart, addProduct, removeProduct }) => {
	if (cart.length < 1) return <></>;

	return cart.map(product => (
		<>
			<CartProduct
				key={product.id}
				product={product}
				addProduct={addProduct}
				removeProduct={removeProduct}
			/>
		</>
	));
};

export default Cart;
