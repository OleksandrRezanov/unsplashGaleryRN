export const getNormalizedData = (data: any[]) => {
  return data.map(item => {
    return {
      id: item.alternative_slugs.en,
      photoUrl: item.urls.regular,
      title: item.alt_description,
      author: item.user.name,
    };
  });
};
