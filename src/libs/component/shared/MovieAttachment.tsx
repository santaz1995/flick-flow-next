'use client';
import { Tab, Text, TabList, TabPanel, TabPanels, Tabs, useColorMode } from '@chakra-ui/react';
import { MovieVideo } from '@/services/tmdb/movie/types';
import { EmblaOptionsType } from 'embla-carousel';
import YoutubeCarousel from '@/libs/component/shared/embla/YoutubeCarousel';
import MotionBox from '@/libs/component/shared/MotionBox';

type MovieAttachmentProps = {
  videos: MovieVideo[];
  images: string[];
};

const MovieAttachment = ({
  videos,
  images,
}: MovieAttachmentProps) => {
  const options: EmblaOptionsType = { dragFree: true }
  const { colorMode } = useColorMode();
  return (
    <Tabs textColor={colorMode === 'light' ? 'gray.200' : 'whiteAlpha.700'} variant='enclosed'>
      <TabList >
        <Tab><Text>Відеоролики</Text></Tab>
        <Tab><Text>Світлини</Text></Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <MotionBox>
            <YoutubeCarousel videos={videos} options={options} />
          </MotionBox>
        </TabPanel>
        <TabPanel>
          <MotionBox>
            Image
          </MotionBox>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MovieAttachment;
