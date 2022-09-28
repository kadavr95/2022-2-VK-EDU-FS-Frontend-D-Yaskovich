/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
    expect(convertBytesToHuman(-1)).toBe(false)
    expect(convertBytesToHuman(3.22)).toBe(false)
    expect(convertBytesToHuman('123')).toBe(false)
    expect(convertBytesToHuman(null)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
    expect(convertBytesToHuman(0)).toBe('0 B')
    expect(convertBytesToHuman(5)).toBe('5 B')
    expect(convertBytesToHuman(1024)).toBe('1 KiB')
    expect(convertBytesToHuman(1025)).toBe('1.00 KiB')
    expect(convertBytesToHuman(1030)).toBe('1.01 KiB')
    expect(convertBytesToHuman(3447635442)).toBe('3.21 GiB')
    expect(convertBytesToHuman(140737488355328)).toBe('128 TiB')
    expect(convertBytesToHuman(2417851639229258349412352000)).toBe('2000 YiB')
});

// другая группа проверок
