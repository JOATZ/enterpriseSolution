import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Main from 'screens/MainComponent'
import LoginScreen from 'screens/Login/LoginScreen'

const loggedIn = false //temp for testing conditional, use redux later

export default function App() {
    return (
        <NavigationContainer>
            {loggedIn ? <Main /> : <LoginScreen />}
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
