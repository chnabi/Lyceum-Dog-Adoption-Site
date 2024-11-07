 export default async function getDogbyBreed(props:{params: {breed: string } }) {
    const {breed} = props.params; 
    const response = await fetch('https://dog.ceo/api/breed/{breed}/images/random')
    const dogPic = await response.json()
    return (
      <div>
        <img
        src={dogPic.message}>

        </img>
      </div>
    )
}

