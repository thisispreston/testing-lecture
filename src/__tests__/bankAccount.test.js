import bankAccount from '../bankAccount'

// describe allow us to relate tests without having them depend on each other
//beforeEach, afterEach, beforeAll, and afterAll set conditions in relation to the tests
describe('backAccount methods and properties', () => {
  beforeEach(() => {
    bankAccount.balance = 1000
  })
  
  test('Initial balance is 1000', () => {
    expect(bankAccount.balance).toBe(1000)
  })
  
  test('depositMoney correctly alters balance', () => {
    bankAccount.depositMoney(2000)
    expect(bankAccount.balance)
    .toBe(3000)
  })
  
  test('Withdraw money correctly alters balance', () => {
    bankAccount.withdrawMoney(2000)
    expect(bankAccount.balance)
    .toBe(-1000)
  })
})
