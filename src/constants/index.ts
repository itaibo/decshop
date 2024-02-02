export const baseUrl = 
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ?
      'https://decashop.vercel.app'
    :
      'http://localhost:3000';
