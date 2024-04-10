'use client';
import { Button } from '@chakra-ui/react';
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} width={['full', 'full', 100]}>
      Назад
    </Button>
  );
};

export default BackButton;
