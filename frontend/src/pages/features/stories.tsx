import StoryList from 'features/stories/story-list';
import { Loading } from 'features/ui';
import React, { FC, useEffect, useState } from 'react';
import shortStoriesServices, { IshortStory } from 'utils/api/short-stories-services';

const Stories: FC = () => {
  const [loading, setLoading] = useState(true);
  const [firstLoading, setFirstLoading] = useState(true);
  const [stories, setStories] = useState<IshortStory[]>([]);

  const fetchStories = async () => {
    setLoading(true);
    const data = await shortStoriesServices.getFiveShortStories();
    setStories((previous) => [...previous, ...data]);
    setLoading(false);
    setFirstLoading(false);
  };

  const fetchNextStories = async () => {
    await fetchStories();
    setTimeout(() => {
      document.getElementById(String(stories.length - 2))?.scrollIntoView();
    }, 10);
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <main className="flex flex-col items-center gap-8 p-4 mt-24">
      {firstLoading ? (
        <Loading />
      ) : (
        <>
          <StoryList stories={stories} />
          <button
            disabled={loading}
            className="w-full lg:w-1/2 xl:w-1/4 button-bg"
            onClick={fetchNextStories}
          >
            {loading ? 'Loading...' : 'Fetch next stories'}
          </button>
        </>
      )}
    </main>
  );
};

export default Stories;
