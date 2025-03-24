# Eötvös 2025.03.18. Feladat

1. Készítsük el az alábbi interface-eket:

genres = []

| IGame       | type        |
| ----------- | ----------- |
| id          | string      |
| name        | string      |
| releaseDate | Date        |
| genre       | GenreType[] |
| score       | number      |
| lowestPrice | number      |
| img         | string      |

|IAddress|type|
|zip|number|
|city|string|
|street|string|
|num|number|
|info|opcionális string|

| IItem | type   |
| ----- | ------ |
| game  | IGame  |
| count | number |

| IStore    | type     |
| --------- | -------- |
| id        | string   |
| name      | string   |
| address   | IAddress |
| inventory | IItem[]  |

2. Készítsünk Context-et játékok tárolására, hozzáadására, törlésére.

3. Készítsünk Context-et boltok tárolására, hozzáadására, törlésére.

4. Készítsük az alábbi útvonalakat:

- new-game
- new-store
- games
- stores

5. Készítsünk komponenseket az elérési útvonalaknak megfelelően. Implementáljuk a kontextusokhoz megfelelően.

6. CSS
