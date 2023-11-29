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

// Обработчик для кнопки "Применить" фильтра по статусу
    $('#applyFilter').on('click', function() {
        var selectedStatus = $('#statusFilter').val();

        try {
            // Ваш код для применения фильтра (например, скрытие/показ определенных заявок)
            if (selectedStatus === 'new') {
                // Показать только новые заявки
                $('.user-request').hide();
                $('.status.new').closest('.user-request').show();
            } else if (selectedStatus === 'resolved') {
                // Показать только решенные заявки
                $('.user-request').hide();
                $('.status.resolved').closest('.user-request').show();
            } else if (selectedStatus === 'rejected') {
                // Показать только отклоненные заявки
                $('.user-request').hide();
                $('.status.rejected').closest('.user-request').show();
            } else {
                // Показать все заявки
                $('.user-request').show();
            }
        } catch (error) {
            console.error('Произошла ошибка:', error);
        }

    });


});