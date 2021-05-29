import nullUndefinedGuard from '../lib'

const element = null

it('Throw an error', () => {
  try {
    nullUndefinedGuard(element).push(43)
    console.error('This should throw an error')
  } catch (_) {
    return undefined
  }
})
