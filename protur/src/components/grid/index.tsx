import GridCard from "./GridCard"


export const Griditems = () => {
  const GridCardData = [
    {
      img: 'lugares/01.jpeg',
      link: '#'
    },
    {
      img: 'lugares/02.jpeg',
      link: '#'
    },
    {
      img: 'lugares/03.jpg',
      link: '#'
    },
    {
      img: 'lugares/04.jpeg',
      link: '#'
    },
    {
      img: 'lugares/01.jpeg',
      link: '#'
    },
    {
      img: 'lugares/02.jpeg',
      link: '#'
    },
    {
      img: 'lugares/03.jpg',
      link: '#'
    },
    {
      img: 'lugares/04.jpeg',
      link: '#'
    },
    {
      img: 'lugares/01.jpeg',
      link: '#'
    },
    {
      img: 'lugares/02.jpeg',
      link: '#'
    },
    {
      img: 'lugares/03.jpg',
      link: '#'
    },
    {
      img: 'lugares/04.jpeg',
      link: '#'
    }
    
  ]
  return (
    <>
    {GridCardData.map((item) => (
                 <GridCard img={item.img} link={""} />
              ))}
     
    </>
  )
}
