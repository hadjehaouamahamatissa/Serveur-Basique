
# 🖥️ Serveur Basique pour la gestion des inventaires de produits informatiques

Ce projet est un API RESETfull developpé avec **Node.js**, **Express**, et **MongoDB**, permettant de gerer un inventaire de produits informatiques (ordinateurs, accessoirs, périphériques, etc.).

## 🚀 Fonctionnalités

- Consulter la liste de produits
- Ajouter un nouveau produit 
- Modifier un produit existant 
- Supprimer un produit 
- Rechercher par categories et disponibilité.

## 🛠️  Technologie

- Node.js
- Express
- MongoDB & Mongoose
- Postman

## 🧩 Structure du projet

src/ 
├── controllers/  
└── productControl 
├── models/ │ 
└── productModel
├── routes/ 
└── productRoutes
├── app.js
└── gitignore
├── package.josn
└── README.md

## 🗂️ Installation 
### Installation de la dependence

bash
- npm install

### confiduration de la base de donnees
Creation d'un fichier .env contenant : 

- MONGO_URI=mongoose://localhost:27017/products-info

### Demarage du serveur

- npm run dev

## 📫 Routes API

- GET : http://localhost:3000/products/ récupèrer tout les produits.
- POST : http://localhost:3000/products/ ajouter un nouveau produit.
- GET : http://localhost:3000/products/68873dd79d77a8b664b5151d récupèrer un produit spécifique par rapport à son "id". 
- PATCH : http://localhost:3000/products/68873dd79d77a8b664b5151d mettre à jour un produit via son "id".
- PATCH : http://localhost:3000/products/68873dd79d77a8b664b5151d/pas en stock, mettre à jour un produit via rapport son "id" tout en specifiant le StockStatus.
- DELETE : http://localhost:3000/products/6887415fd13e2f8e895c472a Supprimer un produit via "id".




💡 Ce projet vise à poser une base solide pour la gestion d’inventaire dans un environnement tech local. Il peut être étendu pour répondre aux besoins de magasins informatiques au Tchad.






