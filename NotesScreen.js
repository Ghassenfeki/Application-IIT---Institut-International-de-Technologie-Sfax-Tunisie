import { View, Text ,TouchableOpacity,Image,ScrollView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 


const NotesScreen = () => {
  const navigation=useNavigation();
  return (
    

   

 <View className="absolute  bottom-56 top-90 w-full z-40">
   <TouchableOpacity 
                  onPress={navigation.goBack} 
                  className="absolute -top-80 left-7 p-3  bg-gray-200 rounded-full  ">
                  <AntDesign name="stepbackward" size={24} color="black" /> 
        </TouchableOpacity>
        
  <Image className=" bottom-60  -right-20 opacity-80" source={require('./logo.png')} />
    <TouchableOpacity onPress={()=> navigation.navigate("NotesSy1")} 
    className="bg-[#ffe099] mx-5 bottom-40 p-4 rounded-xl flex-row">
      <Text className="flex-1 text-white font-extrabold  text-2xl text-center">Semestre I
      </Text>
       
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("NotesSy2")} 
    className="bg-[#ffe099] mx-5 p-4  bottom-12 rounded-xl flex-row">
      <Text className="flex-1 text-white font-extrabold  text-2xl text-center">Semestre I
      </Text>
       
      </TouchableOpacity>
    </View>

  )
}

export default NotesScreen