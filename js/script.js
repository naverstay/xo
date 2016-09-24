$(function ($) {

    $('.reflectMe').reflect({
        height: 50,
        opacity: .08
    });

    $('.val__btn.minus').on ('click', function () {
        var val_cell = $(this).closest('.order__quantity'), val = val_cell.find('.val'), new_val = Math.max(0, (val.text().replace(/\D*/, '') * 1) - 1);

        val.text(new_val);

        $(this).toggleClass('disabled', !new_val);

        return false;
    });

    $('.val__btn.plus').on ('click', function () {
        var val_cell = $(this).closest('.order__quantity'), val = val_cell.find('.val'), new_val = (val.text().replace(/\D*/, '') * 1) + 1;

        val.text(new_val);

        val_cell.find('.minus').toggleClass('disabled', !new_val);

        return false;
    });
    
});