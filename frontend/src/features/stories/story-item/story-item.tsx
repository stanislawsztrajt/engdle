import React, { FC } from 'react';
import { IshortStory } from 'utils/api/short-stories-services';

interface Props {
  story: IshortStory;
  index: number;
}

const StoryItem: FC<Props> = ({ story, index }) => {
  return (
    <div id={String(index)} className="w-full p-4 border rounded-lg lg:w-2/3 xl:w-1/2">
      <h1 className='text-3xl'>
        {story.title}
      </h1>

      <p className='text-lg'>
        {story.story}
      </p>

      <p className='mt-8 italic'>
        {story.moral}
      </p>

      <div className='text-xs text-right'>
        {story.author}
      </div>
    </div>
  )
};

export default StoryItem;
