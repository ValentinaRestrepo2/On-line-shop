const ProductImage = ({ url }) => {
	return (
		<div className='i'>
			<img src={url} width={100} height={100}></img>
		</div>
	);
};

export default ProductImage;
