import { ascendingBubleSort, descendingBubleSort, ascendingSelectSort, descendingSelectSort } from "./utils";

const mockSetArray = jest.fn(array => array);

const oneElementArray = [
  {index: 1, state: 'default'}
]

const threeElementArray = [
  {index: 1, state: 'default'},
  {index: 2, state: 'default'},
  {index: 3, state: 'default'},
]

describe('Sorting-page test', () => {
  // Сортировка выбором по возрастанию
  it('Тест сортировки выбором по возрастанию с пустым массивом', async () => {
    await ascendingSelectSort([], mockSetArray);
    expect(mockSetArray.mock.calls).toHaveLength(1);
    expect(mockSetArray.mock.calls[0][0]).toStrictEqual([]);
  });

  it('Тест сортировки выбором по возрастанию с массивом из одного элемента', async () => {
    await ascendingSelectSort(oneElementArray, mockSetArray);
    expect(mockSetArray.mock.calls).toHaveLength(2);
    expect(mockSetArray.mock.calls[0][0]).toStrictEqual([{index: 1, state: 'default'}]);
  });

  it('Тест сортировки выбором по возрастанию с массивом из нескольких элементов', async () => {
    await ascendingSelectSort(threeElementArray, mockSetArray);
    expect(mockSetArray.mock.calls).toHaveLength(10);
    expect(mockSetArray.mock.calls[9][0]).toStrictEqual(
      [
        {index: 1, state: 'default'},
        {index: 2, state: 'default'},
        {index: 3, state: 'default'},
      ]);
  }, 10000);

  // Сортировка выбором по убыванию
  it('Тест сортировки выбором по убыванию с пустым массивом', async () => {
    await descendingSelectSort([], mockSetArray);
    expect(mockSetArray.mock.calls).toHaveLength(1);
    expect(mockSetArray.mock.calls[0][0]).toStrictEqual([]);
  });

  it('Тест сортировки выбором по убыванию с массивом из одного элемента', async () => {
    await descendingSelectSort(oneElementArray, mockSetArray);
    expect(mockSetArray.mock.calls).toHaveLength(2);
    expect(mockSetArray.mock.calls[0][0]).toStrictEqual([{index: 1, state: 'default'}]);
  });

  it('Тест сортировки выбором по убыванию с массивом из нескольких элементов', async () => {
    await descendingSelectSort(threeElementArray, mockSetArray);
    expect(mockSetArray.mock.calls).toHaveLength(12);
    expect(mockSetArray.mock.calls[11][0]).toStrictEqual(
      [
        {index: 3, state: 'default'},
        {index: 2, state: 'default'},
        {index: 1, state: 'default'},
      ]);
  }, 15000);

  // Сортировка пузырьком по возрастанию
  it('Тест сортировки пузырьком по возрастанию с пустым массивом', async () => {
    await ascendingBubleSort([], mockSetArray);
    expect(mockSetArray.mock.calls).toHaveLength(1);
    expect(mockSetArray.mock.calls[0][0]).toStrictEqual([]);
  });

  it('Тест сортировки пузырьком по возрастанию с массивом из одного элемента', async () => {
    await ascendingBubleSort(oneElementArray, mockSetArray);
    expect(mockSetArray.mock.calls).toHaveLength(1);
    expect(mockSetArray.mock.calls[0][0]).toStrictEqual([{index: 1, state: 'default'}]);
  });

  it('Тест сортировки пузырьком по возрастанию с массивом из нескольких элементов', async () => {
    await ascendingBubleSort(threeElementArray, mockSetArray);
    expect(mockSetArray.mock.calls).toHaveLength(16);
    expect(mockSetArray.mock.calls[15][0]).toStrictEqual(
      [
        {index: 1, state: 'default'},
        {index: 2, state: 'default'},
        {index: 3, state: 'default'},
      ]);
  }, 20000);

  // Сортировка пузырьком по убыванию
  it('Тест сортировки пузырьком по убыванию с пустым массивом', async () => {
    await descendingBubleSort([], mockSetArray);
    expect(mockSetArray.mock.calls).toHaveLength(1);
    expect(mockSetArray.mock.calls[0][0]).toStrictEqual([]);
  });

  it('Тест сортировки пузырьком по убыванию с массивом из одного элемента', async () => {
    await descendingBubleSort(oneElementArray, mockSetArray);
    expect(mockSetArray.mock.calls).toHaveLength(1);
    expect(mockSetArray.mock.calls[0][0]).toStrictEqual([{index: 1, state: 'default'}]);
  });

  it('Тест сортировки пузырьком по убыванию с массивом из нескольких элементов', async () => {
    await descendingBubleSort(threeElementArray, mockSetArray);
    expect(mockSetArray.mock.calls).toHaveLength(16);
    expect(mockSetArray.mock.calls[15][0]).toStrictEqual(
      [
        {index: 3, state: 'default'},
        {index: 2, state: 'default'},
        {index: 1, state: 'default'},
      ]);
  }, 20000);
});