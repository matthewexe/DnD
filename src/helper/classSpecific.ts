import {ClassSpecific} from '../types/responses';

export function classSpecificToString(object: ClassSpecific): string[] {
  const classSpecificArray: string[] = [];

  for (const key in object) {
    const value = object[key as keyof ClassSpecific] as any;
    const titleCaseKey = snakeCaseToTitleCase(key);

    if (typeof value === 'number') {
      classSpecificArray.push(`${titleCaseKey}: ${value}`);
    } else if (typeof value === 'boolean' && value) {
      classSpecificArray.push(`${titleCaseKey}: ${value}`);
    }
  }

  return classSpecificArray;
}

function snakeCaseToTitleCase(snakeCase: string): string {
  return snakeCase
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
