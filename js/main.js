const init = function(){

	const div = document.createElement('div');

	const input = document.createElement('input');
        input.disabled = true;
	
	const btn = document.createElement('button');

        const coord = "48.3704409578257, 10.898951538191506";
        const pin = "1";

        const solution = document.createElement("h3");
	
	btn.innerText = "Clear";
	
	btn.addEventListener("click", e => {
		input.value = "";
              solution.innerText = "";
	});

        const btn_accept = document.createElement('button');
        btn_accept.innerText = "Check";

        btn_accept.addEventListener("click", e => {
          if (input.value == pin) {
            solution.innerText = "Nice, here are the coordinates: " + coord;
          } else {
            alert("ne");
          }
        })
	
	input.type = "text";
	
	div.append(input);
        div.append(solution)
	
	div.append(btn);
	div.append(btn_accept);
	
	document.body.appendChild( div );
	
	const func = function(value){
		input.value += value;
	}

	const rd = new RotaryDial({callback: func});
	
}

init();
