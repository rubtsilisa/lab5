// calculator.js - ВНЕШНИЙ ФАЙЛ С JavaScript КОДОМ

// ОБРАБОТЧИК СОБЫТИЯ DOMContentLoaded
// Этот код выполнится только после полной загрузки DOM-дерева
// Это соответствует требованию инициализации после загрузки DOM
window.addEventListener('DOMContentLoaded', function() {
    // Логирование для отладки - видим, что DOM готов
    console.log("DOM fully loaded and parsed");
    
    // ПОЛУЧЕНИЕ ССЫЛОК НА ЭЛЕМЕНТЫ DOM
    // Все элементы получаются по их id для последующей работы с ними
    
    // Поле ввода количества товара
    const quantityInput = document.getElementById('quantity');
    
    // Выпадающий список с товарами
    const productSelect = document.getElementById('product');
    
    // Кнопка расчета стоимости
    const calculateBtn = document.getElementById('calculate-btn');
    
    // Блок для вывода результата
    const resultDiv = document.getElementById('result');
    
    // Блок для вывода ошибок валидации
    const errorDiv = document.getElementById('quantity-error');
    
    // НАЗНАЧЕНИЕ ОБРАБОТЧИКА СОБЫТИЯ НА КНОПКУ
    // Обработчик назначается после загрузки DOM, как требуется в задании
    calculateBtn.addEventListener('click', function(event) {
        // preventDefault() предотвращает стандартное поведение кнопки
        // (перезагрузку страницы, если кнопка находится в форме)
        event.preventDefault();
        
        // ОЧИСТКА ПРЕДЫДУЩИХ СООБЩЕНИЙ
        // Убираем сообщения об ошибках и результатах предыдущих расчетов
        errorDiv.textContent = '';
        resultDiv.textContent = '';
        
        // ПОЛУЧЕНИЕ ЗНАЧЕНИЙ ИЗ ФОРМЫ
        // quantityInput.value - строка, введенная пользователем
        const quantityStr = quantityInput.value;
        
        // productSelect.value - строка с ценой выбранного товара
        // parseInt() преобразует строку в целое число
        const productPrice = parseInt(productSelect.value);
        
        // ВАЛИДАЦИЯ ВВОДА С ПОМОЩЬЮ РЕГУЛЯРНОГО ВЫРАЖЕНИЯ
        // Регулярное выражение /^\d+$/ проверяет:
        // ^ - начало строки
        // \d+ - одна или более цифр
        // $ - конец строки
        // Таким образом, допускаются только целые положительные числа
        const regex = /^\d+$/;
        
        // match() проверяет соответствие строки регулярному выражению
        // Возвращает null если нет соответствия
        const match = quantityStr.match(regex);
        
        // ПРОВЕРКА НА ОШИБКИ ВВОДА
        if (match === null) {
            // Если ввод не соответствует регулярному выражению
            errorDiv.textContent = 'Ошибка: введите целое положительное число';
            return; // Прерываем выполнение функции
        }
        
        // ПРЕОБРАЗОВАНИЕ СТРОКИ В ЧИСЛО
        // parseInt() преобразует строку в целое число
        const quantity = parseInt(quantityStr);
        
        // ДОПОЛНИТЕЛЬНАЯ ПРОВЕРКА: КОЛИЧЕСТВО ДОЛЖНО БЫТЬ > 0
        if (quantity <= 0) {
            errorDiv.textContent = 'Ошибка: количество должно быть больше 0';
            return;
        }
        
        // РАСЧЕТ СТОИМОСТИ ЗАКАЗА
        // Умножаем цену товара на количество
        const totalCost = productPrice * quantity;
        
        // ВЫВОД РЕЗУЛЬТАТА НА СТРАНИЦУ
        // Используем шаблонную строку для форматирования вывода
        resultDiv.textContent = `Стоимость заказа: ${totalCost} руб.`;
    });
});