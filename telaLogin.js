import { useState } from 'react';
import { Pressable, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign }from '@expo/vector-icons';

function TelaLogin({navigation}) {
    const [isSenha, setIsSenha] = useState(true);

    return (
      <View style={styles.fundo}>
        <View style={styles.barraSuperpeior}>
            <View style={styles.cardapio}>
                <Pressable>
                    <Text style={styles.txt}>Cardápio</Text>
                </Pressable>
            </View>

            <View style={styles.nome}>
                <Text style={styles.txt}>Cardápio da Jô</Text>
            </View>

            <View style={styles.cadastrar}>
                <Text style={styles.txt}>Cadastrar</Text>
            </View>
        </View>

        <View style={styles.form}>
            <TextInput
                style={styles.receberTxt}
                placeholder='Usuário'
                />

            <View style={styles.viewSenha}>
                <TextInput
                    style={styles.receberSenha}
                    placeholder='Senha'
                    secureTextEntry={isSenha}
                    />

                <TouchableOpacity onPress={() => setIsSenha(!isSenha)}>
                    <AntDesign name='eye' size={24} color='#505050'/>
                </TouchableOpacity>
            </View>

            <Pressable>
                <View style={styles.entrar}>
                    <Text style={styles.txt}>ENTRAR</Text>
                </View>
            </Pressable>

            <Pressable>
                <Text style={styles.receberSenha}>recuperar senha</Text>
            </Pressable>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: '#E1E1E1',
    },
    barraSuperpeior: {
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
    cadastrar: {
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
    form: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff00'
    },
    receberTxt: {
        width: 246,
        height: 50,
        outlineStyle: 'none',
        color: '#000000',
        backgroundColor: '#C1C1C1',
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        marginBottom: 9,
    },
    viewSenha: {
        width: 246,
        height: 50,
        backgroundColor: '#c1c1c1',
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        marginBottom: 9,
        flexDirection: 'row',
        alignItems: 'center',
    },
    receberSenha:{
        width: 246,
        height: 50,
        color: '#000000',
        flex: 1,
    },
    entrar: {
        width: 246,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B31212',
        borderRadius: 8,
    },
    recuperarSenha: {
        padding: 10,
    },
})

export default TelaLogin;