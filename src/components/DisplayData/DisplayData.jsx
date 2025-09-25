import React, { use } from 'react';
import Card from '../Card/Card';

const DisplayData = ({ fetchData }) => {
    const data = use(fetchData)
    return (
        <div>
            {data.map((singleData => <Card key={singleData.id} singleData={singleData}></Card>))}
        </div>
    );
};

export default DisplayData;