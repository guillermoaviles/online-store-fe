import Homepage from "./Homepage";

const Home = ({items, setItems}) => {
    return (
        <div className='gallery-container'>
            <Homepage items={items} setItems={setItems} />
        </div>
    )
}

export default Home;