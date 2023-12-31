'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const SearchBox = () => {
  const [input, setInput] = useState<string>('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    router.push(`/search?term=${input}`);
  };

  return (
    <form className="max-w-6xl mx-auto flex justify-between items-center px-10" onSubmit={handleSearch}>
      <input type="text" onChange={(e) => setInput(e.target.value)} placeholder="Search Keywords..." className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:text-orange-400" />
      <button type="submit" value={input} disabled={!input} className="text-orange-400 disabled:text-gray-400">
        Search
      </button>
    </form>
  );
};
