import { categories } from '@/constants';
import { fetchNews } from '@/lib';

export default async function Home() {
  //fetch news data
  const news: NewsResponse = await fetchNews(categories[0]);
  console.log(news);

  return (
    <main>
      <h1>HomePage</h1>
    </main>
  );
}
