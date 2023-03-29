import { Resolver, Query, ResolveField } from '@nestjs/graphql';
import * as GraphQLTypes from '../graphql';

@Resolver('DrinksResult')
export class DrinksResolver {
  @Query('drinks')
  async findAll(): Promise<GraphQLTypes.DrinksResult[]> {
    const coffee = new GraphQLTypes.Coffee();
    coffee.id = 1;
    coffee.name = 'Columbia';
    coffee.brand = 'Black Crow Coffee';

    const tea = new GraphQLTypes.Tea();
    tea.name = 'Lipton';
    return [tea, coffee];
  }

  @ResolveField()
  __resolveType(value: GraphQLTypes.Drink) {
    if (value instanceof GraphQLTypes.Coffee) {
      return 'Coffee';
    } else if (value instanceof GraphQLTypes.Tea) {
      return 'Tea';
    }

    return null;
  }
}
