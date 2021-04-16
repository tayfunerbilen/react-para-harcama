import {useState} from 'react'

function BasketItem({item, product}) {
	return (
		<>
			<li className="basket-item">
				{product.title} <span>x {item.amount}</span>
			</li>
			<style jsx>{`
              .basket-item {
                padding-bottom: 10px;
                font-size: 17px;
              }

              .basket-item span {
                color: #999;
              }
			`}</style>
		</>
	)
}

export default BasketItem