$(document).ready(function () {
    // Находим кнопку "Сообщить о проблеме"
    var reportProblemButton = $("#reportProblemButton");
    var $reportProblemSection = $("#reportProblemSection");

    // Добавляем обработчик события на кнопку "Сообщить о проблеме"
    reportProblemButton.click(function () {
        // Переключаем видимость формы
        $reportProblemSection.slideToggle('slow');

        setTimeout(function() {
            // Меняем текст кнопки в зависимости от видимости формы
            var buttonText = $("#reportProblemSection").is(":visible") ? "Сообщить о проблеме ▲" : "Сообщить о проблеме ▼";
            $("#reportProblemButton").text(buttonText);
        }, 700);
    });

    // Добавляем кнопку с иконкой в правый верхний угол формы
    var closeButton = $('#closeFormButton');
    closeButton.appendTo('#reportProblemSection');

    // Обработчик события для кнопки сворачивания формы
    closeButton.click(function() {
        $('#reportProblemSection').slideUp('slow');
    });


});