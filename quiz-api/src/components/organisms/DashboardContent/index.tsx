import React from 'react';
import { DashboardHeader, DashboardBody } from '@/components/molecules';
import { Container } from '@chakra-ui/react';

const DashboardContext: React.FC = () => {
  return (
    <Container w="100%" centerContent>
      <DashboardHeader />
      <DashboardBody />
    </Container>
  );
};

export default DashboardContext;
