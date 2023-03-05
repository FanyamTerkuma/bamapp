import React from 'react';
import Carousel from '../../components/carousel/Carousel';

const slideImages = [
    'https://img.freepik.com/free-photo/beautiful-black-woman-holding-looking-money-her-hand_181624-43772.jpg?w=900&t=st=1677963424~exp=1677964024~hmac=60462cd34eb3812be1e13c0cc22e241d86d75b577fd01c8d2e8a1e8c1f8bdf58',
    'https://img.freepik.com/free-photo/man-taking-out-coins-from-saving-jar_23-2148294857.jpg?w=1060&t=st=1677962941~exp=1677963541~hmac=64a4f002fa3df1c07227e2421d50abb3c05fe88733c68ecebf344fbb0af1bc60',
    'https://img.freepik.com/premium-photo/businessman-protection-money-table-with-tree_34152-1752.jpg?w=900',
    'https://img.freepik.com/free-photo/result-economy-success-report-solution-statistics_1418-584.jpg?w=900&t=st=1677962609~exp=1677963209~hmac=8033fd4970ac385e253297caf3554f42b33ec45fb6e5e7381bf66d0390e7efdb',
    'https://img.freepik.com/free-photo/stacked-coins-with-dirt-plant_23-2148803905.jpg?w=1060&t=st=1677955751~exp=1677956351~hmac=7f5c4956c00c73f1ceda22a295e0bfb76899c4afc0e51e0913d241e9b91c14df'
];
function Home() {
    return (
        <div className="serif ">
            <Carousel autoslide={true}>{slideImages}</Carousel>
        </div>
    );
}

export default Home;
