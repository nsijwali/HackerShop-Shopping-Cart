import React, { useState } from 'react';
import './index.css';

export default function ProductList(props) {
	const [addProd, setProduct] = useState(props.products);

	const handleClick = (product) => {
		let temp = addProd;
		temp.forEach((ele, index) => {
			if (ele.id === product.id) {
				temp[index].cartQuantity = ele.cartQuantity + 1;
			}
		});
		setProduct([...temp]);
		props.setCart([...temp]);
	};
	const increment = (product) => {
		let temp = addProd;
		temp.forEach((ele, index) => {
			if (ele.id === product.id) {
				temp[index].cartQuantity = ele.cartQuantity + 1;
			}
		});
		setProduct([...temp]);
		props.setCart([...temp]);
	};
	const decrement = (product) => {
		let temp = addProd;
		temp.forEach((ele, index) => {
			if (ele.id === product.id) {
				temp[index].cartQuantity = ele.cartQuantity - 1;
			}
		});
		setProduct([...temp]);
		props.setCart([...temp]);
	};
	return (
		<div className='layout-row wrap justify-content-center flex-70 app-product-list'>
			{addProd.map((product, i) => {
				return (
					<section
						className='w-30'
						data-testid={'product-item-' + i}
						key={product.id}
					>
						<div className='card ma-16'>
							<img
								alt='Your Cart'
								src={product.image}
								className='d-inline-block align-top product-image'
							/>
							<div className='card-text pa-4'>
								<h5 className='ma-0 text-center'>{product.name}</h5>
								<p className='ma-0 mt-8 text-center'>${product.price}</p>
							</div>
							<div className='card-actions justify-content-center pa-4'>
								{product.cartQuantity === 0 ? (
									<button
										className='x-small outlined'
										data-testid='btn-item-add'
										onClick={() => handleClick(product)}
										key={product.id}
									>
										Add To Cart
									</button>
								) : (
									<div className='layout-row justify-content-between align-items-center'>
										<button
											className='x-small icon-only outlined'
											data-testid='btn-quantity-subtract'
											onClick={() => decrement(product)}
										>
											<i className='material-icons'>remove</i>
										</button>

										<input
											type='number'
											disabled
											className='cart-quantity'
											data-testid='cart-quantity'
											value={product.cartQuantity}
										/>

										<button
											className='x-small icon-only outlined'
											data-testid='btn-quantity-add'
											onClick={() => increment(product)}
										>
											<i className='material-icons'>add</i>
										</button>
									</div>
								)}
							</div>
						</div>
					</section>
				);
			})}
		</div>
	);
}

export const UpdateMode = {
	ADD: 1,
	SUBTRACT: 0,
};
