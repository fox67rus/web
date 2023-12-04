document.addEventListener('DOMContentLoaded', function() {
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Опционально, чтобы прекратить отслеживание после первого появления
            }
        });
    }, { threshold: 0.5 }); // threshold - доля элемента, видимая в области видимости, при которой срабатывает событие

    var hiddenElements = document.querySelectorAll('.hidden');

    hiddenElements.forEach(function(element) {
        observer.observe(element);
    });
});
