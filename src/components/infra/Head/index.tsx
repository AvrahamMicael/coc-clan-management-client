import NextHead from 'next/head';
import { ReactNode } from 'react';

type Props = { children: ReactNode };

export default function Head({ children }: Props) {
  return (
    <NextHead>
      {children}
    </NextHead>
  );
}
