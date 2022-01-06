
$(document).ready(function () {    
    formNameValidation();
    formEmailValidation();
    formSubjectValidation();
    formMessageValidation();
    submitForm()
    // moveStick();
    var submit = false;1

    console.log(submit);
    // function submitForm() {
    //     if (submit) {
    //         $('#submit').click(function () {
    //             $('#submit').submit();
    //         });
    //     } else {
    //         // alert('please enter valid form data');
    //     }
    // }


    // form name validation
    function formNameValidation() {

        $('#name').blur(function () {
            var name = $('#name').val();
            console.log(name);
            console.log(typeof (name));

            if (name == '') {
                $('.name-error').text('name can not be empty');
                $('.name-error').show();
                submit = false;
            } else {
                $('.name-error').hide();
                submit = true;
            }
        });
    }

    // form email validation
    function formEmailValidation() {
        $('#email').blur(function () {
            var name = $('#email').val();
            var regx = /^([a-zA-Z 0-9\.-]+)@([a-z]{2,8})(.[a-z]{2,8})?$/;
            if (regx.test(name)) {
                $('.email-error').hide();
                submit = true;
            } else if (name == '') {
                $('.email-error').text('email can not be empty');
                $('.email-error').show();
                submit = false;
            } else {
                $('.email-error').text('please enter a vaalid email adress');
                $('.email-error').show();
                submit = false;
            }
        });
    }

    // subject name validation
    function formSubjectValidation() {
        $('#subject').blur(function () {
            var name = $('#subject').val();
            if (name == '') {
                $('.subject-error').text('subject can not be empty');
                $('.subject-error').show();
                submit = false;
            } else {
                $('.subject-error').hide();
                submit = true;
            }
        });
    }
    // message name validation
    function formMessageValidation() {
        $('#message').blur(function () {
            var name = $('#message').val();
            if (name == '') {
                $('.message-error').text('message can not be empty');
                $('.message-error').show();
                submit = false;
            } else {
                $('.message-error').hide();
                submit = true;
            }
        });
    }


});


