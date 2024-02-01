import { Logo } from '@/components/Logo';
import { Search } from '@/components/Search';
import { Suspense } from 'react';

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <div className='border-b p-3 pl-10 flex gap-10'>
        <Logo small />
        <Suspense>
          <Search className='max-w-[400px]' />
        </Suspense>
      </div>
      <div className='p-10 pt-3 pt-5 pb-20'>
        <div>
          {children}
        </div>
      </div>
    </>
  );
}
