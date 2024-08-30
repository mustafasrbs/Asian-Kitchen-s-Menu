fetch('./menu.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('Fetched Data:', data);
    // JSON verisini işlemek için buraya kod ekleyin
  })
  .catch(error => {
    console.error('Fetch operation failed:', error);
  });