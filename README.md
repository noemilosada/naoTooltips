**naoTooltips jQuery plugin**
=============================
-----------------------------

Tooltips made with jQuery.  

![naoTooltips](naoTooltips.jpg?raw=true "naoTooltips")

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
The default option is `400`.  

**Classes**

```naoTooltip-wrap```  
Contains the content to be hovered and the tooltip.  

```naoTooltip```  
Main class to specify the tooltip.  

```nt-right / nt-left / nt-top / nt-bottom```  
Controls the position where the tooltip will be displayed.  
Put at the same level as naoTooltip.  

```nt-small / nt-medium / nt-large```  
Sets the size of the tooltip bubble.  
Put at the same level as naoTooltip.
