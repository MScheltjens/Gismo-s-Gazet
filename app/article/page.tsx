import { LiveTimeStamp } from '@/components';
import { notFound } from 'next/navigation';

type PageProps = {
  searchParams?: Article;
};

export default function Page({ searchParams }: PageProps) {
  if ((searchParams && Object.entries(searchParams).length === 0) || !searchParams) return notFound();

  const { image, title, author, source, published_at, description }: Article = searchParams;

  return (
    <main>
      <article className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {image !== 'null' && image !== null && <img src={image} alt={title} className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md" />}
        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">{title}</h1>
          <div className="flex">
            {author !== 'null' && <h2>{author}</h2>}
            <h2>Source: {source} -</h2>
            <p className="pl-4">
              <LiveTimeStamp time={published_at} />
            </p>
          </div>
          <p className="p-4">{description}</p>
        </div>
      </article>
    </main>
  );
}
