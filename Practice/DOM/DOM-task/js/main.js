(function() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function sortHandler() {

        var arr = [];
        var innerDiv;
        var innerDivSorted;
        var div;

        div = document.getElementById('sort');
        div.style.padding = '30px';

        for (var i = 0; i < 10; i++) {
            arr[i] = getRandomInt(0, 100);
        }

        innerDiv = document.createElement('div');
        innerDiv.style.padding = '20px 0'
        innerDivSorted = innerDiv.cloneNode();

        innerDiv.innerHTML = 'Unsorted array: ' + arr.toString();
        div.appendChild(innerDiv);

        arr.sort(function(prev, next) {
            return prev - next;
        })

        innerDivSorted.innerHTML = 'Sorted array: ' + arr.toString();
        div.appendChild(innerDivSorted);
    }

    function recursiveList(data) {

        function traverseArray(list, array) {
            var currentNode;

            for (var i = 0; i < array.length; i++) {
                currentNode = document.createElement('li')
                if (typeof array[i] === 'object') {
                    currentNode.appendChild(traverseArray(document.createElement('ul'), array[i]));
                } else {
                    currentNode.innerHTML = array[i];
                }
                list.appendChild(currentNode);
            }
            return list;
        }
        return traverseArray(document.createElement('ul'), data);
    }

    function recursiveHeadings(data, weight) {
        var currentNode;
        var currentHeading;

        if (weight >= 1 && weight <= 6) currentHeading = 'h' + weight;
        if (weight > 6) currentHeading = 'h6';

        for (var i = 0; i < data.length; i++) {
          if (typeof data[i] === 'object') {
            recursiveHeadings (data[i], weight + 1);
          }
          else {
            currentNode = document.createElement(currentHeading);
            currentNode.innerHTML = data[i];
            fragment.appendChild(currentNode);
          }
        }
        return fragment;
    }

    function simpleValidation(form) {
    form.addEventListener('submit', function (ev) {
       ev.preventDefault();

        var isValid = true;
        var fields = form.querySelectorAll('input[type=text]')

        fieldNames = Object.keys(fields)
        for (var field in fieldNames) {
          if (fields[field].value === '') {
            fields[field].style.outline = '1px solid red';
            isValid = false;
          } else {
              fields[field].style.outline = 'none';
          }
        }
        if (isValid) alert('данные отправлены!')
       });
    }

    //вызывать функции здесь!
    sortHandler();


    var listDiv = document.querySelector('#list');
    listDiv.appendChild(recursiveList([1, 2, [3, 4, [6, 7, 8], 9], 10, 11]));


    var headingsDiv = document.getElementById('headings');
    var fragment = document.createDocumentFragment();
    headingsDiv.appendChild(recursiveHeadings([1,2,[3,4,[6,7,8],9],10,11], 1));


    simpleValidation (document.getElementById('form'));


})();
