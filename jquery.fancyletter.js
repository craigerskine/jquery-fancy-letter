// fancyLetter 1.0.0
(function($){
  $.fn.fancyletter = function(options){
    return this.each(function(){
      var opts = $.extend({}, $.fn.fancyletter.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
      var node = this;
      while (node.childNodes.length){
        node = node.firstChild
      }
      var text = node.nodeValue;
      var firstLetter = text.slice(0, 1);
      var re = new RegExp(opts.characters);
      if (re.test(firstLetter)){
        node.nodeValue = text.slice(1);
        $(['<span class="', opts.commonClass, ' ', opts.ltrClassPrefix, firstLetter.toLowerCase(), '">', firstLetter, '</span>'].join('')).prependTo(this)
      }
    })
  };
  $.fn.fancyletter.defaults = {
    commonClass: 'fancy-letter',
    ltrClassPrefix: 'ltr-',
    characters: '[a-zA-Z]'
  }
})(jQuery);