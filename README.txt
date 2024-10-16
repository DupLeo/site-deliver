Construire l'image du frontend (Angular) :
Build projet ionic angular
docker build -t frontend-angular -f Dockerfile.frontend .

Construire l'image du backend (Express) :
docker build -t backend-express -f Dockerfile.backend .

Démarrer les conteneurs avec Docker Compose :
docker-compose up --build
