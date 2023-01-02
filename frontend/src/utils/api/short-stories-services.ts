import axios from 'axios';

const url = `https://shortstories-api.onrender.com`;

export interface IshortStory {
  _id: string;
  title: string;
  author: string;
  story: string;
  moral: string;
}

export interface IshortStoriesResponse {
  data: IshortStory;
}

class ShortStoriesServices {
  async getFiveShortStories(): Promise<IshortStory[]> {
    const stories = [];

    for (let i = 0; i < 5; i++) {
      const { data }: IshortStoriesResponse = await axios.get(`${url}`);
      stories.push(data);
    }

    return stories;
  }
}

export default new ShortStoriesServices();
