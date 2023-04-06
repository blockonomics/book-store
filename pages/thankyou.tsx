import getProducts from '../api'
import { useRouter } from 'next/router';
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function About() {
  const [product, setProduct] = useState({});

  const router = useRouter();

  useEffect(() => {
    const productId = router.query.productId;
    const product = getProducts().find(p => p.id == productId);
    setProduct(product);
  }, [router])

  return (<div>
    <h1 className="mt-1 text-center font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl">Thank you for ordering</h1>
    <div className="flex h-screen flex-col justify-between">
    
      <div className="mx-auto mt-16 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <p className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
                {product.name}</p>
        <div className="mx-auto flex flex-col sm:flex-row">
      
        <Image
            alt="coffee"
            className="rounded-lg"
            src={product.image}
            width={560}
            height={640}
          />
          

        </div>
        <p className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl"> Payment sucessful.........</p>
      </div>
    </div>
  </div>
  )
}
