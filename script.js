$(document).ready(function(){
	$('#btn-get-user').click(function(){
		//console.log('Hizo Clic');
		getUsers();
	});

	function getUsers(){
		$.ajax({
			url:' https://mini-shop-rg.herokuapp.com/products',
			type:'GET',
			dataType: 'json',
			success: function(respuesta){
				console.log(respuesta);
				var catalogo=$('#catalogo');
				var producto =respuesta;
				var newProd="";
				var j=0;
				for(i=0; i<producto.length; i++){
					//console.log(prod);
					newProd+=
					"<div class='col-md-4'>"+
					"<div class='card mt-2 ml-2' style='width: 18rem;' >"+
					"<img class='card-img-top' src="+
					producto[j].image+
					" alt='Card image cap'>"+
					"<div class='card-body'>"+
					"<div clas='container'>"+

					"<h5 class='card-title'><b>"+
					producto[j].name+
					"</b></h5><br/>"+
					"<h5>Precio: "+
					producto[j].price+
					"</h5>"+
					"<div clas='container'>"+
					"<p align='justify'>"+
					producto[j].description+
					"</p>"+
					"</div>"+

					"</h5>Cantidad: "+
					producto[j].stock+
					"<h5>"+

					"</div>"+

					"</div>"+
					"</div>"+
					"</div>"
					;

					$("#catalogo").html(newProd);
					j++;
				}
			},

			error:function(error){
				alert('Ha Ocurrido Un Error');
			},

			complete: function(status){
				//alert('Finalizado');
			} 
		});
	} 
});