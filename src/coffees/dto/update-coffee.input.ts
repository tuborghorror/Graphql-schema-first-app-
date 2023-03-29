import { IsOptional, MinLength } from 'class-validator';
import * as GraphQLTypes from '../../graphql';

export class UpdateCoffeeInput extends GraphQLTypes.UpdateCoffeeInput {
  @IsOptional()
  @MinLength(3)
  name: string;
}
