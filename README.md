# Node.js Razd Example

Простой Node.js проект, настроенный для работы с [Razd CLI](https://github.com/razd-cli/razd) — инструментом для быстрой настройки проектов.

## Быстрый старт

### Установка Razd

Razd 1.x распространяется как бинарник через [GitHub Releases](https://github.com/razd-cli/razd/releases) и может устанавливаться через mise/vfox (встроенный vfox-плагин):

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
- 🔧 Синхронизирует `Razdfile.yml` с `mise.toml` и устанавливает Node.js 22 и Task через mise
- 📦 Устанавливает npm зависимости (задача `install`)
- 🚀 Запускает dev сервер (задача `dev`)
- ✅ Проект готов к работе!

## Доступные команды

```bash
# Запустить задачу по умолчанию (install + dev)
razd up

# Запустить задачу по имени
razd run install
razd run dev
razd run build

# Посмотреть все задачи
razd list

# Добавить зависимость в Razdfile.yml
razd add node@22

# Управление доверием к проекту
razd trust
```

## Конфигурация

Проект использует `Razdfile.yml` для управления инструментами и задачами:

```yaml
version: "1"

# Унифицированное управление зависимостями (mise или devbox)
dependencies:
  using: "mise"          # Провайдер окружения: mise или devbox
  ensure:
    - "task@latest"      # Таск-раннер Task
    - "node@22"          # Node.js версия 22

tasks:
  default:               # Настройка и запуск
  install:               # Установка зависимостей
  dev:                   # Dev сервер
  build:                 # Сборка проекта
```

В 1.x `Razdfile.yml` использует единый блок `dependencies` с провайдером (`mise`/`devbox`). Razd держит `Razdfile.yml` и нативный конфиг провайдера (`mise.toml` / `devbox.json`) в синхронизированном состоянии: инструменты, добавленные в один файл, автоматически переносятся в другой.

## Структура проекта

```
├── Razdfile.yml   # Конфигурация Razd
├── mise.toml      # Конфигурация mise (синхронизируется с Razdfile.yml)
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

- [Razd CLI](https://github.com/razd-cli/razd) — репозиторий и документация
- [mise](https://mise.jdx.dev) — менеджер инструментов
- [Task](https://taskfile.dev) — таск-раннер
- [vfox-plugin-razd](https://github.com/razd-cli/vfox-plugin-razd) — плагин для установки Razd
