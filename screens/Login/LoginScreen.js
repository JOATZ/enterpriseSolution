import {
    Image,
    Button,
    TextInput,
    Text,
    StyleSheet,
    View,
    Platform
} from 'react-native'
import Constants from 'expo-constants'
import { Formik } from 'formik'
import logo from 'assets/image/logo2nbg.png'

const LoginScreen = (props) => {
    return (
        <View style={styles.loginScreen}>
            <Image source={logo} style={styles.logo} />
            <Formik
                initialValues={{
                    username: 'Just Press Login, This Will Validate Later',
                    password: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                    props.setLoggedIn(true)
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <View>
                            <Text>Username</Text>
                            <TextInput
                                style={styles.loginField}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                                placeholder='Enter Username'
                            />
                        </View>
                        <View>
                            <Text>Password</Text>
                            <TextInput
                                style={styles.loginField}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                placeholder='Enter Password'
                                secureTextEntry
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button onPress={handleSubmit} title='Login' />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    loginScreen: {
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
        flex: 1
    },
    loginField: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 7,
        marginBottom: 10
    },
    logo: {
        alignSelf: 'center',
        width: 300,
        height: 300,
        resizeMode: 'contain'
    },
    buttonContainer: {
        padding: 20
    }
})

export default LoginScreen
