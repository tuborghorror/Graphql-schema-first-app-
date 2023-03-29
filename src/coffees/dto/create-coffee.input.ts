import { MinLength } from 'class-validator';
import * as GraphQLTypes from '../../graphql';

export class CreateCoffeeInput extends GraphQLTypes.CreateCoffeeInput {
  @MinLength(3)
  name: string;
}
