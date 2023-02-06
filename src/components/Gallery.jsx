import { Link } from "react-router-dom"


export default function Gallery({list}){
    return <div>
        {list.map((item, index) => <Link key={index} to = {`/characters/${item._id}`}><figure>
            <img src={item.imageUrl} alt={item.name} />
            <figcaption>{item.name}</figcaption></figure></Link>)}
    </div>
}