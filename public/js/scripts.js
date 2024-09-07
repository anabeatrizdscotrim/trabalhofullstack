document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      
      const formData = new FormData(form);
      const data = {
        nome: formData.get('username'),
        cpf: formData.get('cpf'),
        telefone: formData.get('telefone')
      };
  
      try {
        const response = await fetch('/api/pessoas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        if (response.ok) {
          alert('Cadastro realizado com sucesso!');
          form.reset(); 
        } else {
          alert('Erro ao cadastrar.');
        }
      } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao cadastrar.');
      }
    });
  });
  


document.addEventListener('DOMContentLoaded', function() {
    const cpfInput = document.getElementById('cpf');

    cpfInput.addEventListener('input', function(event) {
        let cpf = cpfInput.value.replace(/\D/g, ''); 

        if (cpf.length > 11) {
            cpf = cpf.slice(0, 11); 
        }

        if (cpf.length > 6) {
            cpf = cpf.slice(0, 3) + '.' + cpf.slice(3);
        }
        if (cpf.length > 10) {
            cpf = cpf.slice(0, 7) + '.' + cpf.slice(7);
        }
        if (cpf.length > 11) {
            cpf = cpf.slice(0, 11) + '-' + cpf.slice(11);
        }

        cpfInput.value = cpf;
    });
});
