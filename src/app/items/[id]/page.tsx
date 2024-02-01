import { ImageCarousel } from '@/components/Carousel';
import { ProductTile } from '@/components/ProductTile';
import { Button } from '@/components/ui/button';
import * as Database from '@/infrastructure/database';
import { categoryToHuman, getOriginalPrice } from '@/lib/utils';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const products = Database.getProducts();
 
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ItemPage({ params }: { params: { id: string } }) {
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
        <div className='w-full md:w-2/4'>
          <ImageCarousel images={product.images.slice(0, 5)} />
        </div>

        <div className='md:w-2/4 w-full'>
          <div className='text-medium text-xl'>{product.title}</div>

          <div className='w-full flex items-start gap-2 items-center'>
            <div className='text-md text-slate-800 truncate max-w-[70%]'>{product.brand}</div>
            <span className='text-slate-400'>·</span>
            <div className='text-md text-slate-600'>{product.rating} <span className='text-amber-400'>★</span></div>
          </div>

          <div className='border-b border-gray-200 mt-3 mb-3'></div>

          <div>{product.description}</div>
        </div>

        <div className='md:w-1/4 border rounded-md p-5 w-full'>
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
            <Button className='bg-orange-400 hover:bg-orange-500 duration-300 text-white'>Comprar ya</Button>
          </div>
        </div>
      </div>

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
