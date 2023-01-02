import React, { FC } from 'react';
import { IshortStory } from 'utils/api/short-stories-services';
import StoryItem from '../story-item';

interface Props {
  stories: IshortStory[];
}

const StoryList: FC<Props> = ({ stories }) => {
  return (
    <>
      {stories.map((story, index) => {
        return <StoryItem story={story} index={index} key={index + Math.random()} />;
      })}
    </>
  );
};

export default StoryList;
