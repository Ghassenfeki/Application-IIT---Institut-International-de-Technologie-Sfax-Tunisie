import { View, Text } from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';


const ContactsScreen = () => {
    

  return (
    <View>
      <Text className="text-3xl left-8 top-16 ">Contacts</Text>
      <Text className="text-xl left-8 top-24 ">Institut International Technologie (IIT)</Text>
      <View className="-bottom-36 left-12">
      <Text className="text-lg">Route Mharza km 1,5 Sfax</Text>
      <Text className="text-lg">Tel: (+216) 74 46 50 20</Text>
      <Text className="text-lg">email: info@iit.tn</Text>
      </View>
      <View>
    <MapView
        initialRegion={{
                latitude : 34.730745,
                longitude:10.740542,
                latitudeDelta: 0.04,
                longitudeDelta: 0.05,
    }} className="w-96 h-96 left-4 -bottom-64" />
     
    </View> 
      
    </View>
  
  )
}

export default ContactsScreen