import { Logo } from '@/components/Logo'

export default function NotFound() {
  return (
    <div className='h-screen flex justify-center items-center flex-col gap-5'>
      <Logo small />
      <div>Página no encontrada</div>
    </div>
  );
}
