import { format, parse } from 'date-fns';
import { PropertyConverter } from '../../interfaces/property-converter.interface';

export class DateConverter implements PropertyConverter {
  mask(value: any) {
    if (value === undefined || value === null) {
      return undefined;
    }
    return parse(value);
  }

  unmask(value: any) {
    if (value === undefined || value === null) {
      return value;
    }
    return format(value, 'YYYY-MM-DDTHH:mm:ssZ');
  }
}
