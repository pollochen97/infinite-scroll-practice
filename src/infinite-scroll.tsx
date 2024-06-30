import React, { useState, useEffect } from 'react'
import { fakeData } from './data/fakeData'
import InfiniteScroll from 'react-infinite-scroll-component'

interface IProduct {
  id: number
  text: string
  img: string
}

export default function InfiniteScrollComponent() {
  const allProducts: IProduct[] = fakeData
  const [products, setProducts] = useState<IProduct[]>(allProducts.slice(0, 2))
  const [loadMore, setLoadMore] = useState<boolean>(false)

  const loadMoreProducts = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    // const newProducts = allProducts.slice(products.length, products.length + 3)
    const newProducts = allProducts.slice(products.length, products.length + 3)

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
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>沒有更多商品了</b>
          </p>
        }
      >
        {products &&
          products.map((v: IProduct) => (
            <div key={v.id}>
              <div>{v.text}</div>
              <div className='w-[200px]'>
                <img src={v.img} className='w-full' />
              </div>
            </div>
          ))}
      </InfiniteScroll>
    </>
  )
}
