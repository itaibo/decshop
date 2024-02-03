import { ImageCarousel } from '@/components/Carousel';
import { ProductTile } from '@/components/ProductTile';
import { Button } from '@/components/ui/button';
import * as Database from '@/infrastructure/database';
import { categoryToHuman, getOriginalPrice } from '@/lib/utils';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { ShareItem } from '@/components/ShareItem';

type Params = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const products = Database.getProducts();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }: Params) {
  const product = Database.getProduct(parseInt(params.id));

  if (!product) {
    return {
      title: 'No encontrado - Decshop',
    };
  }

  return {
    title: `${product.title} - Decshop`,
    description: product.description,
    openGraph: {
      images: product.thumbnail,
    },
  };
}

export default function ItemPage({ params }: Params) {
  const product = Database.getProduct(parseInt(params.id));

  if (!product) {
    return notFound();
  }

  const similar = Database.getProducts(product.category).filter(p => p.id !== product.id);
  const topProducts = Database.getTopProducts(4).filter(p => p.id !== product.id);

  return (
    <div>
      <div className='flex gap-2 align-center text-sm mt-1 text-slate-500 pb-5'>
        <Link href={'/items'} className='hover:text-slate-700 duration-300'>Todos los productos</Link>
        <div>&gt;</div>
        <Link href={'/items?search=' + encodeURI(product.category)} className='hover:text-slate-700 duration-300'>{categoryToHuman(product.category)}</Link>
      </div>

      <div className='flex gap-[30px] items-start flex-col md:flex-row'>
        {/* Carousel */}
        <div className='w-full md:w-2/4'>
          <ImageCarousel images={product.images.slice(0, 5)} />
        </div>

        {/* Product description */}
        <div className='md:w-2/4 w-full'>
          <div className='text-medium text-xl'>{product.title}</div>

          <div className='w-full flex items-start gap-2 items-center'>
            <div className='text-md text-slate-800 truncate max-w-[70%]'>{product.brand}</div>
            <span className='text-slate-400'>·</span>
            <div className='text-md text-slate-600'>{product.rating} <span className='text-amber-400'>★</span></div>
          </div>

          <div className='border-b border-gray-200 mt-3 mb-3'></div>

          <div className='text-slate-600 text-sm'>
            Categoría: <Link className='hover:text-slate-700 duration-300' href={'/items?search=' + product.category}>{categoryToHuman(product.category)}</Link>
          </div>
          <div className='mt-2'>{product.description}</div>

          {/* Some extra text for the demo */}
          <div className='mt-2'>
            The {product.title} is a great product from {product.brand} that competes with other products in
            the {categoryToHuman(product.category)} category.
          </div>
          <div className='mt-2'>
            At a price of just {product.price}€, this product offers a really good quality that you do not
            find in other similar products from other brands.
          </div>
          <div className='mt-2'>
            Like all the products in Decshop, the {product.title} has a guarantee of at least 2 years.
          </div>
        </div>

        {/* Buy box */}
        <div className='md:w-1/4 w-full flex flex-col gap-3'>
          <div className='border rounded-md p-5'>
            { product.discountPercentage &&
              <div className='flex gap-3'>
                <div className='text-sm line-through'>{getOriginalPrice(product.price, product.discountPercentage)}€</div>
                <div className='text-xs font-medium bg-amber-300 rounded-md p-1 pl-2 pr-2 mt-[-3px]'>-{product.discountPercentage}%</div>
              </div>
            }

            <div className='text-[30px] mt-1'>{product.price}€</div>

            <div className='text-slate-500 text-sm'>{product.stock === 1 ? 'Queda 1 unidad' : `Quedan ${product.stock} unidades`}</div>

            <div className='flex flex-col gap-3 mt-5'>
              <Button variant={'secondary'}>Añadir a la cesta</Button>
              <Button className='bg-orange-400 hover:bg-orange-500 duration-300 text-black-900'>Comprar ya</Button>
            </div>
          </div>

          <div className='border rounded-md p-5'>
            <Suspense>
              <ShareItem product={product}/>
            </Suspense>
          </div>
        </div>
      </div>

      {/* Similar / Top products */}
      <div className='border-b border-gray-200 mt-10 mb-10'></div>

      { similar.length > 0 &&
        <>
          <div className='text-md mb-3'>Productos similares</div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              { similar.slice(0, 4).map((product, key) => <ProductTile key={key} product={product} />) }
          </div>
        </>
      }

      { similar.length === 0 &&
        <>
          <div className='text-md mb-3'>Otros productos</div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              { topProducts.slice(0, 4).map((product, key) => <ProductTile key={key} product={product} />) }
          </div>
        </>
      }
    </div>
  );
}
