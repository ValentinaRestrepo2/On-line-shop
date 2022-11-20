import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import { FaShoppingCart, FaLaptopHouse, FaShoppingBag } from 'react-icons/fa';

import './index.css';

// Obtenemos los datos de los productos
import { products } from './data/products';
import { useState } from 'react';
import ProductsAdded from './components/ProductsAdded';
import Summary from './components/Summary';

const App = () => {
	const [cart, setCart] = useState([]);

	const addProduct = product => {
		const tempCart = [...cart];

		const cartProductIndex = cart.findIndex(
			cartProduct => cartProduct.id === product.id
		);

		if (cartProductIndex !== -1) {
			const cartProduct = cart.find(
				cartProduct => cartProduct.id === product.id
			);

			if (cartProduct) {
				if (cartProduct.quantity < product.stock) {
					tempCart[cartProductIndex] = {
						...product,
						quantity: cartProduct.quantity + 1,
					};

					setCart(tempCart);
				}
			}
		} else {
			setCart([...tempCart, { ...product, quantity: 1 }]);
		}
	};

	const removeProduct = product => {
		const tempCart = [...cart];

		const cartProductIndex = cart.findIndex(
			cartProduct => cartProduct.id === product.id
		);

		if (tempCart[cartProductIndex].quantity === 1) {
			setCart(tempCart.filter(cartProduct => cartProduct.id !== product.id));
		} else {
			const cartProduct = tempCart.find(
				cartProduct => cartProduct.id === product.id
			);

			if (cartProduct) {
				tempCart[cartProductIndex] = {
					...product,
					quantity: product.quantity - 1,
				};

				setCart(tempCart);
			}
		}
	};

	return (
		<>
			<header className='header'>
				<div className='container_header'>
					{/* Este componente recibe el array de productos mediante las propiedades y los renderiza */}
					<h1>
						<FaLaptopHouse /> On-line shop
					</h1>
					<div className='cart'>
						<h2>
							<ProductsAdded cart={cart} products={products} />
						</h2>
					</div>
				</div>
			</header>
			<div className='container_body'>
				<div className='products-section'>
					<h3>
						{' '}
						<FaShoppingBag /> Products
					</h3>
					<div className='list_products'>
						<ProductsList products={products} addProduct={addProduct} />
					</div>
				</div>
				<div className='summary-section'>
					<Summary cart={cart} />
				</div>
				<div className='cart-section'>
					{cart.length > 0 && (
						<>
							<h3>
								{' '}
								<FaShoppingCart></FaShoppingCart> Shopping cart
							</h3>
							<div className='container_carrito'>
								<Cart
									cart={cart}
									addProduct={addProduct}
									removeProduct={removeProduct}
								/>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default App;
