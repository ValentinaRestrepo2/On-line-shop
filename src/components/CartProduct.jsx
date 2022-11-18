const CartProduct = ({ product, addProduct, removeProduct }) => {
	return (
		<div>
			<br></br>
			<br></br>
			<img width={100} height={100} src={product.thumbnail} />
			<p>{product.name}</p>
			<p>${product.price}</p>
			<p>
				Description: <br></br>
				{product.description}
			</p>
			<div className='cart-quantity'>
				&nbsp;<button onClick={() => removeProduct(product)}> - </button>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;{product.quantity}</p>
				&nbsp;<button onClick={() => addProduct(product)}> + </button>
				<br></br>
			</div>
		</div>
	);
};

export default CartProduct;
