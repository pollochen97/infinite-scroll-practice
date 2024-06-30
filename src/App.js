import './App.css'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

const fakeData = [
  {
    id: 1,
    text: '棗子',
    img: 'https://greenblob.azureedge.net/upload/Album_3035/File/201911250834532.jpg',
  },
  {
    id: 2,
    text: '草莓',
    img: 'https://greenblob.azureedge.net/upload/Album_3035/File/202011120823443.jpg',
  },
  {
    id: 3,
    text: '哈密瓜',
    img: 'https://greenblob.azureedge.net/upload/Product_3033/202001110404291.jpg',
  },
  {
    id: 4,
    text: '牛奶果',
    img: 'https://greenblob.azureedge.net/upload/Product_3033/202112270730261.jpg',
  },
  {
    id: 5,
    text: '小番茄',
    img: 'https://greenblob.azureedge.net/upload/Product_3033/202112220915511.jpg',
  },
  {
    id: 6,
    text: '蓮霧',
    img: 'https://greenblob.azureedge.net/upload/Product_3033/202103030406121.jpg',
  },
  {
    id: 7,
    text: '百香果',
    img: 'https://greenblob.azureedge.net/upload/Product_3033/202302020225131.jpg',
  },
  {
    id: 8,
    text: '黃金果',
    img: 'https://greenblob.azureedge.net/upload/Product_3033/201908280451361.jpg',
  },
  {
    id: 9,
    text: '芭樂',
    img: 'https://fruitbox.blob.core.windows.net/products/Images/20211208161519.webp',
  },
]

// interface IProduct {
//   id: number
//   text: string
//   img: string
// }

function App() {
  // const [products, setProducts] = useState({
  //   items: Array.from({ length: 20 }),
  // })
  const allProducts = fakeData
  // const [products, setProducts] = useState(allProducts.slice(0, 2))
  const [products, setProducts] = useState(allProducts)

  const loadMoreProducts = () => {
    // a fake async api call like which sends
    const newProducts = allProducts

    setTimeout(() => {
      setProducts(products.concat(newProducts))
    }, 1500)
  }

  return (
    <>
      <InfiniteScroll
        dataLength={products.length}
        next={loadMoreProducts}
        hasMore={true}
        loader={<h4 className='text-center mb-4'>Loading...</h4>}
        // endMessage={
        //   <p style={{ textAlign: 'center' }}>
        //     <b>沒有更多商品了</b>
        //   </p>
        // }
      >
        {products &&
          products.map((value, index) => (
            <div
              key={index}
              className='my-4 flex flex-col justify-center items-center'
            >
              <div className='mb-3'>{value.text}</div>
              <div className='w-[300px]'>
                <img src={value.img} className='w-full' />
              </div>
            </div>
          ))}
      </InfiniteScroll>
    </>
  )
}

export default App
