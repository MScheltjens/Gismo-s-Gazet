import { NewsList } from '@/components';
import { fetchNews } from '@/lib';

type Props = {
  searchParams?: { term: string };
};

export default async function Page({ searchParams }: Props) {
  const news: NewsResponse = await fetchNews('general', searchParams?.term, true);
  return (
    <main>
      <h1 className="headerTitle">Search: {searchParams?.term}</h1>
      <NewsList news={news} />
    </main>
  );
}
