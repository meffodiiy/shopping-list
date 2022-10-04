# How to run this app?

## 1. Create PostgreSQL database

### 1.1 Install PostgreSQL from official site
[Download PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) and install it.

### 1.2 Create database
```
>>> psql -U postgres
>>> Password for user postgres: *******
>>> CREATE DATABASE shoppinglist;
```

### 1.3 Change postgres user password in .env
```dotenv
PASSWORD=yourpassword
```

## 2. Install all dependencies
```shell
npm install
```

## 3. Run app
```shell
npm run start
```

## 4. Open [localhost:2911](http://localhost:2911) in your browser
