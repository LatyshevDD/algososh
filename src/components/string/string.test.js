import { revertString } from "./utils";
import { setStateWithPause } from "../../utils/utils";

const mockSetStrArray = jest.fn(array => array);


describe('String test', () => {
  it('Тест с чётным количеством символов', async () => {
    await revertString('тест', mockSetStrArray);
    expect(mockSetStrArray.mock.calls).toHaveLength(4);
    expect(mockSetStrArray.mock.calls[3][0]).toStrictEqual(
      [
        {value: 'т', state:'default'},
        {value: 'с', state:'default'},
        {value: 'е', state:'default'},
        {value: 'т', state:'default'},
      ]
    );
  });

  it('Тест с нечётным количеством символов', async () => {
    await revertString('тестт', mockSetStrArray);
    expect(mockSetStrArray.mock.calls).toHaveLength(5);
    expect(mockSetStrArray.mock.calls[4][0]).toStrictEqual(
      [
        {value: 'т', state:'default'},
        {value: 'т', state:'default'},
        {value: 'с', state:'default'},
        {value: 'е', state:'default'},
        {value: 'т', state:'default'},
      ]
    );
  });

  it('Тест с одним символов', async () => {
    await revertString('т', mockSetStrArray);
    expect(mockSetStrArray.mock.calls).toHaveLength(2);
    expect(mockSetStrArray.mock.calls[1][0]).toStrictEqual(
      [
        {value: 'т', state:'default'}
      ]
    );
  });
  
  it('Тест с пустой строкой', async () => {
    await revertString('', mockSetStrArray);
    expect(mockSetStrArray.mock.calls).toHaveLength(2);
    expect(mockSetStrArray.mock.calls[1][0]).toStrictEqual([]);
  });
});