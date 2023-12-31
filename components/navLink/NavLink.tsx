import Link from 'next/link';

type Props = {
  category: string;
  isActive: boolean;
};

export const NavLink = ({ category, isActive }: Props) => (
  <Link href={`/news/${category}`} className={`navLink ${isActive && 'underline decoration-orange-400 underline-offset-4 font-bold'}`}>
    {category}
  </Link>
);
