export async function fetchNotionData() {
  const url = '/.netlify/functions/fetch-notion';

  return await fetch(url, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}
