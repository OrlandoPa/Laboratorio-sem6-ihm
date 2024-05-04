import Polos from './data/polos.json'

const Single = () => {

    const currentRoute = window.location.pathname;
    const polo = Polos.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{polo.name}</h1>
        <hr></hr>
        <img className='w-100 dark-image' src={polo.picture} ></img>
        <p>{polo.description}</p>
    </>);
}

export default Single;