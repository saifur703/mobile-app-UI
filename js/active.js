;
(function ($) {
    $(document).ready(function () {
        $('.footer a').click(function (event) {
            event.preventDefault();
            event.stopPropagation();
            $('#hiddenDiv').show();
            window.open(this.href, '_self');
        });
    });
})(jQuery);