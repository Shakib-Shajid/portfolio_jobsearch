import axios from 'axios';

export default async function getAllPosts() {
  try {
    const response = await axios.get('https://portfolio-jobsearch.vercel.app/jobs/api/getAll');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch posts:', error.message);
    return { users: [] }; // or throw error if you want it to bubble up
  }
}
