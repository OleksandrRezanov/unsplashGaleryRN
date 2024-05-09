export const getNormalizedData = (data: any[]) =>
  data.map(item => ({
    id: item.alternative_slugs.en,
    photoUrl: item.urls.regular,
    title: item.alt_description,
    author: item.user.name,
  }));
