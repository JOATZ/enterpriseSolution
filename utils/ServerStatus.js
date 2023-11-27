import { View, Text, Image } from 'react-native'
import { Icon } from 'react-native-elements'

const status = 'OK'
const ServerStatus = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Server Status</Text>
            <Icon
                style={{ marginLeft: 20 }}
                name='server'
                type='font-awesome'
            />
        </View>
    )
}

export default ServerStatus
