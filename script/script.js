    $(document).ready(function() {
        // Show/hide password on button click
        $('#show-password-btn').click(function() {
            var passwordInput = $('#password');
            var passwordFieldType = passwordInput.attr('type');
            if (passwordFieldType === 'password') {
                passwordInput.attr('type', 'text');
                $(this).text('Hide');
            } else {
                passwordInput.attr('type', 'password');
                $(this).text('Show');
            }
        });

        // Pass data from checkbox to textarea
        $('input[type="checkbox"]').click(function() {
            var checkedValues = $('input[type="checkbox"]:checked').map(function() {
                return this.name;
            }).get().join(", ");
            $('#equipment').val(checkedValues);
        });
    });
