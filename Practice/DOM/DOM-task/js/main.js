(function(){
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function sortHandler(){
        //@todo отобразить в html исходный массив из 10 элементов, полученный при помощи getRandomInt
        //и отсортированный в порядке возрастания
    }

    function recursiveList(data) {
        //@todo отобразить все элементы массива массивов в виде вложенных списков соблюдая вложенность
		    //исходный массив [1,2,[3,4,[6,7,8],9],10,11]
        return list;
    }

    function recursiveHeadings(data, weight) {
        var fragment = document.createDocumentFragment();
    		//@todo отобразить все элементы массива массивов в заголовков разного порядка в зависимости от уровня вложенности
    		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]
        return fragment;
    }

    function simpleValidation(form) {
       //elem.addEventListener('submit', function (ev) { ev.preventDefault(); ...});
       //@todo при сабмите формы проверять поля на пустотое значение.
		   //При ошибке подсвечивать красным соответствующее поле.
		   //Если оба поля заполнены, вывести сообщение об удачной отправке формы

    }

	  //вызывать функции здесь!
    sortHandler();
})();
