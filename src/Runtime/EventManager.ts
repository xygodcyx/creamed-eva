import type { EVENT_TYPE_ENUM } from 'src/Enums'
import Singleton from 'src/Base/Singleton'

export type EventFunc = (...params: unknown[]) => unknown
export interface IEvent {
  func: EventFunc
  ctx?: unknown
}

export default class EventManager extends Singleton {
  eventMap: Map<EVENT_TYPE_ENUM, Array<IEvent>> = new Map()

  public static get Instance() {
    return this.GetInstance<EventManager>()
  }

  on(key: EVENT_TYPE_ENUM, func: EventFunc, ctx?: unknown) {
    if (!this.eventMap.has(key)) {
      this.eventMap.set(key, [])
    }

    this.eventMap.get(key)?.push({ func, ctx })
  }

  off(key: EVENT_TYPE_ENUM, func: EventFunc) {
    if (!this.eventMap.has(key)) {
      return
    }
    const index = this.eventMap.get(key)?.findIndex(({ func: f }) => f === func)
    if (index === undefined || index === -1) {
      return
    }

    this.eventMap.get(key)?.splice(index, 1)
  }

  emit(key: EVENT_TYPE_ENUM, ...params: unknown[]) {
    if (!this.eventMap.has(key)) {
      return
    }
    this.eventMap.get(key)?.forEach(({ func, ctx }) => ctx ? func.apply(ctx, params) : func(...params))
  }
}
