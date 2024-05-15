(function() {
    var openFormButton = document.querySelector('.arrow-down');
    console.log(openFormButton);
    var form = document.querySelector('.form');
    var nav = document.querySelector('.nav');

    if (openFormButton) {
        openFormButton.addEventListener('click', function(e) {
            e.preventDefault();
            MYFL.form.open();
        })
    }

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (MYFL.form.isValid()) {
                console.log('All good');
            } else {
                console.log('Is not valid');
            }

        })
    }

    if (nav) {
        nav.addEventListener('click', function(e) {
            var target = e.target;

            if (target.tagName.toLowerCase() !== 'a') {
                return;
            }

            e.preventDefault();
            MYFL.navigation.toggleToActiveLink(target);
        });
    }

}());