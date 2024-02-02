import { Product } from '@/infrastructure/database';
import Image from 'next/legacy/image';
import Link from 'next/link';

export function SmallProductTile
({ product }: { product: Product }) {
  return (
    <Link href={'/items/' + product.id} className='md:w-1/3 md:max-w-1/3 w-full' title={product.title}>
      <div className='border rounded-md h-[130px]'>
        <div className='p-[40px] h-30 relative border-b'>
          <div className='w-full h-full'>
            <Image
              src={product.thumbnail}
              alt={`Imagen de ${product.title}`}
              layout={'fill'}
              objectFit={'cover'}
              className='rounded-tl-md rounded-tr-md'
            ></Image>
          </div>
        </div>
        
        <div className='p-3'>
          <div className='font-medium text-sm truncate'>{product.title}</div>
        </div>
      </div>
    </Link>
  );
}
