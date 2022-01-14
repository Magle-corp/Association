# Association

Association par Magle-corp.

- [Instance staging front](http://association-next-staging.magle.fr)
- [Instance staging back](http://association-strapi-staging.magle.fr)

🔤 TypeScript  🚀 Next.js  🎩 Strapi.js  🏗 MySQL  📋 PhpMyAdmin  🐋 Docker 🧪 Jest

___

## A propos

Projet construit à l'aide du [Starter Kit](https://github.com/Magle-corp/Starter-Kit)

Intègre le design system [Starter-UI](https://github.com/Magle-corp/Starter-UI) 🎉 [consulter le book](http://storybook-staging.magle.fr)

## Requis

Assurez-vous que les ports suivants sont disponibles :
- 3000
- 1337
- 3306
- 8081

## Installer le projet

```shell
git clone git@github.com:Magle-corp/Association.git
cd Association
git submodule init && git submodule update
cp .env.example
docker-compose up
```

## Enjoy

- Next app disponible [http://localhost:3000](http://localhost:3000)
- Strapi app disponible [http://localhost:1337](http://localhost:1337)
- PhpMyAdmin disponible [http://localhost:8081](http://localhost:8081)

## Tests

[Couverture des méthodes custom utilisées coté front](http://association-tests-staging.magle.fr)