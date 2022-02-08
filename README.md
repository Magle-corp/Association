# Association

Association par Magle-corp.

- [Instance staging Next.js](http://association-next-staging.magle.fr)
- [Instance staging Strapi](http://association-strapi-staging.magle.fr)
- [Couverture test des méthodes custom utilisées coté front](http://association-tests-staging.magle.fr)

🔤 TypeScript  🚀 Next.js  🎩 Strapi.js  🏗 MySQL  📋 PhpMyAdmin  🐋 Docker 🧪 Jest

___

## A propos

Projet construit à l'aide du [Starter Kit](https://github.com/Magle-corp/Starter-Kit) Next.js + Strapi

## Requis

Assurez-vous que les ports suivants sont disponibles :
- 3000 Next.js
- 1337 Strapi
- 3306 MySQL
- 8081 PhpMyAdmin

## Installer le projet

```shell
git clone git@github.com:Magle-corp/Association.git
cd Association
git submodule init && git submodule update
cp .env.example .env
docker-compose up
```

## Enjoy

- Next app disponible [http://localhost:3000](http://localhost:3000)
- Strapi app disponible [http://localhost:1337](http://localhost:1337)
- PhpMyAdmin disponible [http://localhost:8081](http://localhost:8081)

## Tests

[Couverture test des méthodes custom utilisées coté front](http://association-tests-staging.magle.fr)