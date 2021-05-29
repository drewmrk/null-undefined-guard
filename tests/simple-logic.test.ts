import nullUndefinedGuard from '../lib'

const element = [3, 4, 5]

it('Print "test" to the console', () => {
  nullUndefinedGuard(element, 'element', console.log('Test'))
})
