function addNote() {
    const noteText = document.getElementById('new-note').value;
    if (noteText.trim() === '') return;

    const noteContainer = document.getElementById('notes-container');
    const noteElement = document.createElement('div');
    noteElement.textContent = noteText;
    noteContainer.appendChild(noteElement);

    document.getElementById('new-note').value = '';
}

function addImage() {
    const imageInput = document.getElementById('new-image');
    const file = imageInput.files[0];
    if (!file) return;

    const galleryContainer = document.getElementById('gallery-container');
    const reader = new FileReader();
    reader.onload = function(event) {
        const imgElement = document.createElement('img');
        imgElement.src = event.target.result;
        imgElement.style.width = '100%';
        imgElement.style.marginTop = '1rem';
        galleryContainer.appendChild(imgElement);
    };
    reader.readAsDataURL(file);

    imageInput.value = '';
}
