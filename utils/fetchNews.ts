import axios from 'axios';

export async function fetchNews(query = '') {
  const url = `https://newsapi.org/v2/everything?q=${query || 'tech'}&apiKey=5d0262e362104b8188a31e610ea309bb`;
  const { data } = await axios.get(url);
  return data.articles;
}
