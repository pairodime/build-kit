function css(tag, property){

   var el = document.querySelectorAll(tag);

   for(i=0; i < el.length; i++){
      var style = window.getComputedStyle(el[i]),
          value = style.getPropertyValue(property);
         switch (property) {
            case 'color':
               console.log('%c '+tag+': '+value, 'background: '+value+'; color: #fff; padding: 5px; text-transform: uppercase;');
            break;
            case 'background':
               console.log('%c '+tag+': '+value, 'background: '+value+'; color: #fff; padding: 5px;  text-transform: uppercase;');
            break;
            case 'background-color':
               console.log('%c '+tag+': '+value, 'background: '+value+'; color: #fff; padding: 5px;  text-transform: uppercase;');
            break;
            case 'font':
               console.log('%c '+tag+': '+value, 'background: #000; color: #fff; padding: 5px; font-family:'+value+'; text-transform: uppercase;');
            break;
            case 'font-family':
               console.log('%c '+tag+': '+value, 'background: #000; color: #fff; padding: 5px; font-family:'+value+'; text-transform: uppercase;');
            break;
            default:
               console.log('%c '+tag+': '+value, 'background: #000; color: #fff; padding: 5px; text-transform: uppercase;');
         }
   }
}
//css('div', 'font-family')
