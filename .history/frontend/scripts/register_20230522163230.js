async function register() {
    const email = document.querySelector('#iptEmail').value;
    const password = document.querySelector('#iptPassword').value;
    const naem = document.querySelector('')

    const body = {
        email: email,
        password: password
    };
  
    try {
        const response = await fetch('http://localhost:8080/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        let data = await response.json();

        if(response.status === 200){
            console.log(data.token);        
        }

        if(response.status === 500){
            console.log("500: algo está errado com o servidor")
        }
  
        if (response.status === 401) {
            throw new Error('401: Credenciais inválidas');
        }
  
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }

    } catch (error) {
        console.error(error);
        window.alert("eu não sei oque tu fez mas só para")
    }
}
  