const axios = require("axios");

async function getCoordinatesFromAddress(address) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${encodeURIComponent(
    address
  )}`;

  try {
    const response = await axios.get(url);
    if (response.data && response.data.length > 0) {
      const firstResult = response.data[0];
      const lat = firstResult.lat;
      const lon = firstResult.lon;
      return { latitude: lat, longitude: lon };
    } else {
      throw new Error("No results found for the address");
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    return null;
  }
}

// Пример использования функции
const address = "Москва народного ополчения 22";
getCoordinatesFromAddress(address).then((coordinates) => {
  if (coordinates) {
    console.log("Coordinates:", coordinates);
  } else {
    console.log("Coordinates not found");
  }
});
