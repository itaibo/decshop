import { Logo } from '@/components/Logo';
import { Search } from '@/components/Search';
import { Suspense } from 'react';

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <div className='border-b p-3 pl-10 pr-10 flex justify-between'>
        <div className='flex flex-1 gap-10'>
          <Logo small />
          <Suspense>
            <Search className='max-w-[400px]' />
          </Suspense>
        </div>

        <div className='hidden md:flex gap-5 items-center'>
          <MenuLink>Ayuda</MenuLink>
          <MenuLink>Devoluciones</MenuLink>
          <MenuLink>Cuenta</MenuLink>
          <MenuLink>Cesta (0)</MenuLink>
        </div>
      </div>

      <div className='p-10 pt-3 pt-5 pb-20'>
        <div>
          {children}
        </div>
      </div>
    </>
  );
}

function MenuLink({ children }: { children: string }) {
  return (<div className='text-sm delay-300 cursor-pointer hover:text-slate-700'>{children}</div>);
}
