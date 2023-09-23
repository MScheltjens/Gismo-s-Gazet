type Article = {
  author: string | null;
  category: string;
  country: string;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};

type Pagination = {
  count: Int;
  offset: Int;
  limit: Int;
  total: Int;
};

type NewsResponse = {
  myQuery: {
    pagination: Pagination;
    data: Article[];
  };
};

type Category = 'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology';
