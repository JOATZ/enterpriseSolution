import { Text, View, Platform } from 'react-native'
import Constants from 'expo-constants'

const LoginScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <Text>This would be the login Screen</Text>
        </View>
    )
}

export default LoginScreen
