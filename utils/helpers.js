const fetchAnimation = async (url) => {
  if (!url) {
    console.error("Empty URL provided.");
    return null;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching animation data:", error);
    return null;
  }
};

export {
  fetchAnimation,
};