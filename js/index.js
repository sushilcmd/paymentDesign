$(document).ready(function() {
    makeTemplates();
    paymentScreen.show();
    bind('.btn.send', function() {
        $('.overlay').show();
    })
    bind('.overlay .closeBtn', function() {
        $('.overlay').hide();
        paymentScreen.show();
    })
})

var paymentScreen = new function() {
    this.show = function() {
        render('.mainContainer .formContainer', 'payment', paymentDetails)
        bind('.selectBank', function() {
            $(this).siblings('').toggle();
        })
        bind('.bank', function() {
            var value = $(this).text();
            $(this).parent('.banksContainer').siblings('').find('.text').text(value);
        })
    }
}