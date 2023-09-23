import { categories } from '@/constants';
import { fetchNews } from '@/lib';

export default async function Home() {
  //fetch news data
  const news: NewsResponse = await fetchNews(categories.join(','));
  console.log(news.myQuery.data);

  return (
    <main>
      <h1>HomePage</h1>
    </main>
  );
}
