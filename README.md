## Instrucciones para instalar ESLint

```
npm install eslint --save-dev
npm init @eslint/config
```

### Reglas a probar

```
[Comillas dobles o simples](https://eslint.org/docs/latest/rules/quotes#rule-details)
```

## Instrucciones para instalar Prettier

```
npm install --save-dev --save-exact prettier eslint-config-prettier
echo {}> .prettierrc.json

# Actualiza tu .eslintrc con [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier). Mas detalles en [Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html)
```
