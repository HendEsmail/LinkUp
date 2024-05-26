export const getPosts = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };
  try {
    const response = await fetch(
      'https://gorest.co.in/public/v2/posts',
      options,
    ).then(res => res.json());
    return response;
  } catch (error) {
    throw error;
  }
};
