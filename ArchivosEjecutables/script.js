// Algoritmo FizzBuzz Java</h1>

// 1.- EN JAVASCRIPT, ESCRIBIR UN PROGRAMA QUE MUESTRE POR PANTALLA LOS NÚMEROS DEL 1 AL 100!!!

// 2.- CUANDO UN NÚMERO SEA MÚLTIPLO DE 3, ESE NÚMERO DEBE SER SUSTITUIDO POR LA PALABRA "FIZZ".

// 3.- CUANDO UN NÚMERO SEA MÚLTIPLO DE 5, ESE NÚMERO DEBE SER SUSTITUIDO POR LA PALABRA "BUZZ".

// 4.- EN AQUELLOS NÚMEROS QUE SON MÚLTIPLOS DE 3 Y DE 5, DEBERÁN SER SUSTITUIDOS POR LA PALABRA "FIZZBUZZ".

// MÉTODO 1: MEDIANTE UN CICLO "for"...

for (let i = 1; i <= 100; i++)
{
    if (i % 15 === 0)
    {
        console.log(`${i} - FizzBuzz`)
        continue
    }

    if (i % 3 === 0)
    {
        console.log(`${i} - Fizz`)
        continue
    }

    if (i % 5 === 0)
    {
        console.log(`${i} - Buzz`)
        continue
    }

    console.log(`${i}`)
}

// MÉTODO 2: MEDIANTE UN CICLO "while"...

let i = 0;

while (i <= 100)
{
    i++;

    if (i % 3 === 0 && i % 5 === 0)
    {
        console.log(`${i} - FizzBuzz`);
    }

    else 
    if (i % 3 === 0)
    {
        console.log(`${i} - Fizz`);
    }

    else 
    if (i % 5 === 0)
    {
        console.log(`${i} - Buzz`);
    }

    else
    {
        console.log(`${i}`);
    }
}

// MÉTODO 3: TRUTHY AND FALSY...

// P.D.: RESPECTO A LOS OPERADORES "AND" & "OR"...

// AND (&&):

// "foo" && "bar"; RESULTADO: "bar"
// "bar" && "foo"; RESULTADO: "foo"
// "foo" && ""; RESULTADO: ""
// "" && "foo"; RESULTADO: ""

// OR (||):

// "foo" || "bar"; RESULTADO: "foo"
// "bar" || "foo"; RESULTADO: "bar"
// "foo" || ""; RESULTADO: "foo"
// "" || "foo"; RESULTADO: "foo"

for (let i = 1; i <= 100; i++)
{
    let finalOutput = '';

    if (i % 3 === 0)
    {
        finalOutput += 'Fizz';
    }

    if (i % 5 === 0)
    {
        finalOutput += 'Buzz';
    }

    console.log(finalOutput || i);
}

// MÉTODO 4: TRUTHY AND FALSY + OPERADOR TERNARIO...

for (let i = 0; i++ < 100;)
    console.log(((i % 3 ? '' : 'Fizz')
 + (i % 5 ? '' : 'Buzz')) 
 || i)