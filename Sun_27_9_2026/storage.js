localStorage.setItem("studentName", "Hamza");
localStorage.setItem("studentId", "101");
localStorage.setItem("course", "JavaScript");

const storageInfo = document.getElementById("storage-info");

function displayStorage() {
    storageInfo.innerHTML = "";

    storageInfo.innerHTML += `<p>Number of items: ${localStorage.length}</p>`;

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        storageInfo.innerHTML += `
            <p>
                <strong>${key}</strong>: ${value}
            </p>
        `;
    }
}

document.getElementById("save-btn").addEventListener("click", function() {
    localStorage.setItem("studentName", "Hamza");
    localStorage.setItem("studentId", "101");
    localStorage.setItem("course", "JavaScript");

    displayStorage();
});

document.getElementById("get-btn").addEventListener("click", function() {
    const studentName = localStorage.getItem("studentName");

    console.log("Student Name:", studentName);

    displayStorage();
});

document.getElementById("remove-btn").addEventListener("click", function() {
    localStorage.removeItem("course");

    displayStorage();
});

document.getElementById("clear-btn").addEventListener("click", function() {
    localStorage.clear();

    displayStorage();
});

displayStorage();