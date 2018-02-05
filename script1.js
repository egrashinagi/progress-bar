$(document).ready(function () {
    $('#container-test').focus();
    $('#container-test .select-item').hide();
    $('#container-test').find('.select-item:eq(0)').show();
    $("#select-form").change(function () {
        $('#container-test .select-item').hide();
        id = $('#select-form option:selected').val();
        $('#' + id).show();
        $('.hide').hide();
    });

});

$('#refresh').on('click', function (e) {
    $('#container-test').focus();
    $('#container-test .select-item').hide();
    $('#container-test').find('.select-item:eq(0)').show();
    $("#select-form").change(function () {
        $('#container-test .select-item').hide();
        id = $('#select-form option:selected').val();
        $('#' + id).show();
        $('.hide').hide();
    });
});

$(function () {
    var numvop = parseInt($("#numvop").text());
    $('.medium-item').on('click', function (e) {
        e.preventDefault();
        $('.medium-item').removeClass('medium-item-select');
        $('.medium-item-2step').removeClass('medium-item-select');
        $(this).addClass('medium-item-select');
        var block = $(this).attr('href');
        var resopen = $(this).attr('data-open');
        var arr = resopen.split(',');
        n = 0;
        for (var p in arr) {
            if (arr[p] !== '') {
                var blocres = '#result_' + arr[p];
                $(blocres).show();
            }
        }

        if (block !== '#result') {
            setTimeout(function () {
                $('#container-test .select-item').hide();
                $(block).show();
                numvop = numvop + 1;
                $("#numvop").text(numvop)
            }, 300);
        } else {
            $('.content-result').show();
            $('.content-select').hide();
            $('.content-title').hide();
            $('.content').hide();

            console.info('result');
        }
    });

    $('.medium-item-2step').on('click', function (e) {
        e.preventDefault();
        $('.hide').hide();
        $('.medium-item-2step').removeClass('medium-item-select');
        $(this).addClass('medium-item-select');
        var block = $(this).attr('href');
        $(block).show();
    });

});
function save_dok() {
    for (var i = 1; i < 24; i++) {
        var blocres = '#result_' + i;
        if ($(blocres).is(':visible')) {

            $('#doc_body').html($('#doc_body').html() + $(blocres).html());
        }
    }
    var c_list = htmlDocx.asBlob($('#doc1').html(), {
        orientation: 'portrait',
        margins: {top: 1440, bottom: 1440, footer: 720, header: 720},
        header: 'top',
        footer: 'bottom'
    });
    saveAs(c_list, 'todo_list.docx');
}