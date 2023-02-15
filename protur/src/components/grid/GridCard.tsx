import React from 'react'
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
                <img src={img} alt={alt} />
            </figure>
            </a>
        </article>
    </>
  )
}

export default GridCard