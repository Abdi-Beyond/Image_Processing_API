import sharp from 'sharp';
import { resolve } from 'path';

async function sharp_api(name: string, w: string, h: string) {
    try {
        await sharp(resolve('images') + '/' + name + '.jpg')
            .resize(Number.parseInt(w), Number.parseInt(h))
            .toFile(
                resolve('images/thumb') +
                    '/' +
                    name +
                    '_' +
                    w +
                    'X' +
                    h +
                    '.jpg'
            );

        return true;
    } catch {
        return false;
    }
}

export default sharp_api;
