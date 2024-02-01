import { Product } from '@/infrastructure/database';
import Image from 'next/legacy/image';
import Link from 'next/link';

export function ProductTile({ product }: { product: Product }) {
  return (
    <Link href={'/items/' + product.id}>
      <div className='border rounded-md h-[345px]'>
        <div className='p-[100px] h-400 relative '>
          <div className='w-full h-full'>
            <Image
              src={product.thumbnail}
              alt={product.title}
              layout={'fill'}
              objectFit={'cover'}
              className='rounded-tl-md rounded-tr-md border-b'
            ></Image>
          </div>
        </div>

        <div className='p-3'>
          <div className='font-medium'>{product.title}</div>
          <div className='text-sm text-slate-800'>{product.brand}</div>

          <div className='flex items-center gap-3'>
            <div className='text-[25px] mt-2'>{product.price}€</div>
            { product.discountPercentage &&
              <div className='text-xs bg-amber-300 rounded-md p-1 mt-2'>-{product.discountPercentage}%</div>
            }
          </div>

          { product.stock < 50 &&
            <div className='text-rose-700	text-sm pt-1'>{product.stock === 1 ? 'Queda 1 unidad' : `Quedan ${product.stock} unidades`} </div>
          }
        </div>
      </div>
    </Link>
  );
}
