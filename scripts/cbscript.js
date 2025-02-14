
function btn_about_me_bottom_text() {
    
    if (textAboutMeIsShowing === false) {
        document.getElementById("btn-about-me-bottom").innerHTML = 'READ LESS «';
        document.getElementById("btn-about-me-top").style.display = 'inline-block';
        document.getElementById("div_aboutMe_to_hide").style.display = 'block';    
        textAboutMeIsShowing = true;    
    } else if (textAboutMeIsShowing === true) {
        document.getElementById("btn-about-me-bottom").innerHTML = 'READ MORE »';
        document.getElementById("btn-about-me-top").style.display = 'none';
        document.getElementById("div_aboutMe_to_hide").style.display = 'none';
        textAboutMeIsShowing = false;
    }
}

function btn_professional_text() {
    
    if (textProfessionalIsShowing === false) {
        document.getElementById("btn-professional-bottom").innerHTML = 'READ LESS «';
        document.getElementById("btn-professional-top").style.display = 'inline-block';
        document.getElementById("div_professional_to_hide").style.display = 'block';    
        textProfessionalIsShowing = true;    
    } else if (textProfessionalIsShowing === true) {
        document.getElementById("btn-professional-bottom").innerHTML = 'READ MORE »';
        document.getElementById("btn-professional-top").style.display = 'none';
        document.getElementById("div_professional_to_hide").style.display = 'none';
        textProfessionalIsShowing = false;
    }
}

var textAboutMeIsShowing = false;
var textProfessionalIsShowing = false;


