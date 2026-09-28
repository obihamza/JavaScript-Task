function exercise19SetCookie(name, value, days) {

    const expirationDate = new Date();

    expirationDate.setTime(
        expirationDate.getTime() + days * 24 * 60 * 60 * 1000
    );

    document.cookie =
        name + "=" + encodeURIComponent(value) +
        ";expires=" + expirationDate.toUTCString() +
        ";path=/";
}


function exercise19GetCookie(name) {

    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {

        cookie = cookie.trim();

        if (cookie.startsWith(name + "=")) {
            return decodeURIComponent(
                cookie.substring(name.length + 1)
            );
        }
    }

    return null;
}


function exercise19DeleteCookie(name) {

    document.cookie =
        name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
}


const exercise19Theme = document.getElementById("exercise19-theme");
const exercise19Language = document.getElementById("exercise19-language");
const exercise19SaveButton = document.getElementById("exercise19-save");
const exercise19Display = document.getElementById("exercise19-display");


function exercise19DisplayPreferences() {

    const savedTheme = exercise19GetCookie("exercise19Theme");
    const savedLanguage = exercise19GetCookie("exercise19Language");

    if (savedTheme) {
        exercise19Theme.value = savedTheme;
    }

    if (savedLanguage) {
        exercise19Language.value = savedLanguage;
    }

    exercise19Display.textContent =
        "Theme: " + (savedTheme || "Not set") +
        " | Language: " + (savedLanguage || "Not set");
}


exercise19SaveButton.addEventListener("click", function() {

    exercise19SetCookie(
        "exercise19Theme",
        exercise19Theme.value,
        30
    );

    exercise19SetCookie(
        "exercise19Language",
        exercise19Language.value,
        30
    );

    exercise19DisplayPreferences();
});


exercise19DisplayPreferences();