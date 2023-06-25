const signinBtn=document.querySelector('.signinBtn')
const signupBtn=document.querySelector('.signupBtn')
const formbox=document.querySelector('.form-box')
const body=document.querySelector('body')

signupBtn.onclick=function(){
    formbox.classList.add('active')
    body.classList.add('active')
}

signinBtn.onclick=function(){
    formbox.classList.remove('active')
    body.classList.remove('active')
}
        
		const expresioncontraU = /^[0-9]{2}[a-zA-Z]{4}$/
        const expresionUsuario = /^[a-zA-Z0-9_-]+$/
		
		const form = document.querySelector('#ingreso');

		form.addEventListener('submit' , e => {
			e.preventDefault();
            const NomU = e.target.NomU.value;
			const contraU = e.target.contraU.value;
            
			try{
				if(contraU == ''  || NomU == ''){
					throw ' No se admiten campos vacíos';
				}
				
				if(!expresioncontraU.test(contraU)){
					throw ' Contraseña no cumple con el formato';
					
				}
                if(!expresionUsuario.test(NomU)){
					throw ' Usuario no cumple con el formato';
					
				}

				window.location.href = './proveedores.html';

			}catch(e){				
					Swal.fire({
						icon: 'error',
						title: 'ERROR',
						text: e,
						
			})
				
			}
		})

		

		