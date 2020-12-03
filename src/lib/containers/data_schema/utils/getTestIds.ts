import { nanoid } from 'nanoid'

export default function getTestIDs(): { [key: string]: string } {
  if (process.env.NODE_ENV !== 'test') return {}

  let ids = new Map()
  let proxy = new Proxy(
    {},
    {
      get: function (_obj, prop: string) {
        if (ids.has(prop) === false) {
          ids.set(prop, nanoid())
        }
        return ids.get(prop)
      },
    },
  )
  return proxy
}
