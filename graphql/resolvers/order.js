
const db = require('../../model/order');  

module.exports = {
    Mutation: {
        async createOrder(_, { orderInput }) {
           
            const newOrder = await db.order.create({
                customerId: orderInput.customerId,
                items: orderInput.items.map(item => ({
                    menuItemId: item.menuItemId,
                    quantity: item.quantity,
                })),
            });

            return newOrder;
        },
    },
    Order: {
        async items(order) {
            return await db.orderItem.findAll({
                where: { orderId: order.id },
            });
        },
        async totalAmount(order) {
            const orderItems = await db.orderItem.findAll({
                where: { orderId: order.id },
                include: [{
                    model: db.menuItem,
                    as: 'menuItem',
                }],
            });

            return orderItems.reduce((total, orderItem) => {
                return total + orderItem.menuItem.price * orderItem.quantity;
            }, 0);
        },
    },
};
