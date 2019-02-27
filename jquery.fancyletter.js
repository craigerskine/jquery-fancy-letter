;(function($, window, document, undefined){
  var pluginName = 'fancyletter',
  defaults = {
    commonClass: 'ltr',
    prefixClass: 'ltr-',
    characters: '[a-zA-Z]'
  };

  function Plugin(element, options){
    this.element = element;
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  Plugin.prototype.init = function(){
    var re = new RegExp(this.options.characters);
    var firstletter = this.element.firstChild.nodeValue.slice(0, 1);
    if($(this.element).attr('data-plugin') !== this._name && re.test(firstletter)){
      this.element.firstChild.nodeValue = this.element.firstChild.nodeValue.slice(1);
      $(this.element).attr('data-plugin', this._name);
      $(['<span class="', this.options.commonClass, ' ', this.options.prefixClass, firstletter.toLowerCase(), '" />'].join('')).text(firstletter).prependTo(this.element);
    }
  };

  $.fn[pluginName] = function(options){
    return this.each(function(){
      if(!$.data(this, 'plugin_' + pluginName)){
        $.data(this, 'plugin_' + pluginName, 
        new Plugin(this, options));
      }
    });
  }
})(jQuery, window, document);
