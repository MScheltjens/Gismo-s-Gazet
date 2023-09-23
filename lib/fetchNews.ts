import { gql } from 'graphql-request';
import { sortNewsByImage } from '.';
export const fetchNews = async (category?: Category | string, keywords?: string, isDynamic?: boolean) => {
  // GraphQL query
  const query = gql`
    query MyQuery($access_key: String!, $categories: String!, $keywords: String) {
      myQuery(access_key: $access_key, categories: $categories, countries: "be", sort: "published_desc", keywords: $keywords) {
        data {
          author
          category
          country
          description
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          offset
          limit
          total
        }
      }
    }
  `;
  // Fetch function with next.js 13 caching
  const res = await fetch('https://dermbach.stepzen.net/api/getting-started/__graphql', {
    method: 'POST',
    cache: isDynamic ? 'no-cache' : 'default',
    next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
    },
    body: JSON.stringify({
      query,
      variables: {
        access_key: process.env.MEDIASTACK_ACCESS_KEY,
        categories: category,
        keywords,
      },
    }),
  });

  console.log('LOADING NEW DATA FROM API for category >>> ', category, keywords);

  const newsResponse = await res.json();
  // Sort function by images vs not images
  const news = sortNewsByImage(newsResponse.data);

  console.log('news', news);
  // return result
  return news;
};
