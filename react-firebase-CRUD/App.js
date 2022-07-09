
import { useState, useEffect } from "react";
import './style.css';
import firebase from "./firebaseConnection";

function App() {
  const [idPost, setIdPost] =useState('');
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [post, setPost] = useState([]);

  // monitorando itens
  useEffect(() => {
    async function loadPosts(){
      await firebase.firestore().collection('posts')
      .onSnapshot((doc) => {
        let meusPosts = [];
        
        doc.forEach((item) => {
          meusPosts.push({
            id: item.id,
            titulo: item.data().titulo,
            autor: item.data().autor,
          })
        })

        setPost(meusPosts);

      })
    }

    loadPosts();

  }, [])

  async function handleAdd(){

    await firebase.firestore().collection('posts')
    //Gerar ID automaticamente
    .add({
      titulo: titulo,
      autor: autor
    })
    .then(() => {
      console.log('DADOS CADASTRADOS COM SUCESSO!');
      setTitulo('');
      setAutor('');
    })
    .catch((error) => {
      console.log('GEROU ALGUM ERRO:' + error);
    }) 

    // await firebase.firestore().collection('posts')
    // .doc()
    // .set({
    //   titulo: titulo,
    //   autor: autor
    // })
    // .then(() => {
    //   console.log('DADOS CADASTRADOS COM SUCESSO!');
    // })
    // .catch((error) => {
    //   console.log('GEROU ALGUM ERRO:' + error);
    // })  

  }

  async function buscaPost(){
    
    await firebase.firestore().collection('posts')
    .get()
    .then((snapshot) => {
      let lista =[];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor
        })
      })

      setPost(lista);

    })
    .catch(() => {
      console.log('Deu algum erro aqui')
    })
    
    // .doc('e7or6Xvtk2egMwlhg85c')
    // .get()
    // .then((snapshot) => {
    //   setTitulo(snapshot.data().titulo);
    //   setAutor(snapshot.data().autor);
    // })
    // .catch(() => {
    //   console.log('DEU ALGUM ERRO')
    // })

  }

  async function editarPost(){
    await firebase.firestore().collection('posts')
    .doc(idPost)
    .update({
      titulo: titulo,
      autor: autor
    })
    .then(() => {
      console.log('Dados atualizado com sucesso')
      setIdPost('');
      setTitulo('');
      setAutor('');
    })
    .catch(() => {
      console.log('Erro ao atualizar');
    })
  }

  async function excluirPost(id){
    await firebase.firestore().collection('posts').doc(id)
    .delete()
    .then(() => {
      alert('Post excluido')
    })
  }

  return (
    <div>
      <div>
        <h1>ReactJS + Firebase</h1> <br/>

        <div className="container">

        <label>ID: </label>
        <input type="text" value={idPost} onChange={(e) => setIdPost(e.target.value)}></input>

        <label>Titulo: </label>
        <textarea type="text" value={titulo} onChange={ (e) => setTitulo(e.target.value)}/>

        <label>Autor: </label>
        <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} />

        <button onClick={ handleAdd }>Cadastrar</button>
        <button onClick={ buscaPost }>Buscar Post</button>
        <button onClick={ editarPost }>Editar </button> <br/>

        <ul>
          {post.map((post) => {
            return(
              <li key={post.id}>
                <span>ID - {post.id}</span><br/>
                <span>Titulo: {post.titulo}</span><br/>
                <span>Autor: {post.autor}</span><br/>
                <button onClick={() => excluirPost(post.id)} >Excluir post</button> <br/><br/>
              </li>
            )
          })}
        </ul>

        </div>
      </div>
    </div>
  );
}

export default App;
