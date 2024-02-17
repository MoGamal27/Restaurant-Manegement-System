

const dbMenu = require('../../model/menu');
const dbMenuItem = require('../../model/menuItem') 

module.exports = {
    Mutation: {
        async createMenu(_, { menuInput }) {
            const newMenu = await dbMenu.menu.create({
                restaurant_id: menuInput.restaurantId,
                name: menuInput.name,
            });

            return newMenu;
        },
        async createMenuItem(_, { menuItemInput }) {
            const newMenuItem = await dbMenuItem.menuItem.create({
                name: menuItemInput.name,
                price: menuItemInput.price,
                stock: menuItemInput.stock
            });

            return newMenuItem;
        },
    },

    Query: {
        async getMenu(_, { menuId }) {
            const menu = await dbMenu.menu.getById(menuId);

            if (!menu) {
                throw new Error('Menu not found');
            }

            return menu;
        },
    },
};
