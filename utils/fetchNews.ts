// import axios from 'axios';

// export async function fetchNews(query = '') {
//   const url = `https://newsapi.org/v2/everything?q=${query || 'tech'}&apiKey=5d0262e362104b8188a31e610ea309bb`;
//   const { data } = await axios.get(url);
//   return data.articles;
// }


import axios from 'axios';

export const fetchNews = async () => {
  try {
    const apiKey = "eb4c00650acd6ec4469ed71c8cbe17af";
    const response = await axios.get('https://gnews.io/api/v4/search', {
      params: {
        q: 'technology',
        token: apiKey,
        lang: 'en',
        max: 50,
      },
    });

    // Transform GNews format to expected format
    return response.data.articles.map((article: any) => ({
      title: article.title,
      description: article.description,
      url: article.url,
      imageUrl: article.image,
      publishedAt: article.publishedAt,
      author: article.source.name,
      type: 'news',
    }));
  } catch (error) {
    console.error('Error fetching GNews articles:', error);
    return [];
  }
};