export const sortNewsByImage = (news: NewsResponse) => {
  const newsWithImage = news.data.filter((article) => article.image !== null);
  const newsWithoutImage = news.data.filter((article) => article.image === null);
  return {
    data: [...newsWithImage, ...newsWithoutImage],
    pagination: news.pagination,
  };
};
