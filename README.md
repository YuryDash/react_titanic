# Тестовое титаник

## Описание
Этот проект представляет собой веб-приложение для управления пассажирами с использованием React и библиотеки react-query для запросов данных. Основные функции приложения включают отображение списка пассажиров, фильтрацию данных и выбор отдельных элементов.

## Стек технологий
- **React**: Библиотека для построения пользовательских интерфейсов.
- **TypeScript**: Язык программирования, который добавляет типизацию в JavaScript.
- **Sass**: Препроцессор CSS, использующий синтаксис SCSS.
- **React Query**: Библиотека для управления серверными состояниями и запросами данных.
- **Axios**: HTTP-клиент для выполнения запросов к API.
- **Radix UI**: Библиотека компонентов пользовательского интерфейса.

## Установка и запуск
1. Клонируйте репозиторий на свой компьютер:
    ```bash
    git clone https://github.com/YuryDash/react_titanic
    ```

## Структура проекта
- **src**: Основная папка проекта.
    - **components**: Компоненты пользовательского интерфейса.
        - **table**: Компоненты для отображения таблицы.
    - **api**: Логика для выполнения API запросов.
        - **axiosInstance.ts**: Настройка экземпляра Axios.
        - **usePassengersQuery.ts**: Кастомный хук для выполнения запросов.
    - **shared**: Общие ресурсы и константы.
        - **constants**: Константы проекта.
        - **types.ts**: Описание типов.
