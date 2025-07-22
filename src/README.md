    src/
        app/                        | приложение
---
            pages/                 | страницы
                {some-page}/        | напр, страница profile-page
                    lib/            | инфраструктурная логика (helpers/utils)
                    model/          | бизнес-логика
                    ui/             | ui-логика
---
            widgets/                | виджеты
                {some-feature}/     | напр, виджет header
                    lib/            | инфраструктурная логика (helpers/utils)
                    model/          | бизнес-логика
                    ui/             | ui-логика
---
            features/               | бизнес-фичи, которые несут ценность приложению
                {some-feature}/     | фича auth-by-phone
                    lib/            | инфраструктурная логика (helpers/utils)
                    model/          | бизнес-логика
                    ui/             | ui-логика
---
            entities/               | бизнес-сущности
                {some-entity}/      | сущность user
                    lib/            | инфраструктурная логика (helpers/utils)
                    model/          | бизнес-логика
                    ui/             | ui-логика
---
            shared/                 | переиспользуемые ресурсы
                api/                | логика запросов к API
                config/             | конфигурация приложения
                lib/                | инфраструктурная логика приложения
                ui/                 | ui-kit, компонеты общего использования, напр, кнопки