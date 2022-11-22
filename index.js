// Ejemplo 1

const a = "Un texto te ejemplo";

function sumar(a, b) {
  return a + b;
}

sumar(5);
sumar(6, 3);
sumar();

a = "otra cosa";

// Ejemplo 2.

const c = 5 + 3;

(5 + 3).toString();

// Ejemplo 3.

function reasignandoArgumentos(numerito) {
  numerito = 13;
}

const argumento = 5;
reasignandoArgumentos(argumento);
