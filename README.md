# Note Taker Web Application

This repository contains a full-stack web application that allows users to write, save, and delete notes. This application uses an Express.js backend and saves and retrieves note data from a JSON file.

## Features

- **Simple User Interface**: Utilizes Bootstrap for clean and interactive note-taking.
- **CRUD Operations**: Supports Create, Read, Update, and Delete operations for notes.
- **Persistent Storage**: Notes are persistently stored in a JSON file, simulating a database.
- **Unique Note Identification**: Employs `uuid` to assign unique identifiers to each note.

## Installation

To get this project up and running on your local machine, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone [https://github.com/binita-khua/Notes-App/](https://github.com/binita-khua/Notes-App.git)
    cd note-taker
    ```

2. **Install the dependencies**:

    ```bash
    npm install
    ```

3. **Start the application**:

    ```bash
    npm start
    ```

   This will start the server on `http://localhost:3000` by default.

## Usage

After starting the server, navigate to `http://localhost:3000` in your web browser to access the Note Taker application.

- **Create a note**: Enter the note title and content and then click the save icon.
- **View a note**: Click on a note title in the list to view its content.
- **Delete a note**: Click the delete icon next to the note you wish to remove.

## API Endpoints

The application defines the following API endpoints:

- `GET /api/notes`: Fetches all notes.
- `POST /api/notes`: Creates a new note.
- `DELETE /api/notes/:id`: Deletes the note with the specified ID.

## Built With

- [Node.js](https://nodejs.org/) - The runtime environment for executing JavaScript on the server.
- [Express.js](https://expressjs.com/) - The web application framework used.
- [Bootstrap](https://getbootstrap.com/) - The framework used for front-end styling.
- [Font Awesome](https://fontawesome.com/) - For the icons used in the application.
- [uuid](https://www.npmjs.com/package/uuid) - For generating unique IDs for the notes.

## License

This project is open-sourced under the MIT License.

## Acknowledgments

- Node.js and Express.js communities for guidance and support.
- Bootstrap and Font Awesome for making the UI design process easier.
- All contributors and testers of this application.
