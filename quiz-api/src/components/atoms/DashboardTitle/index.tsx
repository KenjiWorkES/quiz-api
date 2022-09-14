import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { defaultTheme } from '@/themes';

const DashboardTitle: React.FC = () => {
  return (
    <Box
      marginLeft={['0', '10']}
      marginTop="10"
      color={defaultTheme.colors.default.black}
    >
      <Heading as="h1" size={['2xl', '4xl']}>
        Hello, Lucas
      </Heading>
      <Heading
        marginTop="5"
        as="h2"
        size="md"
        color={defaultTheme.colors.default.neutral}
        fontWeight="normal"
      >
        lucas.kenji@valtech.com
      </Heading>
    </Box>
  );
};

export default DashboardTitle;
