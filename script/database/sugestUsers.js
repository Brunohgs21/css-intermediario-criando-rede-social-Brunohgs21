//ID dos usuários sugeridos para seguir
const sugestUsers = [3, 7, 6];
const usersIds = document.querySelector('.userIds')

function separeSugestedIds(lista) {
    let sugestList = []
    for (let i = 0; i < users.length; i++) {
        //console.log(users[i].id)
        let usuario = users[i]
        let id = users[i].id
        for (let j = 0; j < lista.length; j++) {
            let idSugested = lista[j]
            if (id == idSugested) {
                sugestList.push(usuario)
            }
        }


    }
    return sugestList
}
let sugestedIds = separeSugestedIds(sugestUsers)

function list(lista, referenciaHtml) {
    for (let i = 0; i < lista.length; i++) {
        let usuarioAtual = lista[i]


        let templateMontado = criarTemplateSugests(usuarioAtual)
        

        referenciaHtml.appendChild(templateMontado)

    }
}
list(sugestedIds, usersIds)



function criarTemplateSugests(usuario) {
    let image = usuario.img
    let name = usuario.user
    let info = usuario.stack

    const li = document.createElement('li')
    let div1 = document.createElement('div')
    let container = document.createElement('div')
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    const div2 = document.createElement('div')
    const pInfo = document.createElement('p')
    const pUser = document.createElement('p')
    const button = document.createElement('button')
    const span = document.createElement('span')

    div1.classList ='sugests-style'
    figure.classList = 'userImg'
    button.classList ='button-seguindo'
    container.classList = 'flex flex-row  justify-start gap2'
    pUser.classList ='name-User'
    //span.classList = 'span-button'
    pInfo.classList = 'info-User'

    button.innerText = 'Seguir'
    img.src = image
    if(info == undefined){
        pInfo.innerHTML = ''
    }else{

        pInfo.innerHTML = info
    }
    pUser.innerHTML = name

    span.appendChild(button)
    div2.append(pUser,pInfo)
    figure.appendChild(img)
    container.append(figure,div2)
    div1.append(container,span)
    li.append(div1)

    


    
    return li
}/*
      <div class="flex flex-row  align-center botton1">
       <div class='flex flex-row  align-center'>
       <figure class="userImg">
         <img src="../../assets/img/user1.svg" alt="">
       </figure>
       <div>
         <p>Samuel Leão</p>
         <p>Front and Engineer</p>
       </div>
       </div>
        <button class='button-seguindo'>Seguir</button>
      </div>

*/

