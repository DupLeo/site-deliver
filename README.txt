=============
Construire l'image du frontend (Angular) :
Aller dans le dossier frontend
Build projet ionic angular
docker build -t frontend-angular -f Dockerfile.frontend .

==============
Construire l'image du backend (Express) :
Aller dans le dossier backend
docker build -t backend-express -f Dockerfile.backend .

==============
Creer les conteneurs avec Docker Compose :
docker-compose up --build
docker start ID_CONTAINER_MYSQL
docker start ID_CONTAINER_BACKEND

==============
Démarrer server : 
node server.js 

Démarrer angular :
npx ng serve

Modifier la bdd mySql dans container : 
Accède à une session shell dans le container MySQL :
docker exec -it [CONTAINER_ID] bash

Une fois dans le container, lance le client MySQL :
mysql -u root -p