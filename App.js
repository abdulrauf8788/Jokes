import { Button, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <View className="flex-1 pt-5">
      <View className="">
        <Text className="text-2xl w-100 p-4 mb-3 font-bold">Funny Jokes</Text>
        <View>
          <Text className="text-lg px-4 py-2">
            Why can't a bicycle stand on its own? It's two-tired.
          </Text>
        </View>

        <View className="flex-row p-4 mt-4">
          <View className="w-64 border-2 items-center p-3 rounded-lg">
            <Text className="font-bold ">New Joke</Text>
          </View>
          <TouchableOpacity className=" ml-3 rounded-lg items-center p-3 border-2 ">
            <AntDesign name="like2" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="p-4 mt-8">
        <Text className="text-xl font-bold mb-3">Recent Jokes</Text>
        <Text className="py-2 text-base">
          What’s brown and sounds like a bell? Dung!
        </Text>
        <Text>
          Sgt.: Commissar! Commissar! The troops are revolting! Commissar: Well,
          you’re pretty repulsive yourself.
        </Text>
      </View>
    </View>
  );
}
