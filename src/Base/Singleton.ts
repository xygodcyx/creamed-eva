export default class Singleton {
  private static _instance: unknown = null

  protected static GetInstance<T>() {
    if (this._instance === null) {
      this._instance = new this() as T
    }
    return this._instance as T
  }

  public static get Instance() {
    return this.GetInstance<unknown>()
  }
}
