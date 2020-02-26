// All tests should be independent of other tests and NOT depend on another test. Test one thing in each test(). However, tests can interact with each other.

import { sum, sayHello } from '../functions'

// expect is an "assertion" and toBe is a "matcher"
test('Sum adds 1 and 2 to equal 3', () => {
  expect(sum(1, 2))
    .toBe(3)
})

test('sayHello says "hello"', () => {
  expect(sayHello())
    .toBe('hello')
})

 test('Object assignment', () => {
   const data = {one: 1}
   data['two'] = 2

   expect(data)
    .toEqual({one: 1, two: 2})
 })

test('True is truthy', () => {
  expect(true)
    .toBeTruthy()
})

// .not flips the matcher's functionality
test('False is falsy', () => {
  expect(false)
    .not.toBeTruthy()
})

const names = ['preston', 'james', 'avery', 'becca', 'whitney']
test('names contains "becca"', () => {
  expect(names)
    .toContain('becca')
})
