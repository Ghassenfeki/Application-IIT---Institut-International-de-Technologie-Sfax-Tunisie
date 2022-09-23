import { View, Text,Switch,TextInput ,TouchableOpacity,Image} from 'react-native'
import React, { useState } from 'react';
import  SelectList  from  'react-native-dropdown-select-list';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 



const PasserScreen = () => {
  const navigation=useNavigation();
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isEnabled, setIsEnabled] = useState(false);

  const [selected, setSelected] = React.useState("");

  const data = [
    {key:'1',value:'attestation de presence'},
    {key:'2',value:'attestations de paiment'},
    {key:'3',value:'attestations d`inscription'},
    {key:'4',value:'attestation de réussites'},
    {key:'5',value:'demande de stage'},
    {key:'6',value:'Relevés de notes'},


  ];

  return (
    <View>
      <Text className="text-3xl top-40 text-center">Passer une demande</Text>
      <Text className="text-xs top-56 left-10 ">Type du Documents</Text>
      <TouchableOpacity 
                  onPress={navigation.goBack} 
                  className="absolute top-20 left-7 p-3  bg-gray-400 rounded-full  ">
                  <AntDesign name="stepbackward" size={24} color="black" /> 
        </TouchableOpacity>
      <View className="top-60 mx-9">

      <SelectList setSelected={setSelected} data={data}   />
      <Switch className='top-10'
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> 
      <Text className="left-14 top-4 text-base ">Urgent</Text>
      <Text className="left-0 top-28 text-3xl">Justifaction :</Text>
      <TextInput className='top-32 border-b-2 border-b-slate-400 px-3 py-2' placeholder='Justifier  pourqui c`est urgent' />
      <TouchableOpacity onPress={()=> navigation.navigate("Login")} 
              className="bg-[#bd8a13] top-44 mx-5 p-4 rounded-lg flex-row">
      <Text className="flex-1 text-white font-extrabold  text-2xl text-center">Valider</Text>
      </TouchableOpacity>
<Image className="bottom-40 left-11 opacity-30" source={require('./logo.png')} />

   </View>

    </View>
  )
}

export default PasserScreen