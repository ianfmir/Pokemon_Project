const alternateThemeButton = document.getElementById("alternate-theme-button");
//console.log("alternateThemeButton");
const body = document.querySelector("body");
//console.log(body);
const changeThemeImageButton = document.querySelector(".image-button");

alternateThemeButton.addEventListener("click", () => {
    //console.log("button clicked");
    const activeDarkMode = body.classList.contains("dark-mode");

    body.classList.toggle("dark-mode");
    
    if (activeDarkMode) {
        //body.classList.remove("dark-mode");
        changeThemeImageButton.setAttribute("src", "./src/images/sun.png");
    } else {
        //body.classList.add("dark-mode");
        changeThemeImageButton.setAttribute("src", "./src/images/moon.png");
    }
});