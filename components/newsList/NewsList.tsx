import { Article } from '..';

type Props = {
  news: NewsResponse;
};

export const NewsList = ({ news }: Props) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-10 gap-10">
      {news.data.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </section>
  );
};
