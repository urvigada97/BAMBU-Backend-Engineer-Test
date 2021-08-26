# BAMBU Backend Engineer Test

With a data in this repo, build an API that sends 10 potential investor similar with a person described in the query parameters.

- the endpoint is exposed at `people-like-you`
- each of the terms in the query parameters is optional
- the endpoint returns a JSON response with an array of scored suggested matches
    - the suggestions are sorted by descending score
    - each suggestion has a score between 0 and 1 indicating confidence in the suggestion (1 is most confident)

## Approach:

- Using express.js for web application (API) creation.
- The scoring system is implemented in 'utils.js' and can be described a sfollows:
  - 'getNumberRangeScore' using min & max value for `age, latitude, longitude * monthly income`
  - 'getExperiencedScore' returns 1 if value of `experienced` is same, else 0

## Setup - Development

### **1. Clone the repository**

```bash
git clone https://github.com/urvigada97/BAMBU-Backend-Engineer-Test.git
cd BAMBU-Backend-Engineer-Test
```

### **2. NPM**

```bash
npm install
npm run start
```

## Sample responses

**Match found**

    GET /people-like-you?age=23&latitude=40.71667&longitude=19.56667&monthlyIncome=5500&experienced=false

```json
{
    "peopleLikeYou": [
        {
            "name": "Seumas",
            "age": 23,
            "latitude": 42.0384767,
            "longitude": 21.5739781,
            "monthlyIncome": 5266,
            "experienced": "FALSE",
            "score": 0.9941387247404142
        },
        {
            "name": "Lulu",
            "age": 25,
            "latitude": 41.4410475,
            "longitude": 22.0126949,
            "monthlyIncome": 5256,
            "experienced": "FALSE",
            "score": 0.9897961979477273
        },
        {
            "name": "Orran",
            "age": 21,
            "latitude": 41.96571,
            "longitude": 22.7708273,
            "monthlyIncome": 5290,
            "experienced": "FALSE",
            "score": 0.9889839843512949
        },
        {
            "name": "Gwennie",
            "age": 21,
            "latitude": 41.9662209,
            "longitude": 23.0756589,
            "monthlyIncome": 5213,
            "experienced": "FALSE",
            "score": 0.9879070844234267
        },
        {
            "name": "Trudi",
            "age": 21,
            "latitude": 40.2259198,
            "longitude": 21.8296162,
            "monthlyIncome": 6005,
            "experienced": "FALSE",
            "score": 0.9871791024127068
        },
        {
            "name": "Jeddy",
            "age": 25,
            "latitude": 38.0329785,
            "longitude": 23.831904,
            "monthlyIncome": 5305,
            "experienced": "FALSE",
            "score": 0.9864109398474634
        },
        {
            "name": "Arlette",
            "age": 22,
            "latitude": 44.2682727,
            "longitude": 19.8906547,
            "monthlyIncome": 5999,
            "experienced": "FALSE",
            "score": 0.9861698496135961
        },
        {
            "name": "Dex",
            "age": 21,
            "latitude": 44.9794968,
            "longitude": 19.6209662,
            "monthlyIncome": 5760,
            "experienced": "FALSE",
            "score": 0.9856239351775073
        },
        {
            "name": "Kathlin",
            "age": 22,
            "latitude": 43.6158299,
            "longitude": 13.518915,
            "monthlyIncome": 5131,
            "experienced": "FALSE",
            "score": 0.9854834194821407
        },
        {
            "name": "Neils",
            "age": 25,
            "latitude": 44.4410356,
            "longitude": 18.1173229,
            "monthlyIncome": 5167,
            "experienced": "FALSE",
            "score": 0.9847955105437455
        }
    ]
}
```

**Match not found**

    GET /people-like-you?age=1000

```json
{
  "peopleLikeYou": []
}
```