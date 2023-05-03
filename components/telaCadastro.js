import { useState } from 'react';
import { Pressable, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign }from '@expo/vector-icons';

function TelaCadastro({navigation}) {
    const [isSenha, setIsSenha] = useState(true);
    
    return (
        <View style={styles.fundo}>
            <View style={styles.barraSuperior}>
                <View style={styles.cardapio}>
                    <Pressable onPress ={ () => navigation.navigate('Cardapio')}>
                        <Text style={styles.txt}>Cardápio</Text>
                    </Pressable>
                </View>

                <View style={styles.nome}>
                    <Text style={styles.txt}>Cardápio da Jô</Text>
                </View>

                <View style={styles.login}>
                    <Pressable onPress={ () => navigation.navigate('Login')}>
                        <Text style={styles.txt}>Login</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.form}>
                <Text style={styles.titulo}>Nome</Text>
                <TextInput style={styles.receberTxt} placeholder="Insira seu nome" />

                <Text style={styles.titulo}>Sobrenome</Text>
                <TextInput style={styles.receberTxt} placeholder="Insira seu sobrenome" />

                <Text style={styles.titulo}>Email</Text>
                <TextInput style={styles.receberTxt} placeholder="Insira seu e-mail" />

                <Text style={styles.titulo}>Senha</Text>
                <View style={styles.viewSenha}>
                    <TextInput
                    style={styles.receberSenha}
                    placeholder="Informe sua senha"
                    secureTextEntry={isSenha}
                    />

                    <TouchableOpacity onPress={() => setIsSenha(!isSenha)}>
                        <AntDesign name="eye" size={24} color="#505050" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.titulo}>Confrimação de senha</Text>
                <View style={styles.viewSenha}>
                    <TextInput
                        style={styles.receberSenha}
                        placeholder="Confirme sua senha"
                        secureTextEntry={isSenha}
                    />

                    <TouchableOpacity onPress={() => setIsSenha(!isSenha)}>
                        <AntDesign name="eye" size={24} color="#505050" />
                    </TouchableOpacity>
                </View>


                <Pressable>
                    <View style={styles.cadastrar}>
                        <Text style={styles.txt}>CADASTRAR</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: '#E1E1E1',
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

    titulo: {
        fontWeight: 700,
        fontSize: 18,
        width: 280,
        paddingVertical: 12,
        justifyContent: 'flex-start',
    },
    receberTxt: {
        width: 300,
        height: 50,
        color: 'black',
        backgroundColor: '#D8D8D8',
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        marginBottom: 9,
    },
    receberSenha: {
        color: 'black',
        flex: 1,
        width: 246,
        height: 50,
    },
    viewSenha: {
        width: 300,
        height: 50,
        backgroundColor: '#D8D8D8',
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        marginBottom: 9,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cadastrar: {
        marginTop: 20,
        width: 246,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B31212',
        borderRadius: 8,
    },
    form: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default TelaCadastro