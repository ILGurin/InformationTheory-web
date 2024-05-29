import { EntropyMetrics } from "./EntropyMetrics";

export default class EntropyService {
  static calculateEntropyMetrics(word: string): EntropyMetrics {
    const frequencyMap: Map<string, number> = new Map();

    for (const char of word) {
      if (frequencyMap.has(char)) {
        frequencyMap.set(char, frequencyMap.get(char)! + 1);
      } else {
        frequencyMap.set(char, 1);
      }
    }
    console.log(frequencyMap);

    const length: number = word.length;
    const entropy: number = -[...frequencyMap.values()].reduce(
      (sum, freq) => sum + (freq / length) * Math.log2(freq / length),
      0
    );
    const capacity = Math.log2(frequencyMap.size);
    const redundancy = capacity - entropy;
    if (redundancy < 0) {
      return {
        entropy: -1,
        capacity: -1,
        redundancy: -1,
        relativeRedundancy: -1
      }
    }
    const relativeRedundancy = 1 - entropy / capacity;

    return {
      entropy,
      capacity,
      redundancy,
      relativeRedundancy,
    };
  }
}
