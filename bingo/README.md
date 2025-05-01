# Bingo

Все команды запускаются из корня репозитория.

1. Для разработки:

```sh
npm run bingo:dev
```

Откроется локальный сервер (обычно http://localhost:5173).

2. Для сборки production-версии:

```sh
npm run bingo:build
```

Готовые файлы будут в `bingo/dist`.

3. Для предпросмотра production-сборки:

```sh
npm run bingo:preview
```

Это поднимет сервер, эмулирующий production.

4. Исходники лежат в `bingo/src`, основной файл — `main.ts`.
