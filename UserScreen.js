import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import profile from './profile.png';
// Tab ICons...
import home from './home.png';
import notifications from './bell.png';
import settings from './settings.png';
import logout from './logout.png';
// Menu
import menu from './menu.png';
import close from './close.png';
import { useNavigation } from '@react-navigation/native';

// Photo

export default function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>

      <View style={{ justifyContent: 'flex-start', padding: 15 }}>
        <Image source={profile} style={{
          width: 70,
          height: 90,
          borderRadius: 10,
          marginTop: 8
        }}></Image>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 20
        }}>Ghassen Feki</Text>

        <TouchableOpacity>
          <Text style={{
            marginTop: 6,
            color: 'white'
          }}>View Profile</Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 50 }}>
        

          {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, "Notifications", notifications)}
          {TabButton(currentTab, setCurrentTab, "Settings", settings)}

        </View>

        <View>
          {TabButton(currentTab, setCurrentTab, "LogOut", logout)}
        </View>

      </View>

      {
        // Over lay View...
      }

      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: showMenu ? 15 : 0,
        // Transforming View...
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>

        {
          // Menu Button...
        }

        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
          <TouchableOpacity onPress={() => {
            // Do Actions Here....
            // Scaling the view...
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(offsetValue, {
              // YOur Random Value...
              toValue: showMenu ? 0 : 230,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(closeButtonOffset, {
              // YOur Random Value...
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(!showMenu);
          }}>
            <Image className="bottom-20 h-80 -left-4 " source={require('./bg1.png')} />
            <Image source={showMenu ? close : menu} style={{
              width: 20,
              height: 20,
              tintColor: 'white',
              bottom: 275,

            }}></Image>

            <Text className="text-3xl text-center -top-20 font-bold text-yellow-600 ">Acceuil</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("Notes")}><Image className="h-40  w-40 mx-4 bottom-12" source={require('./gr1.png')}   /></TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate("Documents")}><Image className="h-40  w-40 left-56 bottom-44 -mx-4" source={require('./gr2.png')} /></TouchableOpacity> 
            <TouchableOpacity onPress={()=> navigation.navigate("Emploi")}><Image className="h-40  w-40  bottom-48 mx-4" source={require('./gr3.png')} /></TouchableOpacity> 
            <TouchableOpacity onPress={()=> navigation.navigate("Payment")}><Image className="h-40  w-40 left-56 bottom-80 -mx-4" source={require('./gr4.png')} /></TouchableOpacity> 
            <TouchableOpacity onPress={()=> navigation.navigate("Contacts")}><Image className="bottom-80  left-4  " source={require('./button.png')} /></TouchableOpacity>

     
     
          </TouchableOpacity>
        
        
        </Animated.View>

      </Animated.View>
     
     
    </SafeAreaView>
  );
}

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (

    <TouchableOpacity onPress={() => {
      if (title == "LogOut") {
        // Do your Stuff...
      } else {
        setCurrentTab(title)
      }
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == title ? 'white' : 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={image} style={{
          width: 25, height: 25,
          tintColor: currentTab == title ? "#5359D1" : "white"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? "#5359D1" : "white"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2565AE',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
