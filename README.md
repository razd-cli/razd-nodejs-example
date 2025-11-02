# Node.js Razd Example

Простой Node.js проект, настроенный для работы с [Razd CLI](https://razd-cli.github.io) — инструментом для быстрой настройки проектов.

## Быстрый старт

### Установка Razd

```bash
# Установите плагин Razd через mise
mise plugin install razd https://github.com/razd-cli/vfox-plugin-razd

# Установите последнюю версию
mise use -g razd@latest

# Проверьте установку
razd --version
```

### Запуск проекта

```bash
# Клонировать и настроить одной командой
razd up https://github.com/razd-cli/razd-nodejs-example

# Или настроить локальный проект
cd razd-nodejs-example
razd up
```

**Что происходит при `razd up`:**
- 🔧 Устанавливает Node.js 22 и Task через mise
- 📦 Устанавливает npm зависимости
- 🚀 Запускает dev сервер
- ✅ Проект готов к работе!

## Доступные команды

```bash
# Запустить задачу по умолчанию (setup + dev)
razd up

# Установить зависимости
razd run install

# Запустить dev сервер
razd run dev

# Собрать проект
razd run build

# Посмотреть все задачи
razd run
```

## Конфигурация

Проект использует `Razdfile.yml` для управления инструментами и задачами:

```yaml
mise:
  tools:
    node: "22"      # Node.js версия 22
    task: latest    # Последняя версия Task

tasks:
  default:          # Настройка и запуск
  install:          # Установка зависимостей
  dev:              # Dev сервер
  build:            # Сборка проекта
```

## Структура проекта

```
├── Razdfile.yml   # Конфигурация Razd
├── package.json   # npm зависимости
└── index.js       # Точка входа
```

## Без Razd

Если не хотите использовать Razd:

```bash
# Установите mise
curl https://mise.run | sh

# Установите инструменты
mise install node@22
mise install task@latest

# Установите зависимости и запустите
npm install
npm run dev
```

## Ресурсы

- [Документация Razd](https://razd-cli.github.io)
- [Getting Started](https://razd-cli.github.io/docs/getting-started)
- [mise](https://mise.jdx.dev) — менеджер инструментов
- [Task](https://taskfile.dev) — таск-раннер