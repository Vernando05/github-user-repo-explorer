import type { ReactNode } from 'react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Link from 'next/link';

type TheCardPropsValue = {
  children?: ReactNode;
  title?: string;
  subtitle?: string | null;
};

const TheCard = ({ children, title, subtitle }: TheCardPropsValue) => (
  <Card
    className="mb-4 group-hover:bg-slate-700 group-hover:text-white transition-all ease-in-out"
  >
    <CardHeader>
      <div className="flex justify-between items-center">
        <CardTitle>{title}</CardTitle>
        <div className="my-0!">
          {children}
        </div>
      </div>
      {
        subtitle && <CardDescription className="group-hover:text-gray-300">{subtitle}</CardDescription>
      }
    </CardHeader>
  </Card>
);

type CardCustomPropsValue = {
  target?: string;
  url?: string;
} & TheCardPropsValue;

const CardCustom = ({ url, target = '_self', ...props }: CardCustomPropsValue) => {
  return url
    ? (
        <Link
          href={url}
          target={target}
          className="group"
        >
          <TheCard {...props} />
        </Link>
      )
    : <TheCard />;
};

export default CardCustom;
