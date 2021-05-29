import nullUndefinedGuard from '../lib'

const element = [3, 4, 5]

it('Push `43` into the array `element` if the sum is equal to 12', () => {
  nullUndefinedGuard(element, 'element', () => {
    if (element[0] + element[1] + element[2] === 12) {
      element.push(43)
    } else {
      console.error('Something went wrong')
    }
  })
})
