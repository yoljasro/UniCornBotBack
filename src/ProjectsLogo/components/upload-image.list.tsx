import React from 'react';
import { Box, BasePropertyProps } from 'admin-bro';

const List: React.FC<BasePropertyProps> = (props) => {
  const { record, property } = props;

  const srcImg = record.params.image;

  return (
    <Box>
      {property.name === 'image' && (srcImg ? <img src={srcImg} width="100px" /> : 'no image')}
    </Box>
  );
};

export default List;
