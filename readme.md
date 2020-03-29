# RESOLUCION DE PRUEBA NODEJS iDO learning

## Requisitos

- **GIT**
- **CURL**
- **NODEJS**(>= 6.X.X)

## Instalar Proyecto

Clonar proyecto

```bash
git clone git@github.com:paulpsan/prueba-Node.git
```

abrir proyecto

```bash
cd prueba-Node
```

Instalar las dependencias del proyecto

```bash
npm install
```

Iniciar el proyecto

```bash
node server/index.js
```

## Prueba de servicios

Endpoint http://localhost:3000/login

```bash
curl --location --request POST 'localhost:3000/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "username"
}'
```

Endpoint http://localhost:3000/verify

```bash
curl --location --request GET 'localhost:3000/verify' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.dXNlcm5hbWU.PZTha5Ji2EvpSvkl_METjv7HvUUdrevykZKGipM1h7A'
```
