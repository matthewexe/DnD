import {ItemType} from '../types/requests';

export function determineItemType(url: string): ItemType {
  if (url.includes('/api/equipment/')) {
    return 'equipment';
  } else if (url.includes('/api/magic-items/')) {
    return 'magic-item';
  } else {
    return 'unknown'; // Nel caso l'URL non corrisponda ad alcun pattern conosciuto
  }
}
