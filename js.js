(function($) {

  $(document).ready(function() {

    $('.square').each(function(){

      var blockW = $(this).width();
      var lineH = parseInt($(this).css('line-height'));
      var pieces = blockW / lineH;
      var piecesSqrt = Math.sqrt(pieces);
      var piecesSqrt2 = piecesSqrt+1; /* give 1 line plus because of word breaks */
      var dimension = lineH*piecesSqrt2;

      $(this).width(dimension);
      $(this).height(dimension); 

      $(this).css('white-space', 'normal');

    });    
    
  });

})(jQuery);
