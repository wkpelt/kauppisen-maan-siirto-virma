# Wunder Workshop

Projektipohja 2019 kevään Wunderin ja Digitin yhteistyöworkshoppiin.

Projektilla on tarkoitus tutustua Drupalin perusteisiin ja tehdä yksinkertainen käyttöliittymä käyttäen Reactia.

## Slack

[Täältä pääsee Slackiin!](https://digitinkoodikerho.slack.com)

## Docker

Projektissa on käytössä [Docker](https://www.docker.com/).

### Docker-compose

Dockerin käyttöä helpottamaan käytetään docker-compose -tiedostoa. Docker-compose -tiedostossa kerrotaan millaiset kontit tulee muodostaa.

Saadaksesi tarvittavat kontit käyntiin täytyy seuraava komento ajaa komentoriviltä projektin juuressa:

```
$ docker-compose up -d --build
```

Tarkista, että front-end sekä drupal toimivat menemällä osoitteeseen:
http://localhost:3000/ sekä http://localhost:3030/

Seuraavalla komennolla saat kaikki kontit pysäytettyä:

```
$ docker-compose stop
```

### Drupal-kontin asetukset

Kopioi override-tiedoston pohja, jota sitten muokataan omaan käyttöön.

```
$ cp docker-compose.override.yml.example docker-compose.override.yml
```

Keksi kontin root-käyttäjälle ja mariadb:lle salasanat.
