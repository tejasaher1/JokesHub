# JokesHub

JokesHub is a web application that allows users to search, view, and save their favorite dad jokes. The application uses the **icanhazdadjoke** API to fetch jokes and provides a simple interface for users to search and add jokes to their favorites.

## Features

- **Search Jokes**: Users can search for dad jokes based on keywords and view the results as images.
- **Favourites**: Users can save jokes to their favorites list and view all saved jokes.
- **CRUD Operations**: The application allows for the creation of new jokes, saving them, and displaying favorites using a backend with MySQL for data storage.

## Tech Stack

- **Frontend**: React.js, Bootstrap 5
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **API**: [icanhazdadjoke API](https://icanhazdadjoke.com/api#fetch-a-dad-joke)

1] Home Page - 

![image](https://github.com/user-attachments/assets/92e4ed02-b9f6-480e-a82b-951fa04b0de2)

2] If we type any specific topic like friend then we will get friend related joks - 

![image](https://github.com/user-attachments/assets/a5ae66da-905c-464a-8087-8168a6f6528b)

3] If we click on Add to Favourites, then that joke will add to Favourites collection - 

![image](https://github.com/user-attachments/assets/3fb3f9cc-f869-4262-af9f-ea5cb3c83610)

4] This page will show all your Favourites jokes - 

![image](https://github.com/user-attachments/assets/419cebf1-7ec8-4a08-84dc-3b4a2a3583f0)



## Installation

### 1. Clone the repository

```bash
git clone https://github.com/tejasaher1/JokesHub.git
```

### 2. Set up the Backend (Server)
```bash
cd Server

npm install
```
### Set up the MySQL database:
```bash
Create a database in MySQL:
CREATE DATABASE dad_jokes;
CREATE Table favourites

Configure your MySQL credentials
```
### Run the server:
```bash
npm start
```

### 3. Set up the Frontend (Client)
```bash
cd Client/client

npm install

npm start

```



