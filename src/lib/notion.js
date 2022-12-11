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
    .then((data) =>
      data.results.map((speaker) => {
        return {
          complete: speaker.properties.Checkbox.checkbox,
          name: speaker.properties.Name.title[0].text.content,
        };
      })
    )
    .catch((error) => {
      console.error('Error:', error);
    });
}
