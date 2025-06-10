import { greet } from './greeting.js';
import {showColorfulMessage} from './colorful-message.js';
import { readFileContent } from './read-file.js';

async function runChallenge() {
    console.log(greet('imane'));
    showColorfulMessage();
    await readFileContent();
}

runChallenge();