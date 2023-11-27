import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useState } from 'react'

import Main from 'screens/MainComponent'
import LoginScreen from 'screens/Login/LoginScreen'

export default function App() {
    const [loggedIn, setLoggedIn] = useState(false) //temp for testing conditional, use redux later

    return (
        <NavigationContainer>
            {loggedIn ? <Main /> : <LoginScreen setLoggedIn={setLoggedIn} />}
        </NavigationContainer>
    )
}
//work with this later
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
