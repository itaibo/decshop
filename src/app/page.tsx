import { Logo } from '@/components/Logo';
import { Search } from '@/components/Search';
import { Button } from '@/components/ui/button';
import * as Database from '@/infrastructure/database';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Home() {
  const topProducts = Database.getTopProducts(6);

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='mt-[-100px] m5-900 w-[90%] max-w-[450px] flex items-center justify-stretch flex-col gap-7'>
        <Logo className='flex-grow' />
        <Suspense>
          <Search className='flex-grow' />
        </Suspense>

        <div className='w-full text-center mt-3'>
          <div className='text-sm text-slate-600'>Los mejores productos:</div>
          <div className='mt-1 flex md:block flex-col gap-1'>
            { topProducts.map((product, key) => {
              return (
                <div key={key} className='inline'>
                  <Link href={'/items/' + product.id}>
                    <div className='text-sm mr-2 ml-2 inline hover:text-orange-400 duration-300'>{product.title}</div>
                  </Link> 
                  { key % 2 === 1 && <div className='md:block hidden'></div> }
                  { key % 2 === 0 && key !== topProducts.length - 1 && <span className='text-slate-400 md:inline-block hidden'>·</span> }
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
