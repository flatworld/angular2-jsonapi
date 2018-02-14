import { Author } from '../author.model';
import { JsonApiModelConfig } from '../../../src/decorators/json-api-model-config.decorator';
import { JsonApiModel } from '../../../src/models/json-api.model';
import { Attribute } from '../../../src/decorators/attribute.decorator';
import { BelongsTo } from '../../../src/decorators/belongs-to.decorator';

@JsonApiModelConfig({
    type: 'social/events'
})
export class Event extends JsonApiModel {
    @Attribute()
    name: string;

    @BelongsTo()
    author: Author;

    formTypeField(givenField: string): string {
      return 'social::Events';
    }
}
