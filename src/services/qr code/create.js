import prompt from "prompt";
import promptQrcode from "../../prompts/prompt-Qrcode.js";
import handle from "./handle.js";

async function createQrCode() {
    prompt.get(promptQrcode, handle);
    prompt.start();
}

export default createQrCode;