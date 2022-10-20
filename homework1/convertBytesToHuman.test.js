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
  expect(convertBytesToHuman('string')).toBe(false)
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman(1.5)).toBe(false)
  expect(convertBytesToHuman(false)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(5)).toBe('5 B')
  expect(convertBytesToHuman(1024)).toBe('1 KB')
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB')
  expect(convertBytesToHuman(30468923079)).toBe('28.38 GB')
});

// другая группа проверок
