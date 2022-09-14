import React from 'react';
import { Image } from '@chakra-ui/react';

const DashboardImage: React.FC = () => {
  return (
    <Image
      borderRadius="full"
      boxSize="350px"
      objectFit="cover"
      alt="Perfil Image"
      src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000"
    />
  );
};

export default DashboardImage;
