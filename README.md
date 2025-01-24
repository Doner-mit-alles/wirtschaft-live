# wirtschaft-live

## Genereller Rahmen und Anforderungen:
- Darstellung Schülerfirma, Produkte, Angebote
- Responsive Webdesign für Mobile Devices
- rechtlich notwendige Inhalte einer Webseite
- Kontaktformular
- Zielgruppenorientierte Barrierefreiheit
- *zweisprachige Informationsdarstellung (Deutsch/Englisch) (nur wenn die "Kunden" dies wünschen)*

## Kundenkommunikation und Ressourcen
[Hier geht es zur Taskcard](https://bbs1-lueneburg.taskcards.app/#/board/d7e57835-06b7-4607-84d1-95c4b00c0c19/view?token=3122f675-a3ab-487d-8ee7-cc967a5bdaf4) 

---

## Vue things:

This template should help get you started developing with Vue 3 in Vite.

## Docker
### Build the image
```sh
docker build -t ballerlos/vue .
```
### Run the container
```sh
docker run -d -p 8080:80 --name vue-service ballerlos/vue
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
