import axios from 'axios';

export default async function getAllPosts() {
  try {
    const response = await axios.get('http://localhost:3000/jobs/api/getAll');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch posts:', error.message);
    return { users: [] }; // or throw error if you want it to bubble up
  }
}
