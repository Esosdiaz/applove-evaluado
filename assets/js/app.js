/*
 * Archivo principal de funcionalidad de JS
 */
(function modal(){
	var boxes = Array.from(document.getElementsByClassName("work-projects"));
	var modal = document.getElementById("work-projects-modal");
	var modaldiv = document.getElementsByClassName('modaldiv')[0];
	var close = document.getElementById("close");
	boxes.forEach(function(box){
		box.addEventListener("click", function(){
			event.preventDefault();
			modaldiv.innerHTML = box.innerHTML;
			modal.classList.remove("hidden");
			close.addEventListener("click",function(){
				modal.classList.add("hidden");
			});
		});		
	});
})();