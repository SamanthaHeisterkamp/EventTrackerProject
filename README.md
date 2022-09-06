# Event Tracker Project

## Individual portfolio project for Skill Distillery

For my individual event-tracker project, I decided to build out a ritual tracker, a "Witchual Tracker," if you will. It is something that I would personally use and hopefully be able to deploy into the Witch Community. With this application, the user can track any of their personal rituals and their intentions behind them. My database is built out with a handful of my favorite "witchuals" including making Moonwater, Simmer pots, and intention jars. 

## Overview

This application will give the user the ability to track their personal home rituals. Any ritual practicing user can add, update, and delete their "witchuals" from their personal collection. 

## REST Endpoints

| HTTP Verb | URI                      | Request Body            | Response Body  | Purpose |
|-----------|--------------------------|-------------------------|----------------|---------|
| GET       | `/api/rituals`             |                         | List of Rituals  | **List** or **collection** endpoint |
| GET       | `/api/ritual/{id}`   |                         | Single ritual    | **Retrieve** endpoint |
| GET       | `/api/ritual/{keyword}`   |                         | Single ritual    | **Retrieve** endpoint |
| POST      | `/api/ritual`             | JSON for a new Ritual     | Created ritual   | **Create** endpoint |
| POST      | `/api/ritual/{id}`        | JSON for updating Ritual  | Updated ritual   | **Replace** endpoint |
| DELETE    | `/api/ritual/{id}`        |                         | Delete ritual    | **Delete** route |

## How to Run

## URL OF DEPLOYED APP

## Technologies Used

* Java
* Spring, Spring Boot
* Spring REST
* MySQL Workbench
* Git/Github
* Gradle
* AWS

## Lessons Learned

* Gained the ability to effectively write the functionality of REST. Beginning with the Repository, the Service layer, the Service Implementation, and finally the Controller. 
* Proficient in writing Postman tests and troubleshooting any error codes that would be returned. 
