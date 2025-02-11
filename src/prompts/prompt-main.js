const mainprompt = [
    {
        name: "select",
        descrpition: "Escolha a ferramenta: (1- QRCODE ou 2- PASSWORD)",
        pattern: /^[1-2]+$/, // 1 ou 2
        message: 'Escolha inválida, escolha apenas 1 e 2.',
        required: true,
    },
];

export default mainprompt;