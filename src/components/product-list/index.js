import React, { useState } from 'react';
import './index.css';

export default function ProductList(props) {
	const [updateMode, setUpdateMode] = useState({
		ADD: 1,
		SUBTRACT: 0,
	});
	function handleClick() {
		setUpdateMode({ ...updateMode, SUBTRACT: updateMode.SUBTRACT + 1 });
	}
	const increment = () => {
		setUpdateMode({
			...updateMode,
			ADD: updateMode.ADD + 1,
			SUBTRACT: updateMode.SUBTRACT === 0 ? 0 : updateMode.SUBTRACT + 1,
		});
	};
	const decrement = () => {
		setUpdateMode({
			...updateMode,
			ADD: updateMode.ADD === 1 ? 1 : updateMode.ADD - 1,
			SUBTRACT: updateMode.SUBTRACT === 0 ? 0 : updateMode.SUBTRACT - 1,
		});
	};
	return (
		<div className='layout-row wrap justify-content-center flex-70 app-product-list'>
			{props.products.map((product, i) => {
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
								{updateMode.SUBTRACT === 0 ? (
									<button
										className='x-small outlined'
										data-testid='btn-item-add'
										onClick={handleClick}
										key={product.id}
									>
										Add To Cart
									</button>
								) : (
									<div className='layout-row justify-content-between align-items-center'>
										<button
											className='x-small icon-only outlined'
											data-testid='btn-quantity-subtract'
											onClick={decrement}
										>
											<i className='material-icons'>remove</i>
										</button>

										<input
											type='number'
											disabled
											className='cart-quantity'
											data-testid='cart-quantity'
											value={updateMode.ADD}
										/>

										<button
											className='x-small icon-only outlined'
											data-testid='btn-quantity-add'
											onClick={increment}
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
