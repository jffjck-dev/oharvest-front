![oharvest](./src/assets/logo_oharvest_transparent.png)
# Projet O'HARVEST (Front)
---
## Création du projet 
---
#### Initialisation avec Vite
```
# npm 7+, extra double-dash is needed:
npm create vite@latest . -- --template react

# yarn
yarn create vite . --template react
```

#### Activer la config eslint

```
#yarn
yarn init @eslint/config

#npm
npm init @eslint/config
```
---
## Responsive
---

#### Mobile widht: 320px - 425px

```
@media only screen and (max-width: 425px) {

}
```

#### Tablet width: 425px - 1024px

```
@media only screen and (min-width: 425px) {

}
```

#### Desktop widht: 1024px - 1440px

```
@media only screen and (min-width: 1024px) {

}
```

---
## Travailler sur une nouvelle fonctionnalité
---
On se place sur la branche `dev` :
```
git checkout dev
```

On crée une nouvelle branche pour développer la nouvelle fonctionnalité :
```
git checkout -b feat/<nom-de-la-fonctionnalité>
```
Pour les noms des branches:
❌ ~~CamelCase ou pascalCase~~
✅ **snake_case**

Pour les commits, la convention est de commencer pour les:
- `config:` pour tous ce qui concerne des fichiers de configuration
- `doc:` pour tous ce qui concerne de la documentation
- `feat:` pour l'ajout de fonctionnalités
- `style:` pour tous ce qui concerne le style
- `fix:` pour résoudre un bug
- `refacto:` pour le refactoring
- `merge:` pour les merges et résolution de conflit
- `prod:` pour les mises en production (merge de dev dans main)
- `hotfix:` pour résoudre un bug sur main

Puis d'expliquer en quelques mots le travail réalisé (mentionner les composants/fichiers sur lesquel vous avez travailler)

Une fois le développement terminé et commité, on fait récupère les eventuelles modif:
```
git pull origin feat/<nom-de-la-fonctionnalité>
```

On résoud les conflits et commit.

Une fois les conflits résolus, on fait une demande de pull request sur **GitHub**, de la branche `feat/<nom-de-la-fonctionnalité>` dans la branche `dev`.

Une fois que les fonctionnalités on été rassemblés dans la branche `dev` et les bugs corrigés, 
on fait une demande de pull request sur **GitHub**, de la branche `dev` dans la branche `prod`.
