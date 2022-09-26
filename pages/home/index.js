const btnPostar = document.querySelector('.btnPostar')
const form = document.querySelector('.form')

function novoPost() {
    let inputs = form.children
    let novoPost = {
        user: 'Samuel Leão',
        info: 'Front and Engineer',
        img: '../../assets/img/user1.svg',

    }

    for (let i = 0; i < inputs.length; i++) {
        let inputAtual = inputs[i]
        let inputName = inputAtual.name
        let inputValue = inputAtual.value

        if (inputName) {

            novoPost[inputName] = inputValue
        }

    }
    postList.push(novoPost)
    listPosts(postList, usersPosts)
}

btnPostar.addEventListener('click', novoPost)


/*
newPost = {
    user: usuario.user,
    info: usuario.stack,
    img: usuario.img,
    title:posting.title,
    text: posting.text,
  }
  */


const buttonTexts = ['Seguir', 'Seguindo']
const buttonFollow = document.querySelector('.button-seguindo')
const buttons = document.querySelectorAll('.button-seguindo')

//Botão Seguindo

for (let i = 0; i < buttons.length; i++) {

    let botao = buttons[i]
    botao.addEventListener('click', (event) => {

        let toggleButton = botao.classList.toggle('showFollow')
        if (toggleButton) {
            botao.innerText = `${buttonTexts[1]}`
        } else {
            botao.innerText = `${buttonTexts[0]}`
        }
    })
}

//Botão Like 
const buttonLike = document.querySelector('.button-like')
const buttonsLike = document.querySelectorAll('.button-like')
const countLike = document.querySelectorAll('.count-like')



for (let i = 0; i < buttonsLike.length; i++) {
    let botao = buttonsLike[i]
    botao.addEventListener('click', (event) => {
        let toggle = botao.classList.toggle('showLike')
        if(event.target.src == 'http://127.0.0.1:5500/css-intermediario-criando-rede-social-Brunohgs21-2/assets/img/Vector%20(1).png'){
            event.target.src = 'http://127.0.0.1:5500/css-intermediario-criando-rede-social-Brunohgs21-2/assets/img/Vector%20(2).png'
        }else{
            event.target.src = 'http://127.0.0.1:5500/css-intermediario-criando-rede-social-Brunohgs21-2/assets/img/Vector%20(1).png'
        }
        
        let numLike = countLike[i]
        let numSalvo = parseInt(numLike.innerHTML)

         if (toggle) {

             numLike.innerHTML = numSalvo + 1

         } else {
            numLike.innerHTML = numSalvo - 1

        }

    })
}


//Modal
/*  <section id='modal-container'>
    <div class="flex flex-col">
    <nav><button id='close_modal' class='button-modal-close'>X</button></nav>
    <main class="flex flex-col">
      <section class="flex flex-row  align-center botton1">
        <figure class="userImg">
          <img src="" alt="">
        </figure>
        <div>
          <p></p>
          <p></p>
        </div>
      </section>
      <section class="flex flex-col align-center botton1">
        <h1></h1>
        <p></p>
      </section>
    </main>
    </div>
    </section>
    */

/*function createModal(){
    const modalContainer = document.createElement('section')
    const contentContainer = document.createElement('div')
    const buttonContainer = document.createElement('nav')
    const closeModal = document.createElement('button')
    const modalMain = document.createElement('main')
    const userSection = document.createElement('section')
    const figure = document.createElement('figure')
    const Img = document.createElement('img')
    const divInfoUser = document.createElement('div')
    const userName = document.createElement('p')
    const userStack = document.createElement('p')
    const postSection = document.createElement('section')
    const postTittle = document.createElement('h1')
    const postText = document.createElement('p')

    figure.classList = 'userImg'
    contentContainer.classList = 'flex flex-col'

    closeModal.classList = 'button-modal-close'
    closeModal.innerText = 'x'
    closeModal.id = 'close_modal'

    modalMain.classList = 'flex flex-col'
    userSection.classList = 'flex flex-row  align-center botton1'
    postSection.classList = 'flex flex-col align-center botton1'

    modalContainer.id = 'modal-container'


    postSection.append(postTittle,postText)
    divInfoUser.append(userName,userStack)
    figure.appendChild(Img)
    userSection.append(figure,divInfoUser)
    modalMain.append(userSection,postSection)
    buttonContainer.appendChild(closeModal)
    contentContainer.append(buttonContainer, modalMain)
    modalContainer.append(contentContainer)

    
    return modalContainer
}

function showModal(){

    const modalButton = document.querySelectorAll("[data-control-modal]")
    const mainContainer = document.getElementById('main-container')
    for(let i = 0; i < modalButton.length; i++){
        let button = modalButton[i]
        console.log(button)

        button.addEventListener('click', ()=>{
            const modal = createModal()
    
            mainContainer.appendChild(modal)
        })
    }
}
    
//Parei aqui, tentando dar append do modal pra minha tela
*/

const buttonsControllersModal = document.querySelectorAll("[data-control-modal]")



for (let index = 0; index < buttonsControllersModal.length; index++) {
    buttonsControllersModal[index].addEventListener("click", () => {
        let modalId = buttonsControllersModal[index].getAttribute("data-control-modal")


        document.getElementById(modalId).classList.toggle("show-modal")
    })
}


const buttonInsereModal = document.querySelectorAll('.insere-modal')
const modalBody = document.querySelector('.modal-body')
console.log(modalBody)
console.log(buttonInsereModal)

for (let i = 0; i < buttonInsereModal.length; i++) {
    let button = buttonInsereModal[i]

    button.addEventListener('click', (event) => {

        modalBody.innerHTML = ''
        let listaPostagens = postList
        let botaoId = event.target.id.substring(5)
        console.log(botaoId)

        for (let i = 0; i < listaPostagens.length; i++) {
            let post = listaPostagens[i]

            let postId = post.id

            if (postId == botaoId) {
                console.log(post)
                let modalCriado = insereInfoModal(post)

                modalBody.appendChild(modalCriado)


            }
        }



    })
}


function insereInfoModal(info) {
    let image = info.img
    let user = info.user
    let stack = info.info
    let title = info.title
    let text = info.text

    console.log(stack)

    const section = document.createElement('section')
    const div1 = document.createElement('div')
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    const span = document.createElement('span')
    const infoNome = document.createElement('p')
    const infoStack = document.createElement('p')
    const div2 = document.createElement('div')
    const pTittle = document.createElement('p')
    const pText = document.createElement('p')

    div1.classList ='flex align-center gap2 botton-li'
    figure.classList ='userImg'
    div2.classList= 'flex flex-col gap1'
    
    img.src = image
    img.alt = user
    infoNome.innerText = user
    infoStack.innerText = stack
    pTittle.innerText = title
    pText.innerText = text

    


    div2.append(pTittle,pText)
    span.append(infoNome,infoStack)
    figure.appendChild(img)
    div1.append(figure,span)
    section.append(div1,div2)

    console.log(section)
   return section
}



/*
<section>
<div class="flex align-center">
<figure class="userImg">
<img src="${imagem}" alt="">
</figure>
<span>
<p>${nome}</p>
<p>${info}</p>
</span>
</div>
<div>
<p>${titulo}</p>
<p>${texto}</p>
</div>
</section>
          */