import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Main from './screens/MainComponent'

export default function App() {
    return (
        <NavigationContainer>
            <Main />
        </NavigationContainer>
    )
}

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
