/**
 * Guard against null or undefined values (null-undefined-guard)
 *
 * @param element - Element to be referenced
 * @param name - Name of `element`
 * @param logic - Additional logic to be applied
 * @returns Element to be referenced
 *
 * @example
 * import nullUndefinedGuard from 'null-undefined-guard'
 * const a = [3,4,5]
 * nullUndefinedGuard(a).push(8)
 */
const nullUndefinedGuard = (element: any, name?: string, logic?: any) => {
  if (element === null ?? element === undefined) {
    throw new Error(`${name ?? 'Element'} is ${element}`)
  } else {
    if (!logic) {
      return element
    } else {
      logic()
    }
  }
}

export default nullUndefinedGuard
