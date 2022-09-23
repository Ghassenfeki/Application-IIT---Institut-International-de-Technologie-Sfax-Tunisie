import { View, Text,ScrollView,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 


const DocumentsScreen = () => {
  const navigation=useNavigation();
  return (
    <ScrollView>
 <View > 
    <Image className=" -bottom-20  -right-20 opacity-80" source={require('./logo.png')} />
    <TouchableOpacity 
                  onPress={navigation.goBack} 
                  className="absolute top-20 left-7 p-3  bg-gray-200 rounded-full  ">
                  <AntDesign name="stepbackward" size={24} color="black" /> 
        </TouchableOpacity>
    </View> 
 <View className="absolute top-80  w-full z-40">
    <TouchableOpacity onPress={()=> navigation.navigate("Passer")} 
    className="bg-[#bd8a13] mx-10 p-2 rounded-3xl flex-row">
      <Text className="flex-1 text-white font-extrabold  text-2xl text-center">Passer une demande
      </Text>  
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("Suivre")} 
    className="bg-[#bd8a13] mx-10 p-2 top-40 rounded-3xl flex-row">
      <Text className="flex-1 text-white font-extrabold  text-2xl text-center">Suivre une demande
      </Text>  
      </TouchableOpacity>
    </View>
</ScrollView>
    
  )
}

export default DocumentsScreen