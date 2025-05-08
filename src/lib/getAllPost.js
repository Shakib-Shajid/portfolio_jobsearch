
export default async function getAllPosts (){
    const result = await fetch('http://localhost:3000/jobs/api/getAll')
    const data = result.json();
    return data;
}
