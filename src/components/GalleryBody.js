


export default function GalleryBody(data) {
  const image = data.images
  return(
    <div>
        {
          image.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
      </div>
  )
}