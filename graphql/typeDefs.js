
const { gql } = require('apollo-server');

const restaurantTypeDefs = require('./schema/restaurant.graphql');
const menuTypeDefs = require('./schema/menu.graphql');
const customerTypeDefs = require('./schema/customer.graphql');
const orderTypeDefs = require('./schema/order.graphql');  // Import the new order schema

const combinedTypeDefs = gql`
    ${restaurantTypeDefs}
    ${menuTypeDefs}
    ${customerTypeDefs}
    ${orderTypeDefs}  // Include the new order schema

    type Query {
        getRestaurant(restaurantId: ID!): Restaurant!
        getMenu(menuId: ID!): Menu!
        getCustomer(customerId: ID!): Customer!
    }

    type Mutation {
        registerRest(registerRestaurant: RegisterInputRestaurant): Restaurant!
        createMenu(menuInput: CreateMenuInput): Menu!
        createMenuItem(menuItemId: ID!, menuItemInput: MenuItemInput): MenuItem!
        register(registerInput: RegisterInput): Customer!
        login(email: String!, password: String!): Customer!
        createOrder(orderInput: CreateOrderInput): Order!  // Include the new mutation
    }
`;

module.exports = combinedTypeDefs;

