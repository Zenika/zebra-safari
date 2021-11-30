export function compare(
  a: Record<string, unknown>,
  b: Record<string, unknown>,
  key: string
): number {
  if (!(a instanceof Object) || !(b instanceof Object)) throw new Error("");

  if (!a[key] || !b[key]) {
    throw new Error("Provided compare key must exist in both objects");
  }
  if (typeof a[key] !== "string" && typeof b[key] !== "string") {
    throw new Error("Provided key value must be a string");
  }
  if (a[key] === b[key]) {
    return 0;
  }
  return (a[key] as string) > (b[key] as string) ? 1 : -1;
}
