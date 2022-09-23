import { View, ScrollView ,Image,Text, TextInput,TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../hooks/useAuth';

const LoginScreen = () => {
  const navigation = useNavigation();
 const {user} = useAuth();
 console.log(user);
  return (
    <ScrollView>

    <View > 
        <Image  source={require('./bg1.png')} />
    </View>
    <View>
    <Image  source={require('./logo.png')}
            className="relative mx-20 top-0 h-32 w-60"
     />
     
    </View>
    <View className="-bottom-28 z-40 top-16 mx-8">
    <Text className="flex-1 bottom-3 text-blue-900 font-extrabold  text-3xl ">Welcome Back</Text>
    <Text className="flex-1 text-gray-400 font-extrabold  text-l left-6 ">Log in your account</Text>
    <TextInput className='top-10 border-b-2 border-b-slate-400 px-3 py-2' placeholder='UserName' />
    <TextInput className='top-16 border-b-2 border-b-slate-400 px-6 py-2' placeholder='Password' />
    <Text className="flex-1 top-20 left-60 text-gray-500 font-extrabold  text-xs">Forget Password</Text>
    <TouchableOpacity onPress={()=> navigation.navigate("User")} 
    className="bg-[#bd8a13] top-24 left-32 mx-28 p-2 rounded-lg flex-row">
      <Text className="flex-1 text-white font-extrabold  text-2xl text-center">Log in </Text>
       
      </TouchableOpacity>

    </View>
    
    </ScrollView>
  )
}

export default LoginScreen