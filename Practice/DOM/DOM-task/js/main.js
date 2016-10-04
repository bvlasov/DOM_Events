(function(){
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function sortHandler(){
        var arr = [];
        var title = document.createElement( 'h3' );
        var titleSort = document.createElement( 'h3' );
        var idSort = document.getElementById( 'sort' );
        var p = document.createElement( 'p' );
        var pSort = document.createElement( 'p' );

        for( var i = 0; i < 10; i++ ){
            arr.push( getRandomInt( 0, 100 ) );
        }

        title.innerHTML = 'Random array'
        p.innerHTML = '[' + arr.join( ', ' ) + ']';
        
        arr.sort( function( a, b ){
            return a - b;
        })

        titleSort.innerHTML = 'Random sort array'
        pSort.innerHTML = '[' + arr.join( ', ' ) + ']';

        idSort.appendChild( title );
        idSort.appendChild( p );
        idSort.appendChild( titleSort );
        idSort.appendChild( pSort );
        
        //@todo отобразить в html исходный массив из 10 элементов, полученный при помощи getRandomInt
        //и отсортированный в порядке возрастания
    }

    function recursiveList(data) {
        var ul = document.createElement( 'ul' );
    
        for( var i = 0; i < data.length; i++ ){
            var li = document.createElement( 'li' );
            if ( Array.isArray( data[ i ] ) ){
                li.appendChild( recursiveList( data[ i ] ) );
                ul.appendChild( li );
                continue;
            }
            li.innerHTML = data[ i ];
            ul.appendChild( li );
        }

        //@todo отобразить все элементы массива массивов в виде вложенных списков соблюдая вложенность
		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]
        return ul;
    }

    function recursiveHeadings(data, weight) {
        var fragment = document.createDocumentFragment();

        for( var i = 0; i < data.length; i++ ){
            var title = document.createElement( 'h' + weight );         
            if ( Array.isArray( data[ i ] ) ){          
                fragment.appendChild(recursiveHeadings( data[ i ], weight + 1 ));  
                continue;
            }
            title.innerHTML = data[ i ];
            fragment.appendChild( title );
        }

   		//@todo отобразить все элементы массива массивов в заголовков разного порядка в зависимости от уровня вложенности
   		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]
        return fragment;
    }

    function simpleValidation( elem ) {

        var arrInputs = elem.getElementsByTagName( 'input' )
        var success = true;
        for ( var i = 0; i < arrInputs.length; i++ ){
            if ( !arrInputs[i].value.trim() ){
                arrInputs[i].style.borderColor = 'red';
                success = false;
            }
            else{
               arrInputs[i].style.borderColor = 'initial'; 
            };
        }
        if ( success ){
            alert('Форма отправлена!');
        }
        //elem.addEventListener('submit', function (ev) { ev.preventDefault(); ...});
        //@todo при сабмите формы проверять поля на пустотое значение.
		//При ошибке подсвечивать красным соответствующее поле.
		//Если оба поля заполнены, вывести сообщение об удачной отправке формы
    }

    //вызывать функции здесь!
    sortHandler();

    var idSort = document.getElementById( 'sort' );
    idSort.appendChild( recursiveList( [1,2,[3,4,[6,7,8],9],10,11]) );

    var idList = document.getElementById( 'list' );
    idList.appendChild( recursiveHeadings( [1,2,[3,4,[6,7,8],9],10,11], 1 ) );

    document.getElementById( 'form' ).addEventListener( 'submit', function( e ){
        simpleValidation( this );
    });



})();
