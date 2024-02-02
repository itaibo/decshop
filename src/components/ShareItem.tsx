'use client'

import * as Database from '@/infrastructure/database';
import { baseUrl } from '@/constants';

import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  XIcon,
  WhatsappIcon,
} from 'react-share';

export function ShareItem({ product }: { product: Database.Product }) {
  const url = `${baseUrl}/items/${product.id}`;

  return (
    <>
      <div className='text-sm'>Comparte el producto</div>

      <div className='flex mt-2 items-center justify-center gap-1'>
        <EmailShareButton
          url={url}
        >
          <EmailIcon size={32} round={true} />
        </EmailShareButton>

        <WhatsappShareButton
          url={url}
        >
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>

        <FacebookShareButton
          url={url}
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>

        <TwitterShareButton
          url={url}
        >
          <XIcon size={32} round={true} />
        </TwitterShareButton>
      </div>
    </>
  );
}