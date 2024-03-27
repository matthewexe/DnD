export function extractDigits(input: string): number {
  // Rimuove tutti i caratteri non numerici
  const digitsString = input.replace(/\D/g, '');

  // Converte la stringa di cifre in un numero
  return digitsString.length > 0 ? parseInt(digitsString, 10) : 0;
}
// Esempi di utilizzo

// input: "abc123"// Output: "123"
// input: "1a2b3c" // Output: "123"
// input: "D&D 5e"// Output: "5"
