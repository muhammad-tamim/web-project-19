import Card from '../Card/Card';

const DisplayData = ({ data, handleBookmarked, handleMarkAsRead }) => {
    return (
        <div>
            {data.map((singleData => <Card key={singleData.id} singleData={singleData} handleBookmarked={handleBookmarked} handleMarkAsRead={handleMarkAsRead}></Card>))}
        </div>
    );
};

export default DisplayData;