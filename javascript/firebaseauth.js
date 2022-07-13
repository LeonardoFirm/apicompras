firebase.auth().onAuthStateChanged(function (usuario) {
    if (usuario) {
      // Usuário está conectado
      document.getElementById('div_usuario').style.display = 'block';
      document.getElementById('div_login').style.display = 'none';
    } else {
      // Nenhum usuário está conectado
      document.getElementById('div_usuario').style.display = 'none';
      document.getElementById('div_login').style.display = 'block';
    }
  });
  
  function entrar() {
  
    var emailUsuario = document.getElementById('emailLabel').value;
    var senhaUsuario = document.getElementById('senhaLabel').value;
    
    //método de login de usuários existentes no firebase
    firebase
    .auth()
    .signInWithEmailAndPassword(emailUsuario, senhaUsuario)
    .catch(function (error) {
      // Lide com erros aqui
      var codigoErro = error.code;
      var mensagemErro = error.message;
      window.alert('Erro : ' + mensagemErro);
    });
  
  }
  
  function sair() {
    firebase.auth().signOut();
  }