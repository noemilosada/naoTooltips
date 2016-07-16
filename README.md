**naoTooltips jQuery plugin**
=============================
-----------------------------

> Tooltips made with jQuery.  

![naoTooltips](https://raw.githubusercontent.com/noemilosada/naoTooltips/master/examples/naoTooltip.jpg)

**HTML Structure**

```html
    <div class="naoTooltip-wrap">
        <span>Hover me! (right Tooltip)</span>

        <div class="naoTooltip nt-right nt-small">
            I'm an amazing tooltip! With a small size!
        </div>
    </div>
```

**Plugin Usage**

```javascript
    $('.naoTooltip-wrap').naoTooltip({ speed: 200 });
```

**Options**

```speed:``` 200 / 400 / 600 / 'slow' / 'fast'  
This is the speed to hide and show the tooltip with the fade effect.  
The default option is 400.  

```delay:``` { number }  
This is the delay applied to show the tooltip.  
If the mouse hover the naoTooltip-wrap for the specified delay then, the tooltip will show up.  
The default option is 400.  

**Classes**

* _naoTooltip-wrap_  
Contains the content to be hovered and the tooltip.  

* _naoTooltip_  
Main class to specify the tooltip.  

* _nt-right / nt-left / nt-top / nt-bottom_  
Controls the position where the tooltip will be displayed.  
Put at the same level as naoTooltip.  

* _nt-small / nt-medium / nt-large_  
Sets the size of the tooltip bubble.  
Put at the same level as naoTooltip.
