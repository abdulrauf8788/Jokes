import {
  ActivityIndicator,
  Button,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import getRandomJokeFromServer from "./api/jokesApi";
import { useEffect, useState } from "react";

export default function App() {
  const [activeJoke, setActiveJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const getNewJoke = async () => {
    setLoading(true);
    const joke = await getRandomJokeFromServer();
    setLoading(false);
    setActiveJoke(joke.joke);
  };

  useEffect(() => {
    getNewJoke();
  }, []);

  return (
    <View className="flex-1 pt-8">
      <View className="">
        <Text className="text-2xl w-100 p-4 mb-3 font-bold">Funny Jokes</Text>
        <View>
          {!loading ? (
            <Text className="text-lg px-4 py-2 w-80">{activeJoke}</Text>
          ) : (
            <ActivityIndicator size="large" color="#000" />
          )}
        </View>

        <View className="flex-row p-4 mt-4">
          <TouchableOpacity
            onPress={getNewJoke}
            className="w-64 border-2 items-center p-3 rounded-lg"
          >
            <Text className="font-bold ">New Joke</Text>
          </TouchableOpacity>
          <TouchableOpacity className=" ml-3 rounded-lg items-center p-3 border-2 ">
            <AntDesign name="like2" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="p-4 mt-8">
        <Text className="text-xl font-bold mb-3">Recent Jokes</Text>
        <Text className="py-2 text-base border-b">
          What’s brown and sounds like a bell? Dung!
        </Text>
        <Text className="py-2 text-base border-b">
          Sgt.: Commissar! Commissar! The troops are revolting! Commissar: Well,
          you’re pretty repulsive yourself.
        </Text>
      </View>
    </View>
  );
}
