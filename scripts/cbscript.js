
function btn_about_me_bottom_text() {
    if (document.getElementById("div_to_hide").style.display === 'none') {
        document.getElementById("btn-about-me-bottom").innerText = "READ LESS";
        
    } else {
        document.getElementById("btn-about-me-bottom").innerText = "READ MORE";
    }
}


document.querySelector("btn-about-me-bottom").addEventListener("click", btn_about_me_bottom_text);

