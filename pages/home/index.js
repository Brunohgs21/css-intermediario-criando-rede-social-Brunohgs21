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
        if (event.target.src == 'http://127.0.0.1:5500/css-intermediario-criando-rede-social-Brunohgs21-2/assets/img/Vector%20(1).png') {
            event.target.src = 'http://127.0.0.1:5500/css-intermediario-criando-rede-social-Brunohgs21-2/assets/img/Vector%20(2).png'
        } else {
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

    div1.classList = 'div-info flex align-center gap2 botton-li'
    figure.classList = 'userImg'
    div2.classList = 'flex flex-col gap1'
    pTittle.classList = 'titleStyle'
    pText.classList = 'textStyle'

    img.src = image
    img.alt = user
    infoNome.innerText = user
    infoStack.innerText = stack
    pTittle.innerText = title
    pText.innerText = text




    div2.append(pTittle, pText)
    span.append(infoNome, infoStack)
    figure.appendChild(img)
    div1.append(figure, span)
    section.append(div1, div2)

    console.log(section)
    return section
}



