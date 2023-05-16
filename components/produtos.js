// 18 lanches, 4 bebidas e 2 marmitas

const DATA = [
    {
        id: 0,
        nome: 'Batata Sensações',
        preco: 5.00,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p0.png',
        categoria: 'lanche',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        id: 1,
        nome: 'Biscoito Treloso',
        preco: 3.00,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p1.png',
        categoria: 'lanche',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        id: 2,
        nome: 'Bokus',
        preco: 2.00,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p2.png',
        categoria: 'lanche',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        id: 3,
        nome: 'Chiclete Cliss',
        preco: 1.25,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p3.png',
        categoria: 'lanche',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        id: 4,
        nome: 'Trident',
        preco: 2.50,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p4.png',
        categoria: 'lanche',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        id: 5,
        nome: 'Halls',
        preco: 2.50,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p5.png',
        categoria: 'lanche',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        id: 6,
        nome: 'Gula',
        preco: 2.50,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p6.png',
        categoria: 'lanche',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        id: 7,
        nome: 'Coxinha',
        preco: 4.50,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p7.png',
        categoria: 'lanche',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        id: 8,
        nome: 'Enroladinho',
        preco: 5.00,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p8.png',
        categoria: 'lanche',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        id: 9,
        nome: 'Empada (G)',
        preco: 5.00,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p9.png',
        categoria: 'lanche',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        id: 10,
        nome: 'Mousse de Maracujá',
        preco: 3.50,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p10.png',
        categoria: 'lanche',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        id: 11,
        nome: 'Mousse de Limão',
        preco: 4.00,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p11.png',
        categoria: 'lanche',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        id: 12,
        nome: 'Bolo de Pote',
        preco: 6.00,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p12.png',
        categoria: 'lanche',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        id: 13,
        nome: 'Pudim',
        preco: 4.00,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p13.png',
        categoria: 'lanche',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        id: 14,
        nome: 'Paçoca',
        preco: 0.50,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p14.png',
        categoria: 'lanche',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        id: 15,
        nome: 'Pirulito POP',
        preco: 0.50,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p15.png',
        categoria: 'lanche',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        id: 16,
        nome: 'Pizza',
        preco: 5.00,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p16.png',
        categoria: 'lanche',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        id: 17,
        nome: 'Tortilete',
        preco: .00,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p17.png',
        categoria: 'lanche',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        id: 18,
        nome: 'Caçulinha',
        preco: 2.00,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p18.png',
        categoria: 'bebida',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        id: 19,
        nome: 'Suco copo',
        preco: 2.00,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p19.png',
        categoria: 'bebida',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        id: 20,
        nome: 'Refrigerante em lata',
        preco: 5.00,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p20.png',
        categoria: 'bebida',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        id: 21,
        nome: 'Suco de polpa',
        preco: 5.00,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p21.png',
        categoria: 'bebida',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        id: 22,
        nome: 'Marmita(P)',
        preco: 15.00,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p22.png',
        categoria: 'marmita',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        id: 23,
        nome: 'Marmita (G)',
        preco: 24.00,
        foto: 'https://raw.githubusercontent.com/jacioferton/cardapio/master/assets/p23.png',
        categoria: 'marmita',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
];

export default DATA