import './GalleryDetails.css';

export default function Gallery({list}){
    return <div>
        {list.map((item, index) => <figure key={index}>
            <img className="img-disney" src={item.imageUrl} alt={item.name} />
            <figcaption className="name-disney">{item.name}</figcaption></figure>)}
    </div>
}