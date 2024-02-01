import { Logo } from '@/components/Logo';
import { Search } from '@/components/Search';

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <div className='border-b p-3 pl-10 flex gap-10'>
        <Logo small />
        <Search className='max-w-[300px]' />
      </div>
      <div>
        {children}
      </div>
    </>
  );
}
