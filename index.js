const hashAlphabet = (phrase) => {
  const phraseCode = phrase.split('').map((e) => (
        e.charCodeAt(0) + 2
  ))

  const hashedphrase = phraseCode.map(e => (
    String.fromCharCode(e)
  ))
  
  return hashedphrase.join('')
}

console.log(hashAlphabet('ABC'))
