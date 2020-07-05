const inputs = document.querySelectorAll('input')


function handleUpdate(){
    let value = this.value;
    const id = this.id;
    const suffix  = this.dataset.sizing || "";
    const style = getComputedStyle(document.querySelector('.box')).boxShadow;

    if (id == 'color'){
        value = hexToRGB(value)
        document.querySelector(`span[data-type='color']`).textContent = `rgb(${value})`;
    } else{
      document.querySelector(`span[data-type='${id}']`).textContent = value + suffix;
    } 
     document.documentElement.style.setProperty(`--${id}`,value + suffix);
     document.querySelector('.text').innerHTML = `<p>box-shadow: ${style}; <br>
     -webkit-box-shadow: ${style};<br>
     -moz-box-shadow: ${style};<br>
 </p>`

}

// convert the colors from #00 to rgb
function hexToRGB(h) {
    let r = 0, g = 0, b = 0;
  
    // 3 digits
    if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
  
    // 6 digits
    } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }
    
    return +r + "," + +g + "," + +b;
  }

inputs.forEach(input => input.addEventListener('change',handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate))
