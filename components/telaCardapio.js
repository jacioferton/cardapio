import { Text, View, Pressable, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import DATA from './produtos.js';
import { List, Avatar } from 'react-native-paper';

function TelaCardapio({navigation}) {
    return (
        <View style={styles.fundo}>
            <View style={styles.barraSuperior}>
                <View style={styles.cardapio}>
                    <Pressable onPress ={ () => navigation.navigate('Login')}>
                        <Text style={styles.txt}>Login</Text>
                    </Pressable>
                </View>

                <View style={styles.nome}>
                    <Text style={styles.txt}>Cardápio da Jô</Text>
                </View>

                <View style={styles.login}>
                    <Pressable onPress={ () => navigation.navigate('Editar')}>
                        <Text style={styles.txt}>Editar</Text>
                    </Pressable>
                </View>
            </View>

            <SafeAreaView>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <Item
                    nome={item.nome}
                    preco={item.preco}
                    foto={item.foto}
                    descricao={item.descricao}
                    />}
                />
            </SafeAreaView>
        </View>
    );
};

const Item = ({nome, preco, foto, descricao}) => (
    <List.Item 
        style={styles.cardList}
        titleStyle={styles.titulo}
        descriptionStyle={styles.descricao}
        title={nome+' - R$ '+preco.toFixed(2)}
        description={descricao}
        descriptionNumberOfLines={4}

        left={()=><Avatar.Image
                source={{uri: foto}}
                style={styles.foto}
            />
        }
    />
);

const styles = StyleSheet.create({
    fundo: {
        backgroundColor: '#FFFFFF',
        paddingBottom: 25,
    },
    barraSuperior: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        backgroundColor: '#B31212',
    },
    cardapio: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flex: 1.5,
    },
    nome:{
        justifyContent: 'center',
    },
    login: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        flex: 1.5,
    },
    txt: {
        marginLeft: 8,
        marginRight: 8,
        color: '#FFFFFF',
        fontWeight: 900,
        fontSize: 16
    },
    card: {
        height: 120,
        backgroundColor: '#E1E1E1',
        marginHorizontal: 12,
        marginVertical: 2,
        flexDirection: 'row',
        padding: 10,
    },
    titulo: {
        fontWeight: 900,
        fontSize: 24,
    },
    descricao: {
        marginRight: 10,
        fontSize: 12,
    },
    cardList: {
        paddingHorizontal: 10,
    },
});

export default TelaCardapio;