import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';

const TabRoot = () => {
  return (
    <Tabs> 
        <Tabs.Screen name = "index" options={{
            title : "Home",
             tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
            }}/>
        <Tabs.Screen name = "about"options={{title : "About", tabBarIcon :({color,size}) =>{
            return (
                <View
                style = {{
                    width : 60,
                    height : 60,
                    borderRadius : 50,
                    backgroundColor : "blue",
                    bottom : 15,
                    justifyContent : "center",
                    alignItems : "center"

                }}
                >
               <AntDesign size={28} name="contacts" color={"white"} /> 
                </View>
            )
        }}}/>
        <Tabs.Screen name = "profile"options={{title : "Profile",tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />
    }}/>

    </Tabs>
  )
}

export default TabRoot