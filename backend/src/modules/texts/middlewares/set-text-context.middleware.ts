import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { Irequest, Iresponse } from '../../../utils/types';
import { Text } from '../entities/text.entity';
import { JSDOM, BinaryData } from 'jsdom';
import axios from 'axios';

@Injectable()
export class SetTextContextMiddleware implements NestMiddleware {
  async use(req: Irequest<Text>, res: Response, next: NextFunction) {
    // only EN because text context api supoorts EN words
    if (req.body.language.from === 'EN' || req.body.language.to === 'EN') {
      // catching sentences by word from api
      const { data }: Iresponse<string | Buffer | BinaryData> = await axios.get(
        `${process.env.TEXT_CONTEXT_API}/${req.body.text}`,
      );
      // https://www.npmjs.com/package/jsdom
      const dom: JSDOM = new JSDOM(data);
      // getting senteces from parsed HTML
      const textsContextsList: NodeListOf<Element> =
        dom.window.document.querySelectorAll('.sentence-item__text');
      const randomIndex = Math.floor(
        Math.random() * textsContextsList.length,
      );
      req.body.context = textsContextsList[randomIndex].textContent;
    }
    next();
  }
}
