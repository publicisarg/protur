interface GridCardProps {
  link: string
  img: string
  alt?: string
}
const GridCard = ({link, img, alt }: GridCardProps) => {
  return (
    <>
      <article>
        <a href={link}>
            <figure>
                <img src={img} alt={alt} className="rounded-lg"/>
            </figure>
            </a>
        </article>
    </>
  )
}

export default GridCard