$(document).ready(function(){
    popup = {
        init: function(){
          $('article').click(function(){
            popup.open($(this));
          });
          
          $(document).on('click', '.popup img', function(){
            return false;
          }).on('click', '.popup', function(){
            popup.close();
          })
        },
        open: function($article) {
          $('.gallery').addClass('pop');
          $popup = $('<div class="popup" />').appendTo($('body'));
          $arti = $article.clone().appendTo($('.popup'));
          $bg = $('<div class="bg" />').appendTo($('.popup'));
          $close = $('<div class="close"><svg><use xlink:href="#close"></use></svg></div>').appendTo($arti);
          setTimeout(function(){
            $('.popup').addClass('pop');
          }, 10);
        },
        close: function(){
          $('.gallery, .popup').removeClass('pop');
          setTimeout(function(){
            $('.popup').remove()
          }, 100);
        }
      }
      popup.init()
});
