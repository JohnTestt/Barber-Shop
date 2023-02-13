
//scrool

     // obtém a referência do elemento do cabeçalho
     const nav = document.querySelector('#scrolling')
     const img = document.querySelector('.nav-img')
    

     // obtém a posição do cabeçalho no documento
     const sticky = nav.offsetTop;
     
     // adiciona o evento de scroll à página
     window.onscroll = function() {
       // verifica se o usuário rolou para baixo o suficiente para fixar o cabeçalho
       if (window.pageYOffset > sticky) {
         nav.classList.add("sticky");
         nav.classList.add("scrool");
        
         img.classList.add("nav-imagem");
         

       } else {
         nav.classList.remove("sticky");
         nav.classList.remove("scrool");
         
         img.classList.remove("nav-imagem");
       }
     };
     