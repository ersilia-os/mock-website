// index-developer.html
if(document.getElementsByClassName('typed-developer').length > 0) {
    var typed = new Typed('.typed-developer', {
        stringsElement: '#typed-strings',
        typeSpeed: 200,
        loop: true,
        strings: [
            'developer', 'designer', 'freelancer',
        ],
    });
}

//index-studio.html
if(document.getElementsByClassName('typed-studio').length > 0) {
    var typed = new Typed('.typed-studio', {
        stringsElement: '#typed-strings',
        typeSpeed: 200,
        loop: true,
        strings: [
            'Creative', 'Modern', 'Studio', 'Brand',
        ],
    });
}

//index-job.html
if(document.getElementsByClassName('typed-job').length > 0) {
    var typed = new Typed('.typed-job', {
        stringsElement: '#typed-strings',
        typeSpeed: 150,
        strings: [
            'Freelancer', 'Developer', 'Designer', 'UX Developer', 'ios Developer',
        ],
    });
}

//index-personal.html
if(document.getElementsByClassName('typed-personal').length > 0) {
    var typed = new Typed('.typed-personal', {
        stringsElement: '#typed-strings',
        typeSpeed: 150,
        strings: [
            'Calvin Carlo', 'UI/UX Designer', 'Web Developer',
        ],
    });
}

//page-comingsoon.html
if(document.getElementsByClassName('typed-comingsoon').length > 0) {
    var typed = new Typed('.typed-comingsoon', {
        stringsElement: '#typed-strings',
        typeSpeed: 150,
        strings: [
            'We are Coming soon...', 'We are Be Ready to', 'We are Connected with us',
        ],
    });
}