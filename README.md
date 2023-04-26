![oharvest](./src/assets/logo_oharvest_transparent.png)
# O'HARVEST PROJECT (Front)
---
## Project Creation 
---
#### Initialization with Vite
```
# npm 7+, extra double-dash is needed:
npm create vite@latest . -- --template react

# yarn
yarn create vite . --template react
```

#### Activate the eslint config 

```
#yarn
yarn init @eslint/config

#npm
npm init @eslint/config
```
---
## Responsive format
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
## Work on a new feature
---
Be placed on `dev` branch:
```
git checkout dev
```

Create a new branch to work on a new feature :
```
git checkout -b feat/feature-name>
```
Pour les noms des branches:
❌ ~~CamelCase ou pascalCase~~
✅ **snake_case**

### ! Name branch !
❌ ~~CamelCase ou pascalCase~~
✅ **snake_case**

 ---
## Commits name:
- `config:` When configuration is changed
- `feat:` When adding new feature or new styles
- `fix:` When bug is resolved
- `doc:` When documentation is update
- `refacto:` When refactoring
- `style:` pour tous ce qui concerne le style
- `merge:` pour les merges et résolution de conflit
- `prod:` pour les mises en production (merge de dev dans main)
- `hotfix:` pour résoudre un bug sur main

Then explain in a few words the work done (mention the components/files on which you worked).
 ---

Once the development is finished and committed, we recover any modifications:

```
git pull origin feat/<name-feature>
```
Pour les noms des branches:
❌ ~~CamelCase ou pascalCase~~
✅ **snake_case**

We resolve conflicts.

Once the conflicts are resolved, we make a pull request on **GitHub**, from the `feat/<feature-name>` branch in the `dev` branch.

Once the features have been collected in the `dev` branch and the bugs fixed,
we make a pull request on **GitHub**, from the `dev` branch in the `prod` branch.
