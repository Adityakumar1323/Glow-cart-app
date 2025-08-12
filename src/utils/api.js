const API_URL = 'https://dummyjson.com/products';

export const getProducts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const json = await response.json();
    // Add a placeholder description if one doesn't exist
    return json.products.map(p => ({...p, description: p.description || "No description available for this product."}));
  } catch (error) {
    console.error('Failed to fetch products from API:', error);
    // You might want to throw the error to be handled by the caller
    throw error;
  }
};
