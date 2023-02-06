import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import GalleryDetails from "../../components/GalleryDetails";


 
export default function DetailsPage() {

    let {id} = useParams(); 

    const [details, setDetails] = useState([]);
    const getDetails = async () => {
        const res = await axios.get(`https://api.disneyapi.dev/characters/${id}`);
        console.log(res.data)
        setDetails([res.data])
    }

    useEffect(() => {getDetails()}, [])

    return(
        <div>
        {/* <Pagination onChangePage={getCharacters}></Pagination> */}
        <GalleryDetails list={details}></GalleryDetails>
        </div>
    )
}