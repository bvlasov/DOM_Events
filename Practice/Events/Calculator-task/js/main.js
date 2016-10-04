//@ todo calculator
(function(){
    function ready(){
        var operation;

        document.getElementById( 'operators' ).addEventListener( 'click', function(e){
            e.preventDefault();
            operation = e.target.innerHTML;
        });

        document.getElementsByClassName( 'btn-calc' )[0].addEventListener( 'click', function(e){
            var firstValue = document.getElementById( 'first-value' );
            var secondValue = document.getElementById( 'second-value' );
            var resultValue = document.getElementById( 'result' );
            var result;
            switch( operation ){
                case "+": 
                    result = firstValue.value + secondValue.value;
                    break;
                case "-": 
                    result = firstValue.value - secondValue.value;
                    break;
                case "*": 
                    result = firstValue.value * secondValue.value;
                    break;
                case "/": 
                    result = firstValue.value / secondValue.value;
                    break;
            }

            firstValue.value = '';
            secondValue.value = '';

            if( !result ){
                alert( 'Ошибка ввода' );
                resultValue.value = '';
                return;
            }

            resultValue.value = result ;
        });
    }
    document.addEventListener("DOMContentLoaded", ready);
}());