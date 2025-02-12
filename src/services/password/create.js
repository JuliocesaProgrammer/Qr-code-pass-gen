import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
    console.log(chalk.green("Creating password"));
    const password = await handle();
    console.log(chalk.green("Password created: " + password));
}

export default createPassword;