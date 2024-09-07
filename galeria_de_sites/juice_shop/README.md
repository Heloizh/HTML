

# Projeto de Rolagem Horizontal 

![Prévia da página](./paginas_images/paginaHome.png)

Este projeto é um site que apresenta uma seção de rolagem horizontal para exibir imagens de produtos. O objetivo é criar uma interface interativa onde os usuários podem visualizar e navegar por diferentes produtos de forma fluida.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos principais:

- **index.html**: Página com elementos gerais.
- **style.css**: Arquivo de estilos CSS adicional para o design geral.
- **home.html**: Página Home do projeto.
- **home.css**: Arquivo de estilos CSS para a página Home.
- **design/**: Diretório contendo as imagens usadas na galeria de rolagem.

## HTML

O arquivo `index.html` define a estrutura geral das páginas. Abaixo está a estrutura básica do HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <link rel="stylesheet" href="./css/style.css">
    <title>FreshSip Juice website</title>
</head> 
<body>
    <header>
        <!--=============== LOGO ==============-->
        <div class="logo" alt="logo">
            <div class="logoIcon"><img src="../design/pins/icons/icon_juice.png"></div>
        </div>

        <!--=============== NAV PAGES==============-->
        <nav>
            <ul class="nav__links">
                <li><a href="../pagina principal/home.html">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>

        <!--=============== SEARCH ==============-->    
            <div class="search__bar">
                <input type="search" placeholder="Search..." >
                <i class="material-symbols-outlined">search</i>
            </div>
     
        <!--=============== CART ==============-->    
        <div class="cart__bar">
            <button><i class="material-symbols-outlined">shopping_cart</i></button>
        </div>
        
        <!--=============== LOGIN ==============--> 
        <a class="login" href="login">Log in</a>

        <!--=============== MENU ==============-->
            <div class="nav__menu">
                <i class='bx bx-menu-alt-right'></i>
            </div>

    </header>
    

    <script src="script.js"></script>
</body>
</html>
```

O arquivo `home.html` define a estrutura da página home. Abaixo está a estrutura básica do HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="home.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">
</head>
<body>
    <div id="index"></div>

    <section id="scrolling">

        <div class="container__products">
            <!-- Adicione as slides aqui -->
            <div class="swiper scrolling-slider">
                <div class="swiper-wrapper">
                    <div class="swiper-slide scrolling-slider">
                        <div class="scrolling-slide-img">
                            <img src="assets/img-11.png" alt="juice">
                        </div>
                    </div>
                    <!-- Mais slides -->
                </div>
            </div>
        </div>             

    </section>

    <script src="home.js"></script>
</body>
</html>
```

## CSS

O arquivo `style.css` e `home.css` são usados para estilizar a página. Abaixo está a descrição das principais regras de estilo:

```css
/* Container para produtos roláveis */
.container__products {
    display: flex;
    padding: 5% 0;
    gap: 2rem;
    overflow-x: auto;
    scroll-behavior: smooth;
    position: relative;
    scroll-snap-type: x mandatory;
}

.container__products::-webkit-scrollbar {
    display: none;
}

```

## Como Usar

1. **Clonar o Repositório**: Clone o repositório para sua máquina local.
2. **Instalar Dependências**: Se houver dependências adicionais, instale-as conforme necessário.
3. **Abrir o Arquivo HTML**: Abra o arquivo `home.html` em um navegador para visualizar o site.
4. **Personalizar**: Adapte as imagens e o conteúdo conforme necessário para o seu projeto.

## Recursos

- [Boxicons](https://boxicons.com/) para ícones.
- [Google Fonts](https://fonts.google.com/) para fontes.

## Contribuições

Sinta-se à vontade para contribuir para o projeto. Abra uma issue ou envie um pull request para sugestões ou melhorias.

---

Sinta-se à vontade para ajustar o README conforme necessário para se adequar melhor ao seu projeto.
