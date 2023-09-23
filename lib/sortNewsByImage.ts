export const sortNewsByImage = (news: NewsResponse) => {
  console.log('news', news);
  const newsWithImage = news.myQuery.data.filter((article) => article.image !== null);
  const newsWithoutImage = news.myQuery.data.filter((article) => article.image === null);
  return {
    data: [...newsWithImage, ...newsWithoutImage],
    pagination: news.myQuery.pagination,
  };
};
