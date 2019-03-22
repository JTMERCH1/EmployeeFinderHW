$(function() {
    const validateForm = function() {
        let isValid = true;

        $(`input`).each(function() {
            if(!($this).val()) {
                isValid = false;
            }
        });
        $(`.custom-select`).each(function(i, element) {
            if(!($this).val()) {
                isValid = false;
            }
        });

        return isValid;
    }

    const displayModel = function(data) {
        $(`#match-name`).text(data.name);
        $(`#match-img`).attr('src', data.photos);
        $(`#results-model`).model('toggle');
    }
    const submit = function (e) {
        e.preventDefault();
        if (validateForm()) {
            const userData = {
                photo: $('#photo').val().trim(),
                name: $('#name').val().trim(),
                scores: [
                    $('#q1').val(),
                    $('#q2').val(),
                    $('#q3').val(),
                    $('#q4').val(),
                    $('#q5').val(),
                    $('#q6').val(),
                    $('#q7').val(),
                    $('#q8').val(),
                    $('#q9').val(),
                    $('#q10').val(),
                   
                ]
            };
            $.post('/api/employees', userData, displayModal)
        }
        $('#submit').on('click', submit)
    }
})