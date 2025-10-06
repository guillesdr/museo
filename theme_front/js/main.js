window.onload = function() {

  const isMobile = $(window).width();
  const vioModal = window.localStorage.getItem('modal_vista');
  
  // si es mobile para el front
  if(isMobile < 480){
    setInterval(myTimer, 3000);
    function myTimer(){
      const contenedor = document.getElementById("cnt_logo_carga");
      contenedor.style.visibility ='hidden';
      contenedor.style.opacity ='0';
    }

    //Mostrar modal al cargar
    if(!vioModal){
        $('#cnt_formulario').css("display", "flex");
        $('#cnt_principal').css("display", "none");    
    }else{      
        $('#cnt_formulario').css("display", "none");
        $('#cnt_principal').css("display", "flex");         
    }

    $('footer').css("display", "flex"); 
  }

  // si cancela el registro
  $('#cancelar-registro').on('click', function (event) {                
      // si lleno o no los campos igual se envian
      let nombre = $("input[name=nombre]").val();
      let email = $("input[name=email]").val();
      let telefono = $("input[name=telefono]").val();
      let provincia = $("select[name=provincia]").val();
      let _token = $("input[name=_token]").val();
      // console.log('provincia', provincia, 'token', _token)

      $.ajax({
          url: url_ajax,
          type: "POST",
          data:{
              nombre:nombre,
              email:email,
              telefono:telefono,
              provincia:provincia,
              _token:_token
          },
          success: function(response) {
              if(response.status === 'error'){
                  console.log('uuups hubo un error al guardar visita.')
              }else{                            
                  $('#cnt_formulario').css("display", "none");
                  $('#cnt_principal').css("display", "flex"); 
                  window.localStorage.setItem('modal_vista', 'true');
              }
          },
          error: (response) => {
              if(response.status === 422) {
                  console.log('422', response)
                  window.location.reload();
              } else {
                  console.log('422', response)
                  window.location.reload();
              }
          }

      });
  });


  $('#guardar-registro').on('click', function (event) {

    // si lleno o no los campos igual envio.
      let nombre = $("input[name=nombre]").val();
      let email = $("input[name=email]").val();
      let telefono = $("input[name=telefono]").val();
      let provincia = $("select[name=provincia]").val();
      let _token = $("input[name=_token]").val();
      // console.log('provincia', provincia, 'token', _token)

      $.ajax({
          url: url_ajax,
          type: "POST",
          data:{
              nombre:nombre,
              email:email,
              telefono:telefono,
              provincia:provincia,
              _token:_token
          },
          success: function(response) {
              if(response.status === 'error'){
                  console.log('uuups hubo un error al guardar visita.')
              }else{                    
                  $('#cnt_formulario').css("display", "none");
                  $('#cnt_principal').css("display", "flex"); 
                  window.localStorage.setItem('modal_vista', 'true');
              }
          },
          error: (response) => {
              if(response.status === 422) {
                  console.log('422', response)
                  window.location.reload();
              } else {
                  console.log('422', response)
                  window.location.reload();
              }
          }

      });
  });
 
};
