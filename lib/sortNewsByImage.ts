export const sortNewsByImage = (news: NewsResponse) => {
  const newsWithImage = news.myQuery.data.filter((article) => article.image !== null);
  const newsWithoutImage = news.myQuery.data.filter((article) => article.image === null);
  return {
    myQuery: {
      data: [...newsWithImage, ...newsWithoutImage],
      pagination: news.myQuery.pagination,
    },
  };
};
