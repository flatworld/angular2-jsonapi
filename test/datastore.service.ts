import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { JsonApiDatastore, JsonApiDatastoreConfig } from '../src';
import { Author } from './models/author.model';
import { Book } from './models/book.model';
import { Chapter } from './models/chapter.model';
import * as Social from './models/social/event.model';

export const BASE_URL = 'http://localhost:8080/v1/';

@Injectable()
@JsonApiDatastoreConfig({
  baseUrl: BASE_URL,
  models: {
    authors: Author,
    books: Book,
    chapters: Chapter,
    'social::Events': Social.Event,
  }
})
export class Datastore extends JsonApiDatastore {

    constructor(http: Http) {
        super(http);
    }
}
