============
Lancer contener mysql :
docker run --name mysql   -e MYSQL_ROOT_PASSWORD=1234   -e MYSQL_DATABASE=site-deliver-bdd   -p 3306:3306   -d mysql:latest

==============
Construire l'image du backend (Express) :
Aller dans le dossier backend
docker build -t backend-express -f Dockerfile.backend .

=============
Construire l'image du frontend (Angular) :
Aller dans le dossier frontend
Build projet ionic angular
docker build -t frontend-angular -f Dockerfile.frontend .

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