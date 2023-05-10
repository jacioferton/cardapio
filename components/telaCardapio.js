import { Text, View, Pressable, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import DATA from './produtos.js';

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
    <View style={styles.card}>
        <Image
            style={styles.foto}
        />
        <View>
            <Text style={styles.titulo}>{nome}</Text>
            <Text style={styles.preco}>R$: {preco.toFixed(2)}</Text>
            <Text style={styles.descricao}>{descricao}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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
    foto: {
        height: 100,
        width: 100,
        backgroundColor: '#D1D1D1',
    },
    titulo: {
        fontWeight: 900,
        fontSize: 24,
        marginLeft: 10,
    },
    preco: {
        marginLeft: 10,
    },
    descricao: {
        marginLeft: 10,
        marginEnd: 20,
    }
});

export default TelaCardapio;