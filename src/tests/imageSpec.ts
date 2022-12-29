import checker from '../Image_ processor/checker';
import sharp_api from '../Image_ processor/Image_api_processor';

it('Test-1 for checker', () => {
    expect(checker('', '', '')).toBe(false);
});
it('Test-2 for checker”', () => {
    expect(checker('img1', '100', '200')).toBe(true);
});
it('Test-1 for sharp_api”', async () => {
    const test = await sharp_api('img1', '100', '200');
    expect(test).toEqual(true);
});
it('Test-2 for sharp_api”', async () => {
    const test = await sharp_api('', '100', '200');
    expect(test).toEqual(false);
});
