//Posts dos usuários
const posts = [
  {
    id_post: 1, //id único de cada post
    user: 2, //id do usuário que fez o post, você pode acessa-lo no array users
    //título do post
    title:
      "Empresa de Tecnologia da Informação abre vagas para programa de estágio",
    //texto do post
    text: "A Framework Digital, empresa mineira especializada em Tecnologia da Informação, irá iniciar o seu sexto programa de estágio, com o prazo de inscrições entre os dias 08 e 28 de agosto. O programa é conhecido como Framework Padawans, com inspiração nos filmes Star Wars. Nas histórias, os iniciantes fazem treinamentos para se tornar cavaleiros Jedi, que compõem o lado bom da força.",
  },
  {
    id_post: 2,
    user: 4,
    title:
      "Programa de estágio abre vagas em Segurança da Informação com regime remoto",
    text: "Em Segurança da Informação, as vagas são destinadas às áreas de Security Operations Center (SOC), Administração de Dispositivos de Segurança (ADS), Resposta a Incidentes (RI), Segurança e Privacidade e Consultoria Técnica. O candidato interessado deverá estar matriculado em um curso superior em Ciência da Computação, Segurança da Informação, Tecnologia da Informação e afins, com previsão de conclusão do curso de fevereiro de 2023 a fevereiro de 2025.",
  },
  {
    id_post: 3,
    user: 5,
    title: "O que é programação orientada a objetos e programação funcional",
    text: "A Programação Funcional é uma orientação focada na programação declarativa. Conhecendo mais a programação funcional a partir de códigos podemos nos deparar de primeira com o conceito mais central da programação funcional, que é o conceito de funções puras, isso significa que o retorno de uma função deve depender apenas dos seus parâmetros de entrada. Com classes podemos editar os valores das propriedades dos objetos criados ou ainda criar métodos para essas propriedades, ainda por cima podemos definir se vão ser públicos (vão para o objeto) ou estáticos (não são instanciados, ou seja, não vão para o objeto), e isso tem seu lado bom e ruim.",
  },
];
const usersPosts = document.querySelector('.users-posts')

function createPosts(usuarios, listaPosts, referenciaHtml) {
  let idUsuario = 0
  let usuario = 0
  let post = []
  let newPost = {
    user: 0,
    info: 0,
    img: 0,
    title: 0,
    text: 0,

  }
  for (let i = 0; i < usuarios.length; i++) {

    idUsuario = usuarios[i].id
    usuario = usuarios[i]

    for (let j = 0; j < listaPosts.length; j++) {
      let idPost = listaPosts[j].user
      let posting = listaPosts[j]
      if (idUsuario == idPost) {
        newPost = {
          user: usuario.user,
          info: usuario.stack,
          img: usuario.img,
          title: posting.title,
          text: posting.text,
          id: idUsuario,
        }
        post.push(newPost)
      }



    }
  }
  return post
}
let postList = createPosts(users, posts)



//Pensando como colocar os likes
let primeiro = postList[0]
primeiro['likes'] = 15

for (let i = 0; i < postList.length; i++) {
  let postAtual = postList[i]
  let aletorio = Math.floor(Math.random() * 1000)

  postAtual['likes'] = aletorio

}








function listPosts(list, referenciaHtml) {
  referenciaHtml.innerHTML = ''


  for (let i = 0; i < list.length; i++) {
    let postagens = list[i]

    let templateMontado = criarTemplatePosts(postagens)

    referenciaHtml.appendChild(templateMontado)

  }

}
listPosts(postList, usersPosts)
console.log(postList)
console.log(users)


function criarTemplatePosts(post) {
  //Gerando like aleatório  
  let like = 0
  for (let i = 0; i < postList.length; i++) {
    let postAtual = postList[i]
    let aletorio = Math.floor(Math.random() * 1000)
    like = aletorio

  }

  let likes = like
  let imagem = post.img
  let nome = post.user
  let info = post.info
  let texto = post.text
  let titulo = post.title
  let id = post.id

  let li = document.createElement('li')
  li.classList.add('flex')
  li.classList.add('flex-col')
  li.classList.add('padding-left')

  li.innerHTML = `
          <div class="flex align-center gap2 botton-li">
          <figure class="user-img">
          <img src="${imagem}" alt="">
          </figure>
          <span>
          <p class='name-user'>${nome}</p>
          <p class='info-user'>${info}</p>
          </span>
          </div>
          <div class='flex flex-col gap1'>
          <p class='title-style'>${titulo}</p>
          <p class='text-style'>${texto}</p>
          <div class='flex gap1'>
          <button class='insere-modal btn-abrirPost'id='post_${id}' data-control-modal="open-modal">Abrir Post</button>
          <span class='flex flex-row align-center'>
          <button class='button-like'><img src='./assets/img/Vector (1).png'/></button> <span class='count-like'>${likes}</span>
          </span>
          </div>
          </div>
          `
  return li
}

