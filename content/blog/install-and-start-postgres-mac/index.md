---
title: How to install and start postgres on mac
featuredImage: "./postgres-baby.png"
date: "2020-11-10T18:30:00.284Z"
description: "Install and start postgres on mac"
tags: ["postgres", "mac"]
---

How to install and start postgres on mac, guidelines :

## 1 : Installation + Download : 

```
brew install postgres
```


## 2 : Start postgres server

By default : 
```
pg_ctl -D /usr/local/var/postgres start  
```
With brew : 
```
brew services start postgresql 
```


## 2 bis : If you want to stop postgres server 

By default : 
```
pg_ctl -D /usr/local/var/postgres stop
```
With brew : 
```
brew services stop postgresql 
```


## 3 : Write postgres code from terminal
```
psql postgres
```

## 4 : Create a new ROLE

```
CREATE ROLE name_of_your_role;

```


## 5 : Add rights to this new ROLE

```
ALTER ROLE name_of_your_role with SUPERUSER CREATEDB;
```
List of all roles : https://www.postgresql.org/docs/9.0/sql-alterrole.html


## 6 : Create database

```
CREATE DATABASE name_of_your_database WITH OWNER name_of_your_role;
```

## 6 : TIPS

- List all ROLES `\du`
- List all DATABASE `\l`
- Never forget the ";"

