import { Product } from '@/infrastructure/database';
import { categoryToHuman } from '@/lib/utils';
import Image from 'next/legacy/image';
import Link from 'next/link';

const LOW_STOCK_BELOW = 50;

export function ProductTile({ product, index }: { product: Product, index?: number }) {
  // Load with priority the 2 first images in viewport
  const loadFast = !!(index && (index === 0 || index === 1));

  return (
    <Link href={'/items/' + product.id} title={product.title}>
      <div className='border rounded-md h-[390px] bg-white'>
        <div className='p-[100px] h-400 relative border-b'>
          <div className='w-full h-full'>
            <Image
              src={product.thumbnail}
              alt={`Imagen de ${product.title}`}
              layout={'fill'}
              objectFit={'cover'}
              className='rounded-tl-md rounded-tr-md'
              priority={loadFast}
            ></Image>
          </div>
        </div>
        
        <div className='p-3'>
          <div className='font-medium text-lg'>{product.title}</div>

          <div className='w-full flex items-start gap-2 items-center'>
            <div className='text-sm text-slate-800 truncate max-w-[70%]'>{product.brand}</div>
            <span className='text-slate-400'>·</span>
            <div className='text-sm text-slate-600'>{product.rating} <span className='text-amber-400'>★</span></div>
          </div>

          <div className='flex items-center gap-3'>
            <div className='text-[25px] mt-1'>{product.price}€</div>
            { product.discountPercentage &&
              <div className='text-xs font-medium bg-amber-300 rounded-md p-1 pl-2 pr-2 mt-1'>-{product.discountPercentage}%</div>
            }
          </div>

          <div className='text-xs text-slate-800 bg-slate-200 rounded-md p-1 pl-2 pr-2 inline-block mt-2'>
            {categoryToHuman(product.category)}
          </div>

          { product.stock < LOW_STOCK_BELOW &&
            <div className='text-rose-700	text-sm pt-1 mt-2'>{product.stock === 1 ? 'Queda 1 unidad' : `Quedan ${product.stock} unidades`}</div>
          }
        </div>
      </div>
    </Link>
  );
}
