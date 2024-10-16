Construire l'image du frontend (Angular) :
Build projet ionic angular
docker build -t frontend-angular -f Dockerfile.frontend .

Construire l'image du backend (Express) :
docker build -t backend-express -f Dockerfile.backend .

Démarrer les conteneurs avec Docker Compose :
docker-compose up --build


Vérifier que tout fonctionne : 
Le frontend Angular sera accessible via le port que tu as défini (par exemple, http://localhost:4200 si tu utilises Angular CLI pour le dev).
Le backend Express sera accessible via le port défini dans le conteneur (par exemple, http://localhost:3000).
La base de données MySQL sera accessible sur le port 3306.