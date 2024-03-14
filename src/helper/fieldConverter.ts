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
