import React from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import getRandomJokeFromServer from "../api/jokesApi";
import { useEffect, useState } from "react";
// Fonts
import { Feather } from "@expo/vector-icons";

const Joke = () => {
  const [activeJoke, setActiveJoke] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getNewJoke();
  }, []);

  const getNewJoke = async () => {
    setLoading(true);
    const joke = await getRandomJokeFromServer();
    setLoading(false);
    setActiveJoke(joke.joke);
  };

  return (
    <View className="flex items-center">
      <View className="items-end w-80 mt-4">
        <Feather name="info" size={28} color="black" />
      </View>
      <View className="items-center pt-10">
        {!loading ? (
          <Text className="text-lg px-4 py-2 w-80 text-center">
            {activeJoke}
          </Text>
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
  );
};

export default Joke;
