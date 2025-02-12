import chalk from "chalk";

const promptQrcode = [
    {
        name: "link",
        description: chalk.green("Digite o link que deseja transformar em QR Code:"),
    },
    {
        name: "Type",
        description: chalk.green("Digite o tipo de QR Code que deseja criar:(1)QR Code Normal (2)QR Code no terminal:"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Digite apenas 1 ou 2"),
        required: true
    }
];

export default promptQrcode;