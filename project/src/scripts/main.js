
import { Typed } from './lib'
// Export your custom function for declarative use
export { type, navActivePage, movingBackgroundImage}

var typed_how_are_you;
var typed_what_you_do;

// Code your custom function
function type( strings ) {

    $('.typed-cursor').hide();

    $('#bt_how_are').click(function(){
        destroyAll();
        typed_how_are_you = new Typed('#typed1', {
            stringsElement: '#typed_how_are_you',
            typeSpeed: 65,
            backSpeed: 10,
            loop: true,
            loopCount: Infinity,
            onComplete: function(self) {
                self.stop();
                self.destroy();
            },
        });

    });

    $('#bt_what_you').click(function(){
        destroyAll();
        typed_what_you_do = new Typed('#typed2', {
            stringsElement: '#typed_what_you_do',
            typeSpeed: 65,
            backSpeed: 10,
            loop: true,
            loopCount: Infinity,
            onComplete: function(self) {
                self.stop();
                self.destroy();
            },
        });
    });

    $('#bt_what_university').click(function(){
        destroyAll();
        typed_what_you_do = new Typed('#typed3', {
            stringsElement: '#typed_what_university',
            typeSpeed: 65,
            backSpeed: 10,
            loop: true,
            loopCount: Infinity,
            onComplete: function(self) {
                self.stop();
                self.destroy();
            },
        });
    });

    $('#bt_what_industry').click(function(){
        destroyAll();
        typed_what_you_do = new Typed('#typed4', {
            stringsElement: '#typed_what_industry',
            typeSpeed: 65,
            backSpeed: 10,
            loop: true,
            loopCount: Infinity,
            onComplete: function(self) {
                self.stop();
                self.destroy();
            },
        });
    });

    $('#bt_what_tools').click(function(){
        destroyAll();
        typed_what_you_do = new Typed('#typed5', {
            stringsElement: '#typed_what_tools',
            typeSpeed: 65,
            backSpeed: 10,
            loop: true,
            loopCount: Infinity,
            onComplete: function(self) {
                self.stop();
                self.destroy();
            },
        });
    });

}

function destroyAll(){
    typed_how_are_you instanceof Typed? typed_how_are_you.destroy(): console.log();
    typed_what_you_do instanceof Typed? typed_what_you_do.destroy(): console.log();
}


function navActivePage(){
  $('nav li a[href=".' + location.pathname + '"]').addClass('active');
  if (location.pathname == '/') $('nav li a[href="./index.html"]').addClass('active');
}


function movingBackgroundImage(){
  var bg = document.querySelector('.hero-full-container');
  var windowWidth = window.innerWidth / 5;
  var windowHeight = window.innerHeight / 5 ;

  bg.addEventListener('mousemove', (e) => {
    var mouseX = e.clientX / windowWidth;
    var mouseY = e.clientY / windowHeight;
    
    bg.style.transform = `translate3d(-${mouseX*1.5}px, -${mouseY*1.5}px, 0)`;
  });
}

