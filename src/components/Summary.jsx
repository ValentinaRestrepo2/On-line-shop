import { useEffect, useState } from 'react';
import { FaClipboardList } from 'react-icons/fa';

const Summary = ({ cart }) => {
	const [subtotal, setSubtotal] = useState(0);
	const [discount, setDiscount] = useState(0);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		let mySubtotal = 0;

		cart.forEach(product => {
			mySubtotal = mySubtotal + product.price * product.quantity;
		});

		setSubtotal(mySubtotal);
	}, [cart]);

	useEffect(() => {
		setTotal(subtotal - discount);
	}, [subtotal, discount]);

	const handleDiscountChange = event => {
		const value = event.target.value;

		if (value < 0) {
			setDiscount(0);
		} else if (value > 100) {
			setDiscount(100);
		} else {
			setDiscount(value);
		}
	};

	return (
		<center>
			<div className='container_summary'>
				<h3>
					<FaClipboardList></FaClipboardList> Summary
				</h3>
				
				<p className='sumary-letter'>
					<input type='number' onChange={handleDiscountChange} value={discount}  />
					Subtotal: ${subtotal}
					<br></br>
					Coupon: {discount}
					<br></br>
					Total: ${total}
				</p>{' '}
			</div>
		</center>
	);
};

export default Summary;
