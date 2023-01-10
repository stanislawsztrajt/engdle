import axios from 'axios';

export interface Iquote {
  quote: string;
  author: string;
  category: string;
}

export interface IphilosophyQuote {
  quote: string;
  source: string;
  philosophy: string;
}

export interface Iresponse<T> {
  data: T;
}


const url = `https://api.api-ninjas.com/v1/quotes`;
const philosophyUrl = `https://philosophy-quotes-api.glitch.me/quotes`;

class ApiNinjasQuotesServices {
  philosophyQuotes: Iquote[] = [];

  drawPhilosophyQuotes () {
    const quotes: Iquote[] = []
    for (let i = 0; i < 5; i++) {
      const drawnIndex: number = +(Math.random() * (this.philosophyQuotes.length - 1)).toFixed(0);
      quotes.push(this.philosophyQuotes[drawnIndex])
      this.philosophyQuotes.splice(drawnIndex, 1)
    }

    return quotes
  }

  async getTenQuotes(): Promise<Iquote[]> {
    if (this.philosophyQuotes.length === 0) {
      const { data }: Iresponse<IphilosophyQuote[]> = await axios.get(philosophyUrl);
      this.philosophyQuotes = data.map(quote => {
        return {
          quote: quote.quote,
          author: quote.source,
          category: quote.philosophy
        }
      });
    }

    const { data }: Iresponse<Iquote[]> = await axios.get(`${url}?limit=5`, {
      headers: { 'X-Api-Key': process.env.REACT_APP_API_NINJAS_API_KEY },
    });

    const philosophyQuotes: Iquote[] = this.drawPhilosophyQuotes()

    return [...philosophyQuotes, ...data];
  }
}

export default new ApiNinjasQuotesServices();
