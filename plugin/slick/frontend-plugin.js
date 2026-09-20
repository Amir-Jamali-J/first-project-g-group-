jQuery(document).ready(function ($) {
    "use strict";

    // =====================slick============================
    function vereesa_init_carousel() {
        $('.owl-slick').not('.slick-initialized').each(function () {
            var _this = $(this),
                _responsive = _this.data('responsive'),
                _config = [];

            if ($('body').hasClass('rtl')) {
                _config.rtl = true;
            }
            if (_this.hasClass('slick-vertical')) {
                _config.prevArrow = '<span class="pe-7s-angle-up"></span>';
                _config.nextArrow = '<span class="pe-7s-angle-down"></span>';
            } else {
                _config.prevArrow = '<span class="fa fa-angle-left"></span>';
                _config.nextArrow = '<span class="fa fa-angle-right"></span>';
            }
            _config.responsive = _responsive;
            _config.cssEase = 'linear';

            _this.slick(_config);
            _this.on('afterChange', function (event, slick, direction) {
                _this.find('.slick-active:first').addClass('first-slick');
                _this.find('.slick-active:last').addClass('last-slick');
            });
            _this.on('beforeChange', function (event, slick, currentSlide) {
                _this.find('.slick-slide').removeClass('last-slick');
                _this.find('.slick-slide').removeClass('first-slick');
            });
            if (_this.hasClass('slick-vertical')) {
                equal_elems();
                setTimeout(function () {
                    _this.slick('setPosition');
                }, 0);
            }
            _this.find('.slick-active:first').addClass('first-slick');
            _this.find('.slick-active:last').addClass('last-slick');
        });
    }



    // -----------------count down years months -------------------------------
    function vereesa_countdown() {
        if ($('.vereesa-countdown').length > 0) {
            var labels = ['سال', 'ماه', 'هفته', 'روز', 'ساعت', 'دقیقه', 'ثانیه'];
            //var layout = '<span class="box-count day"><span class="number">{dnn}</span> <span class="text">روز</span></span><span class="box-count hrs"><span class="number">{hnn}</span> <span class="text">ساعت</span></span><span class="box-count min"><span class="number">{mnn}</span> <span class="text">دقیقه</span></span><span class="box-count secs"><span class="number">{snn}</span> <span class="text">ثانیه</span></span>';
            var layout = '<span class="box-count day"><span class="number">{dnn} : </span></span><span class="box-count hrs"><span class="number">{hnn} : </span></span><span class="box-count min"><span class="number">{mnn} : </span></span><span class="box-count secs"><span class="number">{snn}</span> </span>';
            $('.vereesa-countdown').each(function () {
                var austDay = new Date($(this).data('y'), $(this).data('m') - 1, $(this).data('d'), $(this).data('h'), $(this).data('i'), $(this).data('s'));
                $(this).countdown({
                    compact: true,
                    padZeroes: true,
                    until: austDay,
                    labels: labels,
                    layout: layout
                });
            });
        }
    };
    // --------------------------------------------------------


}); 