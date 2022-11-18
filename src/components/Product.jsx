import ProductImage from './ProductImage';
import {
	FaShoppingCart,
} from 'react-icons/fa';

const Product = ({ product, addProduct }) => {
	return (
		<div>
			<ProductImage url={product.thumbnail}></ProductImage>
			<p>{product.name}</p>
			<p>${product.price}</p>
			<p>Description: <br></br>{product.description}</p>
			<button onClick={() => addProduct(product)}><FaShoppingCart></FaShoppingCart>  Agregar al carrito</button>
			<br />
			<br />
		</div>
	);
};

export default Product;
