import { useEffect, useState } from 'react';
import {
	FaShoppingCart,
} from 'react-icons/fa';

const ProductsAdded = ({ cart }) => {
	const [totalUnits, setTotalUnits] = useState(0);
	useEffect(() => {
		let myTotalUnits = 0;

		cart.forEach(product => {
			myTotalUnits = myTotalUnits + product.quantity;
		});

		setTotalUnits(myTotalUnits);
	}, [cart]);
	return (
		<>
			<div>			
				<div><FaShoppingCart></FaShoppingCart>  Shopping cart: {totalUnits}</div>
			</div>
		</>
	);
};

export default ProductsAdded;
