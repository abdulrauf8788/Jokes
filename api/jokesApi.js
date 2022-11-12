// GET https://icanhazdadjoke.com/
const API_SERVER_LINK = "https://icanhazdadjoke.com/";

const getRandomJokeFromServer = async () => {
  let jsonData = await fetch(API_SERVER_LINK, {
    headers: { Accept: "application/json" },
  }).then((res) => res.json());
  return jsonData;
};

export default getRandomJokeFromServer;
