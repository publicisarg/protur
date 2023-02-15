import GridCard from "./GridCard"


export const Griditems = () => {
  const GridCardData = [
    {
      img: 'https://picsum.photos/400/225',
      link: '#'
    },
    {
      img: 'https://picsum.photos/400/225',
      link: '#'
    },
    {
      img: 'https://picsum.photos/400/225',
      link: '#'
    },
    {
      img: 'https://picsum.photos/400/225',
      link: '#'
    },
    {
      img: 'https://picsum.photos/400/225',
      link: '#'
    },
    {
      img: 'https://picsum.photos/400/225',
      link: '#'
    },
    {
      img: 'https://picsum.photos/400/225',
      link: '#'
    },
    {
      img: 'https://picsum.photos/400/225',
      link: '#'
    },
    {
      img: 'https://picsum.photos/400/225',
      link: '#'
    },
    {
      img: 'https://picsum.photos/400/225',
      link: '#'
    },
    {
      img: 'https://picsum.photos/400/225',
      link: '#'
    },
    {
      img: 'https://picsum.photos/400/225',
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
