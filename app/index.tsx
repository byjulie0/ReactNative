import { View, Text,Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Index() {
  return (
    <View className="flex-1 bg-gray-100 p-4">
      <View className="flex-row justify-between items-center mb-4">
        <AntDesign name="left" size={24} color="black" />
        <View className="flex-row gap-6">
          <MaterialIcons name="confirmation-number" size={24} color="#f24690" />
          <MaterialIcons name="shopping-cart" size={24} color="#f24690" />
        </View>
      </View>
      <View className=" flex-row justify-between">
        <Text className="font-bold text-lg">Best Dress Collection</Text>
        <Text className="font-light text-xs pr-2">8250 items</Text>
      </View>

      <View className="flex-row flex-wrap items-center gap-2 bg-white p-2 rounded-2xl mt-2">
        <Text className="flex-row items-center bg-gray-200 px-2 py-1 rounded-xl text-xs">
          Category <AntDesign name="down" size={12} color="black" />
        </Text>
        <Text className="flex-row items-center bg-gray-200 px-2 py-1 rounded-xl text-xs">
          Color <AntDesign name="down" size={12} color="black" />
        </Text>
        <Text className="flex-row items-center bg-gray-200 px-2 py-1 rounded-xl text-xs">
          Size <AntDesign name="down" size={12} color="black" />
        </Text>
        <Text className="flex-row items-center bg-gray-200 px-2 py-1 rounded-xl text-xs">
          Price <AntDesign name="down" size={12} color="black" />
        </Text>
        <Text className="flex-row items-center bg-gray-200 px-2 py-1 rounded-xl text-xs">
          More <AntDesign name="down" size={12} color="black" />
        </Text>
      </View>
      <View className="h-50 w-40 flex flex-col flex-wrap bg-white mt-3">
      <Image className="w-1 h-1 flex ml-4 mr-4" source={require('../assets/images/vestido_verde.png')} resizeMode="contain"/>
      
        
      </View>
    </View>
  );
}