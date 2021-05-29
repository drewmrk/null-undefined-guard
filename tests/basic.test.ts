import nullUndefinedGuard from '../lib'

const element = [3, 4, 5]

it('Push `43` into the array `element`', () => {
  nullUndefinedGuard(element).push(43)
})
