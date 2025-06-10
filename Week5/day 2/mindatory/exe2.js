const url = "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

async function fetchGifs() {
  try {
    
    const response = await fetch(url);

    
    if (!response.ok) {
      
      throw new Error(`Error: ${response.status}`);
    }

    
    const data = await response.json();

    
    console.log("10 gifs starting from position 2:", data);

  } catch (error) {
    
    console.error("Caught error:", error);
  }
}


fetchGifs();