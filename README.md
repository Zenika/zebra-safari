# zebra-safari

![Build Status](https://github.com/Zenika/zebra-safari/actions/workflows/deno.yml/badge.svg)

## Objet du repo

Créer un jeu de survie avec un backend en deno. Pour la suite on verra :)

## La stack à explorer

- **pour le back** on va faire du Deno en typescript interfacé avec du graphQL

- **pour le front** on va faire du React en typescript

- **pour l'infra** on va déployer les sources sur gcp avec terraform et
  kubernetes.

## Commandes

Se placer dans le folder `/back`

### Lancer les tests

```
deno test --allow-net --allow-read --unstable
```

### Lancer l'application

```
deno run --allow-net --allow-read main.ts
```
