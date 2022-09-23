import { View, TouchableOpacity, Text,ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import RestaurantsCard from '../Components/Notes';


const Sys2Screen = () => {
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
                className="bg-gray-300 top-52 mx-2  p-4 rounded-lg flex-row">
                <Text className="flex-1 text-white text-center text-xl ">Module </Text>
                <Text className="flex-1 text-white  text-center text-xl ">Evaluation</Text>
                <Text className="flex-1 text-white text-center text-xl ">Note</Text>
              </View>
              <ScrollView style={{height:600 ,bottom:-220}}>        
                <RestaurantsCard

                      id={123}
                      
                      Module="systeme "
                      Evaluation="examen"
                      Note="15"
                     
                />
                <RestaurantsCard

                      id={123}
                      
                      Module="systeme d'exploihiuhihhihhi"
                      Evaluation="examen"
                      Note="15"
                     
                />
                 <RestaurantsCard

id={123}

Module="systeme d'exploihiuhihhihhi"
Evaluation="examen"
Note="15"

/>
<RestaurantsCard

id={123}

Module="systeme d'exploihiuhihhihhi"
Evaluation="examen"
Note="15"

/>
<RestaurantsCard

id={123}

Module="systeme d'exploihiuhihhihhi"
Evaluation="examen"
Note="15"

/>
<RestaurantsCard

id={123}

Module="systeme d'exploihiuhihhihhi"
Evaluation="examen"
Note="15"

/>


<RestaurantsCard

id={123}

Module="systeme d'exploihiuhihhihhi"
Evaluation="examen"
Note="15"

/>


<RestaurantsCard

id={123}

Module="systeme d'exploihiuhihhihhi"
Evaluation="examen"
Note="15"

/>
<RestaurantsCard

id={123}

Module="systeme d'exploihiuhihhihhi"
Evaluation="examen"
Note="15"

/>
<RestaurantsCard

id={123}

Module="systeme d'exploihiuhihhihhi"
Evaluation="examen"
Note="15"

/>
<RestaurantsCard

id={123}

Module="systeme d'exploihiuhihhihhi"
Evaluation="examen"
Note="15"

/>
<RestaurantsCard

id={123}

Module="systeme d'exploihiuhihhihhi"
Evaluation="examen"
Note="15"

/>



</ScrollView>  


  </View>
  )
}

export default Sys2Screen