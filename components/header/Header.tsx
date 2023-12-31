import { Bars3Icon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { DarkModeButton, NavLinks } from '..';
import { SearchBox } from '..';

export const Header = () => (
  <header>
    <div className="grid grid-cols-3 p-10 items-center">
      <Bars3Icon className="w-8 h-8 cursor-pointer" />
      <Link href="/" prefetch={false}>
        <h1 className="font-serif text-3xl md:text-4xl text-center underline underline-offset-2 decoration-6 decoration-orange-600">Gismo&rsquo;s Gazet</h1>
      </Link>

      <div className="flex items-center justify-end space-x-6">
        <DarkModeButton />
        <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">Subscribe Now</button>
      </div>
    </div>
    <NavLinks />
    <SearchBox />
  </header>
);
