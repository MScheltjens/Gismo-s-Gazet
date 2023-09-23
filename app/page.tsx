import { NewsList } from '@/components';
import { categories } from '@/constants';
import { fetchNews } from '@/lib';
import response from '../response.json';

export default async function Home() {
  const news: NewsResponse = response || (await fetchNews(categories.join(',')));

  return (
    <main>
      <NewsList news={news} />
    </main>
  );
}
