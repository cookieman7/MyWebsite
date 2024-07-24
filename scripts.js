document.addEventListener("DOMContentLoaded", loadNotes);

function addNote() {
    const noteText = document.getElementById('new-note').value;
    if (noteText.trim() === '') return;

    const notes = getNotes();
    notes.push(noteText);
    saveNotes(notes);
    displayNotes();

    document.getElementById('new-note').value = '';
}

function deleteNote(index) {
    const notes = getNotes();
    notes.splice(index, 1);
    saveNotes(notes);
    displayNotes();
}

function getNotes() {
    return JSON.parse(localStorage.getItem('notes')) || [];
}

function saveNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function displayNotes() {
    const notesContainer = document.getElementById('notes-container');
    notesContainer.innerHTML = '';
    const notes = getNotes();

    notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        
        const noteText = document.createElement('span');
        noteText.textContent = note;
        noteElement.appendChild(noteText);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteNote(index);
        noteElement.appendChild(deleteButton);

        notesContainer.appendChild(noteElement);
    });
}

function loadNotes() {
    displayNotes();
}
