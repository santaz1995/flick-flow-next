'use client';
import {
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  AspectRatio,
  ModalCloseButton
} from '@chakra-ui/react';
import React from 'react';

const PlayTrailerButton = ({trailerUrl, trailerName}: {trailerUrl: string, trailerName: string}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Image cursor={'pointer'} onClick={onOpen} alt={'play'} src={'/play-icon.svg'}></Image>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW="60rem">
          <ModalBody onClick={onClose} alignContent={'center'} padding={0}>
            <AspectRatio
              borderRadius={24}
              ratio={16 / 9}
              _groupHover={{ backgroundColor: 'black' }}
            >
              <iframe
                src={trailerUrl}
                title={trailerName}
                allowFullScreen={true}
              />
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PlayTrailerButton;
