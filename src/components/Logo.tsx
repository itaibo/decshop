import logo from '/public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export function Logo(props: { small?: boolean, className?: string }) {
  return (
    <Link href={'/'}>
      <Image
        alt={'Decashop'}
        src={logo}
        height={props.small ? 40 : 60}
        className={props.className || ''}
        priority={true}
      ></Image>
    </Link>
  );
}
