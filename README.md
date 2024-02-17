# Restaurant Management System

A GraphQL-based Restaurant Management System with features like restaurant registration, menu creation, customer registration, and order management.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [GraphQL API](#graphql-api)
  
## Introduction

The Restaurant Management System is a GraphQL-based application that allows restaurants to register, create menus, and manage customer orders. It provides a flexible and efficient way to handle various restaurant-related operations.

## Features

- Restaurant registration with opening hours and location details.
- Menu creation with customizable items, descriptions, and prices.
- Customer registration for placing orders.
- Order management, including item quantities, total amounts, and timestamps.

 Restaurant Management System API Documentation
Introduction
The Restaurant Management System API provides a GraphQL-based interface for managing restaurant-related operations, including restaurant registration, menu creation, customer registration, and order management.

Base URL
All API requests should be made to the following base URL:
http://localhost:4000/graphql
Authentication
Currently, there is no authentication required for public GraphQL queries. However, certain mutations and queries may require authentication in the future.

GraphQL Playground
Visit the GraphQL Playground at http://localhost:4000/graphql to interact with the API. The Playground provides a visual and interactive environment for exploring and testing GraphQL queries and mutations.

Queries
Get Restaurant
Retrieve details of a specific restaurant by providing the restaurant ID.
query {
  getRestaurant(restaurantId: ID!) {
    id
    name
    description
    cuisineType
    location
    openingTime
    closingTime
    menu {
      id
      name
      description
      price
    }
    reviews {
      id
      customerName
      rating
      comment
    }
    createdAt
    updatedAt
  }
}

Parameters:

restaurantId (required): ID of the restaurant to retrieve.
Get Menu
Retrieve details of a specific menu by providing the menu ID.
query {
  getMenu(menuId: ID!) {
    id
    restaurantId
    items {
      id
      name
      description
      price
    }
    createdAt
    updatedAt
  }
}
Parameters:

menuId (required): ID of the menu to retrieve.
  
