# jquery.fancyletter.js

Requires jQuery.

### Usage

```code
$(selector).fancyletter();
```

selector = your element you'd like to manipulate

### Options
```
{
  // base class of character
  commonClass: 'ltr',
  
  // prefix class of character - actual lowercase character will get appended to this string
  prefixClass: 'ltr-',
  
  // if you want to match things other than letters, you better be good at regex
  characters: '[a-zA-Z]'
}
```

### Example

```html
<p class="blah">Chicken</p>
<p class="blah">Foo</p>
<p class="blah">Bar</p>

<script>
  $('.blah').fancyletter();
</script>
```

### Result

```html
<p class="blah">
  <span class="ltr ltr-c">C</span>hicken
</p>
<p class="blah">
  <span class="ltr ltr-f">F</span>oo
</p>
<p class="blah">
  <span class="ltr ltr-b">B</span>ar
</p>
```
