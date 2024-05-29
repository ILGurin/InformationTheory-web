export default class EncryptionService {
  static alphabet: Record<string, number> = {};
  static alphabetReverse: Record<number, string> = {};

  static {
    const letters = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ_";
    for (let i = 0; i < letters.length; i++) {
      this.alphabet[letters[i]] = i + 1;
      this.alphabetReverse[i + 1] = letters[i];
    }
  }


  static offsetMethodEncrypt(word: string, key: string): string {
    if(word === "" || key === ""){
      return "";
    }
    let encryptedText = "";
    const keyLength = key.length;

    let keyIndex = 0;
    for (const char of word) {
      const alphabetValue = this.alphabet[char];
      if (alphabetValue === undefined) {
        return "InputError";
      }
      const keyValue = this.alphabet[key[keyIndex % keyLength]];
      const newChar = (alphabetValue as number) + (keyValue as number);

      let newnewChar = " ";
      if (newChar === 34) {
        newnewChar = this.alphabetReverse[34];
      } else {
        newnewChar = this.alphabetReverse[newChar % 34];
      }

      encryptedText += newnewChar;
      keyIndex++;
    }
    return encryptedText;
  }

  static offsetMethodDecrypt(word: string, key: string): string {
    if(word === "" || key === ""){
      return "";
    }
    let decryptedText = "";
    const keyLength = key.length;

    let keyIndex = 0;
    for (const char of word) {
      const alphabetValue = this.alphabet[char];
      if (alphabetValue === undefined) {
        return "InputError";
      }
      const keyValue = this.alphabet[key[keyIndex % keyLength]];
      let newChar = (alphabetValue as number) - (keyValue as number);

      if (newChar <= 0) {
        newChar = 34 + newChar;
      }
      //val newnewChar = alphabetReverse[newChar % 34]
      let newnewChar = " ";
      if (newChar === 34) {
        newnewChar = this.alphabetReverse[34];
      } else {
        newnewChar = this.alphabetReverse[newChar % 34];
      }
      //
      decryptedText += newnewChar;
      keyIndex++;
    }
    return decryptedText;
  }

  static permutationMethodEncrypt(word: string, key: string): string {
    if(word === "" || key === ""){
      return "";
    }
    const keyLength = key.length;

    const keyArray: string[] = Array.from(key);
    const resultArray: string[][] = new Array(keyLength).fill(0).map(() => []);

    let keyIndex = 0;
    for (const char of word) {
      const validKeyIndex = keyIndex % keyLength;
      resultArray[validKeyIndex].push(char);
      keyIndex++;
    }

    for (let i = 0; i < keyLength - 1; i++) {
      for (let j = 0; j < keyLength - i - 1; j++) {
        if (keyArray[j] > keyArray[j + 1]) {
          [keyArray[j], keyArray[j + 1]] = [keyArray[j + 1], keyArray[j]];
          [resultArray[j], resultArray[j + 1]] = [
            resultArray[j + 1],
            resultArray[j],
          ];
        }
      }
    }

    let encryptedWord = "";
    for (const row of resultArray) {
      encryptedWord += row.join("");
    }

    return encryptedWord;
  }

  static permutationMethodDecrypt(word: string, key: string): string {
    if(word === "" || key === ""){
      return "";
    }
    const resultArray: string[][] = new Array(5).fill(0).map(() => []);
    for (let i = 0; i < key.length; i++) {
      resultArray.push([]);
    }

    const keyArray: string[] = key.split("").map((char) => char);

    const orderArray: number[] = this.createOrderArray(key);
    const index = Math.floor(word.length / key.length);
    const remainder = word.length % key.length;

    const countList: number[] = [];
    for (let i = 0; i < key.length; i++) {
      countList.push(index + (i < remainder ? 1 : 0));
    }

    this.sortKeyAndCountList(keyArray, countList);

    let ind = 0;
    for (let i = 0; i < word.length; i++) {
      if (countList[ind] === 0) {
        ind++;
      }
      resultArray[ind].push(word[i]);
      countList[ind]--;
    }

    const hashMap: Map<number, string[]> = new Map();
    for (let i = 0; i < key.length; i++) {
      hashMap.set(i, resultArray[orderArray[i] - 1]);
    }

    var decryptedText = "";
    let isBreak = false;
    while (true) {
      if (!isBreak) {
        for (let i = 0; i < key.length; i++) {
          if (hashMap.has(i) && hashMap.get(i)!.length > 0) {
            decryptedText += hashMap.get(i)!.shift()!;
          } else {
            isBreak = true;
            break;
          }
        }
      } else {
        break;
      }
    }

    return decryptedText;
  }

  static createOrderArray(input: string): number[] {
    const characters: string[] = input.split("");
    const indexedCharacters: { char: string; index: number }[] = characters.map(
      (char, index) => ({ char, index })
    );

    indexedCharacters.sort((a, b) => {
      const charComparison = a.char.localeCompare(b.char);
      return charComparison !== 0 ? charComparison : a.index - b.index;
    });

    const positionMap: Map<number, number> = new Map<number, number>();
    for (let i = 0; i < indexedCharacters.length; i++) {
      positionMap.set(indexedCharacters[i].index, i + 1);
    }

    const orderArray: number[] = new Array(characters.length);
    for (let i = 0; i < characters.length; i++) {
      orderArray[i] = positionMap.get(i)!;
    }

    return orderArray;
  }

  static sortKeyAndCountList(keyArray: string[], countList: number[]) {
    for (let i = 0; i < keyArray.length - 1; i++) {
      for (let j = 0; j < keyArray.length - i - 1; j++) {
        if (keyArray[j] > keyArray[j + 1]) {
          [keyArray[j], keyArray[j + 1]] = [keyArray[j + 1], keyArray[j]];
          [countList[j], countList[j + 1]] = [countList[j + 1], countList[j]];
        }
      }
    }
  }
}
