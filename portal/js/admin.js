$(document).ready(function () {

    let categorySectionContent = $( "#categorySectionContent" );

    // скрываем содержимое раздела при загрузке страницы
    $(categorySectionContent).hide();

    // Обработчик клика по кнопке "▲/▼"
    $("#toggleCategorySection").click(function () {
        // Изменяем текст кнопки и скрываем/показываем содержимое раздела
        if ($(categorySectionContent).is(":visible")) {
            $(categorySectionContent).slideUp();
            $(this).text("▼");
        } else {
            $(categorySectionContent).slideDown();
            $(this).text("▲");
        }
    });

    const scrollTopButton = $('#scrollTopButton');

    // Показываем или скрываем кнопку при прокрутке страницы
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            scrollTopButton.fadeIn();
        } else {
            scrollTopButton.fadeOut();
        }
    });

    // Прокручиваем страницу вверх при клике на кнопку
    scrollTopButton.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

});
