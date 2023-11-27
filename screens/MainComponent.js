import { Image, Platform, View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import Constants from 'expo-constants'
import { createStackNavigator } from '@react-navigation/stack'
import ServerStatus from 'utils/ServerStatus'

import logo from 'assets/image/logo2nbg.png'

const HomeNavigator = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
        </Stack.Navigator>
    )
}

const DirectoryNavigator = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator
            initialRouteName='Directory'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Directory'
                component={DirectoryScreen}
                options={{ title: 'Campsite Directory' }}
            ></Stack.Screen>
            <Stack.Screen
                name='CampsiteInfo'
                component={CampsiteInfoScreen}
                options={({ route }) => ({
                    title: route.params.campsite.name
                })}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}

const Main = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image source={logo} style={styles.image} />
                    <View style={styles.statusContainer}>
                        <Text style={styles.usernameText}>
                            Username of LoggedIn
                        </Text>
                        <ServerStatus />
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title='Pull Inventory'
                    raised
                    buttonStyle={styles.button}
                />
                <Button title='Pull List' raised buttonStyle={styles.button} />
                <Button title='Sales' raised buttonStyle={styles.button} />
                <Button title='Planner' raised buttonStyle={styles.button} />
                <Button title='My Stats' raised buttonStyle={styles.button} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black'
    },
    image: {
        flex: 2,
        resizeMode: 'contain'
    },
    statusContainer: {
        flex: 3,
        alignItems: 'flex-end',
        paddingRight: 30
    },
    usernameText: {
        fontSize: 20,
        paddingBottom: 10
    },
    buttonContainer: {
        flex: 4,
        justifyContent: 'start'
    },
    button: {
        padding: 10,
        backgroundColor: 'grey',
        alignSelf: 'stretch',
        margin: 20,
        height: 50
    }
})

export default Main
