async function login() {
    const email = document.querySelector('#iptEmail').value;
    const password = document.querySelector('#iptPassword').value;

    const body = {
      email: email,
      password: password
    };
  
    try {
      const response = await fetch('http://localhost:8080/user/login', {
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
  
      if (response.status === 401) {
        throw new Error('Credenciais inválidas');
      }
  
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }

    } catch (error) {
      console.error(error);
        window.alert("senha incorreta")
    }
  }
  