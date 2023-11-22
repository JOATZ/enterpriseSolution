import { Platform, View, Text, Button } from 'react-native'
import Constants from 'expo-constants'
import { createStackNavigator } from '@react-navigation/stack'

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
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <Text>Test text</Text>
        </View>
    )
}

export default Main
