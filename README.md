# Wunder Workshop

Projektipohja 2019 kevään Wunderin ja Digitin yhteistyöworkshoppiin.

Projektilla on tarkoitus tutustua Drupalin perusteisiin ja tehdä yksinkertainen käyttöliittymä käyttäen Reactia.

## Github

[Täältä](https://help.github.com/en/articles/syncing-a-fork) löytyy ohjeet originaali-repon konfiguroinnista, jotta muutokset saa pullattua mukaan omaan forkiin.

## Docker

Projektissa on käytössä [Docker](https://www.docker.com/).

### Docker-compose

Dockerin käyttöä helpottamaan käytetään docker-compose -tiedostoa. Docker-compose -tiedostossa kerrotaan millaiset kontit tulee muodostaa.

Saadaksesi tarvittavat kontit käyntiin täytyy seuraava komento ajaa komentoriviltä projektin juuressa:

```
$ docker-compose up -d --build
```

Kun tämä komento on kerran ajettu voit jatkossa käyttää komentoa: 

```
$ docker-compose up -d
```

Tarkista, että front-end sekä drupal toimivat menemällä osoitteeseen:
http://localhost:3000/ sekä http://localhost:3030/

Seuraavalla komennolla saat kaikki kontit pysäytettyä:

```
$ docker-compose stop
```
