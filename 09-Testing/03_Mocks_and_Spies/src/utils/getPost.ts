type Post = {
  id: number;
  title: string;
  body: string;
};

export const getPost = async (id: number) => {
  console.log(`Fetching post with ID: ${id}`);

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error(`Network error: ${res.statusText}`);
  }
  return (await res.json()) as Post;
};

getPost(1);
