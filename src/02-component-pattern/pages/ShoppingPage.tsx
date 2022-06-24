import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components'
import coffee from '../assets/coffee-mug.png'
const product = {
  id: '1',
  title: 'Coffee Mug',
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard product={product}>
          <ProductCard.Image img={coffee} />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        {/* FORMA tradicional--> */}
        <ProductCard product={product} className='violetBackground'>
          <ProductImage img={coffee} className='custom-image' />
          <ProductTitle title='Titulo en etiqueta' className='text-white' />
          <ProductButtons className='text-white' />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: '#70d1f8' }}>
          <ProductImage img={coffee} className='custom-image' />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}
