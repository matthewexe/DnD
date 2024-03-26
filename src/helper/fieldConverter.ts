export function rangeFieldToNumber(value: string): number {
  return parseInt(value.replace(/\D+/g, ''), 10);
}

export function rangeFieldToMeterField(value: string): string {
  const toNumber = rangeFieldToNumber(value);
  if (isNaN(toNumber)) {
    return value;
  }
  return `${toNumber} meters`;
}

export function objectReducer<T extends object, V>(
  object: T,
  transformKey: (key: string) => string,
  transformValue: (value: V) => string | undefined,
  separator: string = ': ',
): string[] {
  const fieldArray: string[] = [];

  for (const key in object) {
    const value = object[key as keyof T] as V;
    const newKey = transformKey(key);
    const newValue = transformValue(value);

    if (newValue) {
      fieldArray.push(`${newKey}${separator}${newValue}`);
    }
  }

  return fieldArray;
}
