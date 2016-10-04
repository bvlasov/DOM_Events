//todo  реализовать анимацию - при нажатии на старт ширина элемента увеличивается, при нажатии на стоп "рост" элемента останавливается
//реализовать аккордеон - при нажатии соответствующей вкладки ее содержимое раскрывается, а содержимое остальных - скрывается


function ready() {
    (function () {
        function animate( boxWidth ){
        
            var timer; 
            var box = document.getElementsByClassName('box')[0];
            var start = document.getElementsByClassName('start')[0];
            var stop = document.getElementsByClassName('stop')[0];

            function draw(animateWidth) {
                var box = document.getElementsByClassName('box')[0];
                if (box.offsetWidth < animateWidth) {
                    box.style.width = box.offsetWidth + 5 + 'px';
                }
            }
            function clickEvent() {
                timer = setInterval(function () {
                    draw(boxWidth);
                }, 20);
                this.removeEventListener('click', clickEvent);
            }

            start.addEventListener('click', clickEvent);
            
            stop.addEventListener('click', function () {
                clearInterval(timer);
                start.addEventListener('click', clickEvent);
            });
        }
        animate( 1000 );
    } ());






    // accordeon
    (function () {

        var li = document.querySelectorAll('#accordion > li');
        //console.dir( li )
         function toggleClass(self) {
            var list = self.querySelector('.list-container');
            list.classList.toggle('show');
        };

        for (var i = 0; i < li.length; i++) {
            (function () {
                        
                li[i].addEventListener('focus',function(){ 
                    toggleClass(this);
                }, true);

                li[i].addEventListener('blur', function(){ 
                    toggleClass(this);
                }, true);

            } ());
        }


    } ());
};
document.addEventListener("DOMContentLoaded", ready);


