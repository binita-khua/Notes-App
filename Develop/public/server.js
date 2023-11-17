const express = require('express');
const path = require('path');
const fs = require('fs').promises; // To use filesystem promises for reading/writing
const { v4: uuidv4 } = require('uuid'); // For generating unique IDs

const app = express();
const PORT = 3000;

// Specify the path to your static files and db.json
const publicPath = path.join(__dirname, ''); // Adjust if your files are in a 'public' subdirectory
const dbFilePath = 'C:\\Users\\binit\\Downloads\\miniature-eureka-main-20231117T194230Z-001\\miniature-eureka-main\\miniature-eureka-main\\develop\\db\\db.json';

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(publicPath));

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// Serve the notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(publicPath, 'notes.html'));
});

// API route to get all notes
app.get('/api/notes', async (req, res) => {
    try {
        const data = await fs.readFile(dbFilePath, 'utf8');
        const notes = JSON.parse(data);
        res.json(notes);
    } catch (error) {
        console.error('Error reading from the database:', error);
        res.status(500).json({ error: 'Error reading from the database', details: error.message });
    }
});

// API route to create a new note
app.post('/api/notes', async (req, res) => {
    try {
        // Read the existing notes
        const data = await fs.readFile(dbFilePath, 'utf8');
        const notes = JSON.parse(data);

        // Create a new note with a unique ID and the request body
        const newNote = { id: uuidv4(), ...req.body };
        notes.push(newNote);

        // Write the updated notes back to the db.json file
        await fs.writeFile(dbFilePath, JSON.stringify(notes, null, 2));

        // Respond with the newly added note
        res.json(newNote);
    } catch (error) {
        console.error('Error writing to the database:', error);
        res.status(500).json({ error: 'Error writing to the database', details: error.message });
    }
});

// API route to delete a note by ID
app.delete('/api/notes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await fs.readFile(dbFilePath, 'utf8');
        let notes = JSON.parse(data);

        // Find the index of the note with the specified ID
        const noteIndex = notes.findIndex((note) => note.id === id);

        if (noteIndex !== -1) {
            // Remove the note from the array
            notes.splice(noteIndex, 1);

            // Write the updated notes back to the db.json file
            await fs.writeFile(dbFilePath, JSON.stringify(notes, null, 2));

            res.json({ message: 'Note deleted successfully' });
        } else {
            res.status(404).json({ error: 'Note not found' });
        }
    } catch (error) {
        console.error('Error deleting note:', error);
        res.status(500).json({ error: 'Error deleting note', details: error.message });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
