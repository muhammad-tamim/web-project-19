import Card from '../Card/Card';

const DisplayData = ({ data }) => {
    return (
        <div>
            {data.map((singleData => <Card key={singleData.id} singleData={singleData}></Card>))}
        </div>
    );
};

export default DisplayData;