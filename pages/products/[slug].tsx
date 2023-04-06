import Image from 'next/image'
import getProducts from '../../api'
import { useEffect, useState } from 'react';

const DELIVERY_COST = {
  free: 0,
  nextDay: 8,
  sameDay: 10
}

export default function Product({ product }) {

  const [selectedType, setSelectedType] = useState('paperback');
  const [total, setTotal] = useState(product.price);
  const [delivery, setDelivery] = useState('free');

  const prices = {
    paperback: product.price,
    hardcover: (product.price * 1.5).toFixed(2),
    kindle: (product.price * 0.05).toFixed(2)
  };

  useEffect(() => {
    const total = Number(prices[selectedType]) + Number(DELIVERY_COST[delivery]);
    
    setTotal(Number(total).toFixed(2));
    console.log(Number(total));
  }, [selectedType, delivery]);

  const buyProduct = async () => {
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        body: JSON.stringify({
          parent_uid: "c0a1fba61e2d418f",
          product_name: product.name,
          product_description: product.shortDescription,
          value: total
        })
      });

      const data = await res.json();
      // @ts-ignore
      Blockonomics.widget({
        msg_area: 'payment_area',
        uid: data.uid,
        email: 'customer@email.com'
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="mx-auto mt-16 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto flex flex-col sm:flex-row">
          <Image
            alt="coffee"
            className="rounded-lg"
            src={product.image}
            width={560}
            height={640}
          />
          <div className="mt-10 flex flex-col sm:mt-0 sm:ml-10">
            <h1 className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              {product.name}
            </h1>

            <ul className="grid w-full gap-6 md:grid-cols-2">
              <li>
                  <input type="radio" id="paperback" name="type" value="paperback" className="hidden peer" required checked={selectedType === 'paperback'} onChange={() => setSelectedType('paperback')} />
                  <label htmlFor="paperback" className="inline-flex items-center w-full text-gray-500 bg-white border border-gray-200 cursor-pointer dark:hover:text-gray-600 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-gray-600 dark:text-gray-400 justify-center text-center">
                      <div className="block">
                          <div className="w-full text-lg font-semibold">Paperback</div>
                          <div className="w-full">${prices.paperback}</div>
                      </div>
                  </label>
              </li>
              <li>
                  <input type="radio" id="hardcover" name="type" value="hardcover" className="hidden peer" checked={selectedType === 'hardcover'} onChange={() => setSelectedType('hardcover')} />
                  <label htmlFor="hardcover" className="inline-flex items-center w-full text-gray-500 bg-white border border-gray-200 cursor-pointer dark:hover:text-gray-600 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-gray-600 dark:text-gray-400 justify-center text-center">
                      <div className="block">
                          <div className="w-full text-lg font-semibold">Hardcover</div>
                          <div className="w-full">${prices.hardcover}</div>
                      </div>
                  </label>
              </li>
             < li>
                  <input type="radio" id="kindle" name="type" value="kindle" className="hidden peer" checked={selectedType === 'kindle'} onChange={() => setSelectedType('kindle')} />
                  <label htmlFor="kindle" className="inline-flex items-center w-full text-gray-500 bg-white border border-gray-200 cursor-pointer dark:hover:text-gray-600 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-gray-600 dark:text-gray-400 justify-center text-center">
                      <div className="block">
                          <div className="w-full text-lg font-semibold">kindle</div>
                          <div className="w-full">${prices.kindle}</div>
                      </div>
                  </label>
              </li>
          </ul>
            <div className="mt-10 mb-5 border-t border-gray-200 pt-10 font-bold">
              Description
            </div>
            <p className="max-w-xl">{product.longDescription}</p>

            <div className='mt-10 flex items-center justify-between'>
              <div className='mt-10'>
                <div className="mt-10 mb-5 border-t border-gray-200 pt-10 font-bold">
                  Shipping
                </div>

                <div id="dropdownHelperRadio" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
                  <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHelperRadioButton">
                    <li>
                      <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <div className="flex items-center h-5">
                            <input id="helper-radio-4" name="helper-radio" type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" checked={delivery === 'free'} onChange={() => setDelivery('free')} />
                        </div>
                        <div className="ml-2 text-sm">
                            <label htmlFor="helper-radio-4" className="font-medium text-gray-900 dark:text-gray-300">
                              <div>Free</div>
                              <p id="helper-radio-text-4" className="text-xs font-normal text-gray-500 dark:text-gray-300">5 - 7 days - $0.00</p>
                            </label>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <div className="flex items-center h-5">
                            <input id="helper-radio-5" name="helper-radio" type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" checked={delivery === 'nextDay'} onChange={() => setDelivery('nextDay')} />
                        </div>
                        <div className="ml-2 text-sm">
                            <label htmlFor="helper-radio-5" className="font-medium text-gray-900 dark:text-gray-300">
                              <div>Next Day Delivery</div>
                              <p id="helper-radio-text-5" className="text-xs font-normal text-gray-500 dark:text-gray-300">Next day - $8.00</p>
                            </label>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <div className="flex items-center h-5">
                            <input id="helper-radio-6" name="helper-radio" type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" checked={delivery === 'sameDay'} onChange={() => setDelivery('sameDay')} />
                        </div>
                        <div className="ml-2 text-sm">
                            <label htmlFor="helper-radio-6" className="font-medium text-gray-900 dark:text-gray-300">
                              <div>Within 8 hours</div>
                              <p id="helper-radio-text-6" className="text-xs font-normal text-gray-500 dark:text-gray-300">within 8 hours - $10.00</p>
                            </label>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
              <button
                  type="button"
                  className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
                  onClick={buyProduct}
                >
                  <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="bitcoin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.1-111 248-248 248S8 392.1 8 256 119 8 256 8s248 111 248 248zm-141.7-35.33c4.937-32.1-20.19-50.74-54.55-62.57l11.15-44.7-27.21-6.781-10.85 43.52c-7.154-1.783-14.5-3.464-21.8-5.13l10.93-43.81-27.2-6.781-11.15 44.69c-5.922-1.349-11.73-2.682-17.38-4.084l.031-.14-37.53-9.37-7.239 29.06s20.19 4.627 19.76 4.913c11.02 2.751 13.01 10.04 12.68 15.82l-12.7 50.92c.76 .194 1.744 .473 2.829 .907-.907-.225-1.876-.473-2.876-.713l-17.8 71.34c-1.349 3.348-4.767 8.37-12.47 6.464 .271 .395-19.78-4.937-19.78-4.937l-13.51 31.15 35.41 8.827c6.588 1.651 13.05 3.379 19.4 5.006l-11.26 45.21 27.18 6.781 11.15-44.73a1038 1038 0 0 0 21.69 5.627l-11.11 44.52 27.21 6.781 11.26-45.13c46.4 8.781 81.3 5.239 95.99-36.73 11.84-33.79-.589-53.28-25-65.99 17.78-4.098 31.17-15.79 34.75-39.95zm-62.18 87.18c-8.41 33.79-65.31 15.52-83.75 10.94l14.94-59.9c18.45 4.603 77.6 13.72 68.81 48.96zm8.417-87.67c-7.673 30.74-55.03 15.12-70.39 11.29l13.55-54.33c15.36 3.828 64.84 10.97 56.85 43.03z"></path></svg>
                  {`Pay with Bitcoin - $${total}`}
                </button>

                <div id="payment_area">

                </div>
              </div>

            </div>

            <div className='mt-10'>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const searchResults = await getProducts()
  const book = searchResults.find(b => b.id === params.slug);

  return {
    props: {
      product: book,
    },
  }
}

export function getStaticPaths() {
  const books = getProducts()
  let fullPaths = books.map(b => ({params: { slug: b.id }}));

  return {
    paths: fullPaths,
    fallback: true,
  }
}
