import { Image, Button, TextInput, Text, View, Platform } from 'react-native'
import Constants from 'expo-constants'
import { Formik } from 'formik'
import logo from 'assets/image/logo2nbg.png'

const loginScreenStyle = {
    alignContent: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
}

const loginFieldStyle = {
    borderWidth: 1,
    borderRadius: 5,
    padding: 7,
    marginBottom: 10
}

const logoStyle = {
    alignSelf: 'center',
    width: 300,
    height: 300,
    resizeMode: 'contain'
}

const LoginScreen = () => {
    return (
        <View
            style={{
                ...loginScreenStyle,
                flex: 1
            }}
        >
            <Image source={logo} style={logoStyle} />
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                onSubmit={(values) => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <View>
                            <Text>Username</Text>
                            <TextInput
                                style={loginFieldStyle}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                                placeholder='Enter Username'
                            />
                        </View>
                        <View>
                            <Text>Password</Text>
                            <TextInput
                                style={loginFieldStyle}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                placeholder='Enter Password'
                                secureTextEntry
                            />
                        </View>
                        <View style={{ padding: 20 }}>
                            <Button onPress={handleSubmit} title='Login' />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default LoginScreen
