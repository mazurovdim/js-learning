# Начало создание JS проекта

Учебный проект для освоения JavaScript.

## Создание git репозетория

Нужно создать git-репозиторий и файл .gitingnore.

```
git init
```

- создание пустого локального репозитория или

```
git clone <адрес репозитория>
```

- клонирование репозитория.

В репозитории обязательно должен быть файл README.md и файл лицензии.

К проекту может быть подключено несколько репозиториев:

```
 git remote add Dmitriy https://github.com/mazurovdim/js-learning.git
```

После работы с кодом (отладка, тестирование) нужно зафиксировать результат:

```
git add .
git commit -am "<Подробное описание проделанной работы>"
```

В случае неудачи можно вернуться к предидущему стабильному состоянию репозитория командой:

```
git reset --hard
```

## Создание package.json

Этот файл нужен для хранения сведений о зависимостях данного проекта, хранения полезных скриптов.
Так же содержит информацию об авторе, версии и т.д.

```
npm install
```

## Установка среды тестирования

Для тестирования JS проектов используется фреймворк JEST.

```
npm -D install jest
```
