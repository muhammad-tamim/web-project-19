import Card from '../Card/Card';

const DisplayData = ({ data, handleBookmarked }) => {
    return (
        <div>
            {data.map((singleData => <Card key={singleData.id} singleData={singleData} handleBookmarked={handleBookmarked}></Card>))}
        </div>
    );
};

export default DisplayData;