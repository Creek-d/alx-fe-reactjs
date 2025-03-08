import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
  // ✅ Fix: Include missing options (cacheTime, refetchOnWindowFocus, keepPreviousData)
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 60000, // Data remains fresh for 1 minute
    cacheTime: 300000, // Data remains in cache for 5 minutes (300000ms)
    refetchOnWindowFocus: false, // Avoid refetching when window gains focus
    keepPreviousData: true, // Avoids flashing "Loading..." state when refetching
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
