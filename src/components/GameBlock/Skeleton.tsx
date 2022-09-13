import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={465}
    height={400}
    viewBox='0 0 465 400'
    backgroundColor='#d8d8d8'
    foregroundColor='#c9c7c7'>
    <rect x='8' y='15' rx='15' ry='15' width='450' height='250' />
    <rect x='48' y='267' rx='0' ry='0' width='370' height='30' />
    <rect x='98' y='305' rx='0' ry='0' width='270' height='25' />
    <rect x='148' y='346' rx='15' ry='15' width='170' height='30' />
  </ContentLoader>
);

export default Skeleton;
