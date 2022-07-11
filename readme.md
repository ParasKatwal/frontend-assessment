Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana ?

'b' + 'a' will give = ba

+'a' resolves to NaN ("Not a Number") because it coerces a string to a number, while the character a cannot be parsed as a number, so it will give = NaN

'a' will give = a

and lastly after toLowerCase we will get = banana 