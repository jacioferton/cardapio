import { Pressable, Text, View } from 'react-native' 

function TelaCardapio({navigation}) {
    return (
        <View>
            <Pressable>
                <Text onPress ={ () => navigation.navigate('Login')}>EM BREVE!</Text>
            </Pressable>
        </View>
    );
};

export default TelaCardapio;