# Next Frontend Template

**Языки / Languages:** [Русский](README.md) · [English](README.en.md)

---

Стартовый шаблон фронтенда на Next.js 16 (App Router) с едиными договорённостями по стилю и структуре: BEM, SCSS, UI-компоненты, сторы, формы с валидацией.

## Стек

- **Next.js 16** — React-фреймворк, App Router
- **React 19** — UI
- **TypeScript** — типы (при необходимости можно использовать JS/JSX)
- **SCSS** — стили, переменные и миксины в `src/assets/styles`
- **Tailwind CSS 4** — утилитарные классы (опционально)
- **Zustand** — глобальное состояние
- **React Hook Form + Zod** — формы и валидация

## Скрипты

```bash
npm run dev      # Сервер разработки (Next.js)
npm run build    # Сборка для продакшена
npm run start    # Запуск собранного приложения
npm run lint     # Проверка линтером
```

## Структура проекта

```
src/
├── app/                    # Страницы и layout (App Router)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── form/page.tsx       # Пример формы с валидацией
│   ├── api/page.tsx        # Пример работы с API
│   ├── store/page.tsx      # Пример работы со стором
│   └── components/page.tsx # Каталог UI-компонентов
├── assets/styles/          # Глобальные стили (SCSS)
│   ├── index.scss          # Точка входа
│   └── base/
│       ├── _variables.scss # Переменные ($black, $white и т.д.)
│       ├── _mixins.scss    # Миксины (transition и др.)
│       ├── _global.scss    # Базовые классы (.container, .form и т.д.)
│       └── _fonts.scss    # Шрифты (при необходимости)
├── components/             # Переиспользуемые компоненты
│   ├── ui/                 # Кнопки, инпуты, аккордеон, диалоги и т.д.
│   ├── icons/              # SVG-иконки
│   └── Header.jsx          # Шапка сайта
├── api/                    # Модули для запросов к API (например, posts.js)
├── composables/            # Хуки-обёртки (useApi, useToast и др.)
├── schemas/                # Схемы валидации (Zod)
├── stores/                 # Сторы Zustand
└── utils/                  # Утилиты (formatPrice и др.)
```

**Маршрутизация:** используется только App Router. Папки `pages/` в проекте нет. Маршруты задаются папками внутри `src/app/` и файлом `page.tsx` в каждой из них: например, `app/form/page.tsx` → URL `/form`.

Алиас `@/` в коде указывает на `src/` (например, `@/components/ui/Button`, `@/stores/user-store`).

## Стили

- **BEM** — именование классов (блок__элемент_модификатор).
- **SCSS** — глобальные стили подключаются в `src/app/layout.tsx` через `@/assets/styles/index.scss`.
- Стили UI-компонентов лежат рядом с компонентом (например, `Button.jsx` + `button.scss`) и подключаются в общий entrypoint стилей.

## Формы

Пример формы с валидацией через Zod и React Hook Form — страница `/form`. Схемы и дефолтные значения вынесены в `src/schemas/`.

## Стор

Пример глобального состояния (Zustand) — страница `/store`. Сторы в `src/stores/`.

## Запуск

1. Установка зависимостей: `npm install`
2. Запуск dev-сервера: `npm run dev`
3. Открыть [http://localhost:3000](http://localhost:3000)

Если при использовании Sass под Turbopack возникает ошибка «install sass», запускайте dev с Webpack: в `package.json` в скрипте `dev` можно указать `next dev --webpack`.

## Деплой

Сборка: `npm run build`. Запуск продакшен-сервера: `npm run start`. Удобно деплоить на [Vercel](https://vercel.com) или любой хостинг с поддержкой Node.js.
