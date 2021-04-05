---
title: Nestjs and graphql with apollo
featuredImage: "./apollo.jpeg"
date: "2020-11-10T18:30:00.284Z"
description: "Create a todo project with nestjs and graphql with apollo"
tags: ["nestjs", "graphql", "apollo"]
---

## 0 : Overview :
Nest offers two ways of building GraphQL applications, the code first and the schema first methods. 

- In the code first approach, you use decorators and TypeScript classes to generate the corresponding GraphQL schema. This approach is useful if you prefer to work exclusively with TypeScript and avoid context switching between language syntaxes.

- In the schema first approach, the source of truth is GraphQL SDL (Schema Definition Language) files. SDL is a language-agnostic way to share schema files between different platforms. Nest automatically generates your TypeScript definitions (using either classes or interfaces) based on the GraphQL schemas to reduce the need to write redundant boilerplate code.

From nestjs docucmentation : https://docs.nestjs.com/graphql/quick-start#overview

## 1 : Installation : 

First you need to install the required packages

```bash
npm i @nestjs/graphql graphql-tools graphql apollo-server-express
```

## 2 : Setup apollo to the project : 

Add GraphQLModule to the `app.module.ts`
```
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: true,
    }),
  ],
```