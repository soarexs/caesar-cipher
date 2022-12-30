const firstAlphabetCode = 65
const lastAlphabetCode = 90

const alphabetLenght = Math
  .abs(firstAlphabetCode - lastAlphabetCode)

const alphabet = Array(alphabetLenght + 1).fill(0)
  .map((_, i) => (
  String.fromCharCode(firstAlphabetCode + i)
))

const hashAlphabet = (alphabet) => {
  const alphabetCode = alphabet.map((e) => (
        e.charCodeAt(0) + 2
  ))

  const hashedAlphabet = alphabetCode.map(e => (
    String.fromCharCode(e)
  ))
  
  return hashedAlphabet
}

console.log(hashAlphabet(alphabet))