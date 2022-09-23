import { View, TouchableOpacity, Text,ScrollView,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import Documents from '../Components/Documents';


const SuivreScreen = () => {
  const navigation=useNavigation();
  return (
  <View>
       <TouchableOpacity 
                  onPress={navigation.goBack} 
                  className="absolute top-20 left-7 p-3  bg-gray-400 rounded-full  ">
                  <AntDesign name="stepbackward" size={24} color="black" /> 
        </TouchableOpacity>
        
             <Text className="text-3xl top-40 text-center ">Notes</Text>
             

             <View 
                className="bg-blue-300 top-52 mx-2  p-4 rounded-lg flex-row">
                <Text className="flex-1 text-white  text-xl ">Documents </Text>
                <Text className="flex-1 text-white   text-xl ">Date</Text>
                <Text className="flex-1 text-white text-center text-xl ">Etat</Text>
              </View>
              <ScrollView style={{height:600 ,bottom:-220}}>        
                <Documents
                      id={123}
                      
                      Documents="systeme "
                      Date="14/09/2022"
                      Etat="15"  
                />
               
<Image className="top-20 left-20 opacity-40" source={require('./logo.png')} />

</ScrollView>  


  </View>
  )
}

export default SuivreScreen