### Para iniciar en modo desarrollo

1)

```
npm install o yarn 
   en caso de tener errores correr los comandos:
    rm -rf ./package-lock.json // rm .\package-lock.json (en windows)
    npm cache clean –-force
    npm install --legacy-peer-deps
```

2)

```
 npm run dev 
```
o
```
 yarn dev 
```

### Para buildear el proyecto

1.

```
npm install
   en caso de tener errores correr los comandos:
    rm -rf ./package-lock.json // rm .\package-lock.json (en windows)
    npm cache clean –-force
    npm install --legacy-peer-deps
```

2)

```
 npm run build
```

3)

```
 npm run start
```

## Importate

Es posible que las versiones de las libs base en package.json queden desactualizadas con el tiempo, revisar una vez utilizado el boilerplate del proyecto
