let btn = document.getElementById("addNoteButton");
let inp = document.getElementById("noteInput");
let notecontainer = document.getElementById("notesContainer");

let currentnote = null;

// Get saved notes
let savedNotes = localStorage.getItem("notes");
let notes = savedNotes ? JSON.parse(savedNotes) : [];


// Function to create a complete note
function createNote(note) {

    let newNote = document.createElement("div");
    newNote.classList.add("note");

    let noteText = document.createElement("p");
    noteText.textContent = note;

    newNote.appendChild(noteText);


    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    newNote.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function () {

        notecontainer.removeChild(newNote);

        // Remove from array
        let index = notes.indexOf(noteText.textContent);

        if (index !== -1) {
            notes.splice(index, 1);
        }

        // Update localStorage
        localStorage.setItem("notes", JSON.stringify(notes));
    });


    // Edit button
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    newNote.appendChild(editBtn);

    editBtn.addEventListener("click", function () {

        inp.value = noteText.textContent;
        currentnote = noteText;
    });


    notecontainer.appendChild(newNote);
}


// Load old notes when page opens
notes.forEach(function (note) {
    createNote(note);
});


// Add new note
btn.addEventListener("click", function () {

    if (inp.value.trim() === "") {
        return;
    }

    createNote(inp.value);

    notes.push(inp.value);

    localStorage.setItem("notes", JSON.stringify(notes));

    inp.value = "";
});


// Save edited note
inp.addEventListener("change", function () {

    if (currentnote !== null) {

        let oldText = currentnote.textContent;

        currentnote.textContent = inp.value;

        let index = notes.indexOf(oldText);

        if (index !== -1) {
            notes[index] = inp.value;
        }

        localStorage.setItem("notes", JSON.stringify(notes));

        currentnote = null;
    }
});