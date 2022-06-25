import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from '../components'
import { products } from '../data/products'
import { useShopingCart } from '../hooks/useShoppingCart'

import '../styles/custom-styles.css'

export const ShoppingPage = () => {
  const { onProductChange, shoppingCart } = useShopingCart()

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className='bg-dark text-white'
            onChange={onProductChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage
              className='custom-image'
              style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
            />
            <ProductTitle className='text-bold' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>

      <div className='shopping-cart'>
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className='bg-dark text-white'
            style={{ width: '100px', backgroundColor: 'blueviolet' }}
            onChange={onProductChange}
            value={product.count}
          >
            <ProductImage
              className='custom-image'
              style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
            />
            <ProductTitle className='text-bold' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>

      <div>
        <code>{JSON.stringify(shoppingCart)}</code>
      </div>
    </div>
  )
}
