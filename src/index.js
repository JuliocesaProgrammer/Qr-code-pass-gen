import prompt from "prompt";
import chalk from 'chalk';

import createPassword from "./services/password/create.js";
import mainprompt from "./prompts/prompt-main.js";
import createQrCode from "./services/qr code/create.js";

async function main() {
    prompt.get(mainprompt, async (err, choose) => {
        if(choose.select == 1) {
            await createQrCode();
        }if(choose.select == 2) {
            await createPassword();
        }
    });

    prompt.start();
}
main();