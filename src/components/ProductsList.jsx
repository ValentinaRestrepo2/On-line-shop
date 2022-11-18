import Product from './Product';

const ProductsList = ({ products, addProduct }) => {
	return products.map(product => (
		<Product key={product.id} addProduct={addProduct} product={product} />
	));
};

export default ProductsList;
