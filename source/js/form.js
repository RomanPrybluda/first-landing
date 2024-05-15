(function () {
    var me = {};
    var form = document.querySelector('.form-container');
    var closeButton = null;

    function onClose() {
        me.close();
        closeButton.removeEventListener('click', onClose);
        document.removeEventListener('keydown', onEscKeyPress);
    }

    function onEscKeyPress(event) {
        if (event.key === "Escape") {
            me.close();
        }
    }

    me.open = function() {
      form.classList.remove('is-hidden');

      closeButton = document.querySelector('.form__close-button');
        closeButton.addEventListener('click', onClose)
        
        document.addEventListener('keydown', onEscKeyPress);
    };

    me.close = function() {
      form.classList.add('is-hidden');
    };

    me.isValid = function() {
        var requiredFields = document.querySelectorAll('[data-valid="required"]');
        var emailValue = document.querySelector('[data-email]').value;
        var numberValue = document.querySelector('[data-number]').value;

        if (!me.isAllCompleted(requiredFields)) {
            console.log('Заполните пожалуйста все необходимые поля');
            return false;
        } else if (!MYFL.validation.isEmail(emailValue)) {
            console.log('Не верный email');
            return false;
        } else if (!MYFL.validation.isNumber(numberValue)) {
            console.log('Не верный номер');
            return false;
        }

        return true;
    };

    me.isAllCompleted = function(data) {
        var result = true;

        for (var i = 0; i < data.length; i++) {
            if (!MYFL.validation.isNotEmpty(data[i].value)) {
                result = false;
                break;
            }
        }

        return result;
    };

    MYFL.form = me;
}());