import prompt from "prompt";
import chalk from 'chalk';

import mainprompt from "./prompts/prompt-main.js";

async function main() {
    prompt.get(mainprompt, async (err, choose) => {
        if(choose.select == 1) {
            console.log(chalk.blue("A opção escholida foi a de QRCODE"));
        }if(choose.select == 2) {
            console.log("A opção escholida foi a de PASSWORD");
        }
    });

    prompt.start();
}


main();