import { NewsList } from '@/components';
import { fetchNews } from '@/lib';
import { categories } from '@/constants';

type Props = {
  params: { category: Category };
};
export default async function Page({ params: { category } }: Props) {
  const news = await fetchNews(category);
  return (
    <main>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </main>
  );
}

export const generateStaticParams = async () => {
  return categories.map((category) => ({ category }));
};
