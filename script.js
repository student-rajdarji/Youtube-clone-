document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-bar");
    const searchButton = document.querySelector(".search-button");
    const videoPreviews = document.querySelectorAll(".video-preview");

    function filterVideos() {
        const query = searchInput.value.trim().toLowerCase();

        videoPreviews.forEach((video) => {
            const title = video.querySelector(".video-title").innerText.toLowerCase();
            if (title.includes(query)) {
                video.style.display = "block"; // Show matching video
            } else {
                video.style.display = "none"; // Hide non-matching videos
            }
        });
    }

    // Trigger filtering when search button is clicked
    searchButton.addEventListener("click", filterVideos);

    // Trigger filtering when Enter is pressed in search bar
    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            filterVideos();
        }
    });
});

function filterVideos() {
    const query = searchInput.value.trim().toLowerCase();

    videoPreviews.forEach((video) => {
        const title = video.querySelector(".video-title").innerText.toLowerCase();
        if (query === "" || title.includes(query)) {
            video.style.display = "block";
        } else {
            video.style.display = "none";
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const voiceSearchButton = document.querySelector(".voice-search-button");
    const searchInput = document.querySelector(".search-bar");

    voiceSearchButton.addEventListener("click", () => {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = "en-US";

        recognition.start();

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            searchInput.value = transcript;
            alert("Recognized speech: " + transcript);
        };

        recognition.onerror = (event) => {
            alert("Error with speech recognition: " + event.error);
        };
    });
});

const createBtn = document.getElementById("createBtn");
const createMenu = document.getElementById("createMenu");

createBtn.addEventListener("click", () => {
    createMenu.style.display = createMenu.style.display === "block" ? "none" : "block";
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!createBtn.contains(event.target) && !createMenu.contains(event.target)) {
        createMenu.style.display = "none";
    }
});

document.querySelectorAll('.sidebar-link').forEach(item => {
    item.addEventListener('click', (event) => {
        alert('Feature coming soon: ' + event.target.innerText);
    });
});