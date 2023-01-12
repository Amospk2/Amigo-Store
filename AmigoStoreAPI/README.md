# AmigoStoreAPI

# Para configurar o banco

Mude o arquivo .env.example para .env e dentro do arquivo configure corretamente as informações de cada variavel, caso precise.

# Para rodar o servidor
Instale o node no seu computador e certifique-se de que o yarn está instalado tambem (yarn -v). No terminal, execute:

- yarn install

Para rodar o servidor:
- yarn runserver


# Endpoint de auth


## Autenticação do token com servidor JWT

`POST /auth`

**Argumentos**


- `"email":string` email do usuário
- `"password":string` senha cadastrada


**Response**


- `200 OK` ao ter sucesso

```json
{
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjczNTQ3Nzk4LCJleHAiOjE2NzM1NTEzOTh9.5d6C51wKKcMWSq10BxDH0pC7agvQdlp_puK1lPJwfC4"
    }
}
```


- `401 Not Found` caso não exista

```json
{

    "msg": "Usuário não encontrado."
}
```


## logout

**Definição/Request**

`GET /logout`

**Response**

- `200 OK` ao ter sucesso

```json
{
    "msg": "logout"
}
```

# Endpoint de usuários

## Listar todos usuários

**Definição/Request**

`GET /users`

**Response**

- `200 OK` ao ter sucesso

```json
{
    "idUser": 1,
    "name": "Amós",
    "email": "Amospk2@gmail.com",
    "type": "User",
    "birthDate": "2000-01-01T02:00:00.000Z",
    "password": "$2a$12$CwxjedBGKOCwSZJWA2vBc.Hs3CTOPBJLntINA7D5OFiV/caeOBu9K",
    "image": "teste.jpng",
    "createdAt": "2023-01-11T17:16:22.000Z",
    "updatedAt": "2023-01-11T17:16:22.000Z"
}

```


## Recuperar apenas um usuário

**Definição/Request**

`GET /users/id`

**Response**

- `200 OK` ao ter sucesso

```json
{
    "idUser": 1,
    "name": "Amós",
    "email": "Amospk2@gmail.com",
    "type": "User",
    "birthDate": "2000-01-01T02:00:00.000Z",
    "password": "$2a$12$CwxjedBGKOCwSZJWA2vBc.Hs3CTOPBJLntINA7D5OFiV/caeOBu9K",
    "image": "teste.jpng",
    "createdAt": "2023-01-11T17:16:22.000Z",
    "updatedAt": "2023-01-11T17:16:22.000Z"
}

```


## Registrando novo usuário

**Definição/Request**

`POST /users`

**Argumentos**

- `"name":string` usuário que será mostrado e feito para usar a api
- `"email":string` email que será usado para comunicação
- `"password":string` senha que será encriptada antes de ir para o banco
- `"birthDate":date` data de nascimento do usuário
- `"image":file[]` imagem


**Response**

- `201 Created` ao ter sucesso

```json
{
    "idUser": 2,
    "name": "admin",
    "email": "admin@gmail.com",
    "type": "User",
    "birthDate": "2000-01-01T02:00:00.000Z",
    "image": "teste.png",
    "password": "$2a$12$IPyWYDlsqrdoExEs.gSfG.6t3o2shaCLlqMzUHpJKW8Bq2FdPXH7C",
    "updatedAt": "2023-01-12T18:07:54.633Z",
    "createdAt": "2023-01-12T18:07:54.633Z"
}

```

- `200 Created` ao ter erro com email existente

```json
{

    "msg": "Usuário já existe."
}
```

- `404 Created` ao ter erro com informações incompletas no request

```json
{

    "msg": "Preencha os campos corretamente antes de enviar."
}
```

- `500 Internal error` ao ter erro com o servidor ou sistema

```json
{
    "msg": "Falha ao criar usuário."
}
```


## Atualizando usuário

**Definição/Request**

`POST /users/1`

**Argumentos**

- `"name":string` usuário que será mostrado e feito para usar a api
- `"email":string` email que será usado para comunicação
- `"password":string` senha que será encriptada antes de ir para o banco
- `"birthDate":date` data de nascimento do usuário
- `"image":file[]` imagem


**Response**

- `201 Created` ao ter sucesso

```json
{
    "idUser": 2,
    "name": "admin",
    "email": "admin@gmail.com",
    "type": "User",
    "birthDate": "2000-01-01T02:00:00.000Z",
    "image": "teste.png",
    "password": "$2a$12$IPyWYDlsqrdoExEs.gSfG.6t3o2shaCLlqMzUHpJKW8Bq2FdPXH7C",
    "updatedAt": "2023-01-12T18:07:54.633Z",
    "createdAt": "2023-01-12T18:07:54.633Z"
}

```

- `404 Not Found` usuário não existe

```json
{

    "msg": "Usuário não encontrado."
}
```

- `404 Created` ao ter erro com informações incompletas no request

```json
{
    "msg": "Preencha os campos corretamente antes de enviar."
}
```

- `500 Internal error` ao ter erro com o servidor ou sistema


```json
{
    "msg": "Falha ao atualizar usuário."
}
```

## Deletar usuário

**Definição**

`DELETE /users/<id>`

**Response**

- `200 No Content` ao ter sucesso

```json
{
    "msg": "Exclusão feita com sucesso!"
}
```


- `404 Not Found` usuário não existe

```json
{

    "msg": "Usuário não encontrado."
}
```

- `404 Created` ao ter erro com informações incompletas no request

```json
{

    "msg": "Preencha os campos corretamente antes de enviar."
}
```
- `500 Internal error` ao ter erro com o servidor ou sistema

```json
{
    "msg": "Falha ao atualizar usuário."
}
```


