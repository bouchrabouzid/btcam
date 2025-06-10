import fs from 'fs/promises';

export async function readFileContent() {
    try {
        const data = await fs.readFile('./files/file-data.txt', 'utf8');
        console.log('File content:', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}