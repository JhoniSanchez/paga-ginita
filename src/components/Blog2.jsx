import { useEffect, useRef, useState } from "react"
import { FcLike } from "react-icons/fc";

// import "../../src/app.css"
import blogs from "../services/blogs"

const Blog2 = ({ blog, dele }) => {
  const [like, setlikes] = useState(0)
  const [act, setact] = useState(blog.actualizado)
  const [visible, setvisible] = useState(blog.mostrar)
  const [nuevaData, setnuevaData] = useState(undefined)
  const [cambio, setcambio] = useState(false)
  const imgRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [precio, setprecio] = useState(blog.precio)
  const [ver, setver] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);
  // useEffect(() => {
  // }, [cambio])

  // console.log(blog)

  let aa = like === 0 ? 1 : like + 1
  // const date = {
  //   producto: blog.producto,
  //   categoria: blog.categoria,
  //   precio: nuevaData.precio,
  //   disponible: blog.disponible,
  //   color: blog.color,
  //   tamano: blog.tamano,
  //   codigo: blog.codigo,
  //   ubicacion: blog.ubicacion,
  //   actualizado: nuevaData.actualizado,
  //   mostrar: blog.mostrar,
  //   likes: blog.likes + aa,
  // }

  const date2 = {
    producto: blog.producto,
    categoria: blog.categoria,
    disponible: blog.disponible,
    color: blog.color,
    tamano: blog.tamano,
    codigo: blog.codigo,
    ubicacion: blog.ubicacion,
    actualizado: act + 1,
    mostrar: blog.mostrar,
    likes: blog.likes + aa,
  }
  const date3 = {
    mostrar: !blog.mostrar,
  }

  // console.log(cambio)
  const uplikes = async (id, data) => {
    setlikes(() => like + 1)
    await blogs.update(id, data)
  }



  const actualizado = async (e, id, data) => {
    // console.log(date2)
    console.log(e.target, id, data, nuevaData)
    setnuevaData(() => (act + 1))
    setact(() => act + 1)
    await blogs.update(id, { "actualizado": act + 1 })
  }


  const mostrar = async (e, id, data) => {
    console.log(e.target.name, "***", data);
    setnuevaData(() => ({ [e.target.name]: !blog.mostrar }))


    setvisible(!visible)

    await blogs.update(id, { mostrar: !blog.mostrar })
  }


  const actualizarDatos = async (id, data) => {
    console.log(id, data);
    setprecio(data.precio)
    await blogs.update(id, data)
    setcambio(!cambio)

  }

  const vert = ()=>{
setver(!ver)
  }
  // console.log(blog.img)

  let img = 100;
  if (blog.img <= 103) {
    img = 100
  }
  else if (blog.img < 204) {
    img = 200
  }

  else if (blog.img < 306) {
    img = 300
  }

  else if (blog.img < 406) {
    img = 400
  }
  else if (blog.img < 505) {
    img = 500
  }
  else if (blog.img < 600) {
    img = 600
  }

  return (
    // <div className="blogbody">
      // <div className="gallery">{}
        <div className="gallery-item" style={{ display: blog.mostrar ? "block" : "none" }}>
          <img
            ref={imgRef}
            src={isVisible && blog.mostrar ? `https://raw.githubusercontent.com/JhoniSanchez/img2/master/${img}/${blog.img}.jpg` : ""}
            alt=""
            loading="lazy"
            onClick={()=>vert()}
          />

          <div className="item-details">
                              <div className="ver" style={{ display: ver ? "block" : "none" }}>{blog.producto}

            <p className="price">RD$ {precio} </p>
            <span className="Wa"><button><a target="_blank" href={`https://api.whatsapp.com/send/?phone=18098997894&text=Hola%20Profe,%20me%20interesa%20el%20articulo%20${blog.producto}%20*codigo:%20${blog.ubicacion}-${blog.codigo}*`}>{blog.ubicacion}-{blog.codigo} </a></button></span>
          
          </div>
          </div>
        </div>
      // </div>
    // </div>
  )
}



export default Blog2