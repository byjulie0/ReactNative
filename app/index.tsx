import { View, Text,Image} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Index() {
  return (
    <View className="flex-1 bg-gray-100">
      <View className="flex-row justify-between items-start pt-4 px-4">
        <AntDesign name="left" size={24} color="black" />
        <View className="flex-row">
          <MaterialIcons name="confirmation-number" size={24} color="#f24690" className="ml-10" />
          <MaterialIcons name="shopping-cart" size={24} color="#f24690" className="ml-10" />
        </View>
      </View>
      <View className="flex-row justify-between items-start ">
        <Text className="font-bold text-2xl ml-8 ">Best Dress Collection</Text>
        <Text className=" font-light text-base mr-3">8250 itens</Text>
      </View>
      <View className="flex-row justify-between items-start bg-white ml-8">
        <Text>Category</Text>

      </View>
    </View>
  );
}