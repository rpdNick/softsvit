const switchBtn = document.querySelectorAll('.language-mode-switch');

switchBtn.forEach((element) => {
    element.addEventListener('click', function(e) {
        const languageItems = document.querySelectorAll('.language-mode-switch a');
        const langVal = e.target.attributes['data-lang'].value;
        languageItems.forEach((item) => {
            item.classList.remove('current-lang');
            if (item.attributes['data-lang'].value == langVal) {
                item.classList.add('current-lang');
            }
        });
    });
});

