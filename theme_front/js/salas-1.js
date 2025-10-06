window.onload = function() {

	const isMobile = $(window).width();
  	const vioModal = window.localStorage.getItem('modal_vista');
	if(isMobile > 480){
		if (salaId == 5){ 
			location.href= routeSala;
		}else{
			location.href= routeIndex;
		}
	}else{
		$('#cnt_principal_sala').removeClass('d-none');
		$('footer').css("display", "flex");
	}
	if(!vioModal) {

		if (salaId == 5){ 
			location.href= routeSala;
		}else{
			location.href= routeIndex;
		}
	}
}