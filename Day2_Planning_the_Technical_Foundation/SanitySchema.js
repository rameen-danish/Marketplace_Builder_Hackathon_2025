//Product Schema
export const Product = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      { name: 'name', type: 'string', title: 'Product Name' },
      { name: 'description', type: 'text', title: 'Description' },
      { name: 'price', type: 'number', title: 'Price' },
      { name: 'stock', type: 'number', title: 'Stock Level' },
      { name: 'category', type: 'reference', to: [{ type: 'category' }], title: 'Category' },
      { name: 'images', type: 'array', title: 'Product Images', of: [{ type: 'image' }] },
      { name: 'featured', type: 'boolean', title: 'Featured Product' },
      { name: "slug", title: "Product Slug", type: "slug", options: {} }
    ]
  };

 // ORder Schema
 export const Order = {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      { name: 'orderNumber', type: 'string', title: 'Order Number' },
      { name: 'customer', type: 'reference', to: [{ type: 'customer' }], title: 'Customer' },
      { 
        name: 'items', 
        type: 'array', 
        title: 'Order Items', 
        of: [
          {
            type: 'object',
            fields: [
              { name: 'product', type: 'reference', to: [{ type: 'product' }], title: 'Product' },
              { name: 'quantity', type: 'number', title: 'Quantity' },
              { name: 'price', type: 'number', title: 'Price' }
            ]
          }
        ]
      },
      { name: 'totalAmount', type: 'number', title: 'Total Amount' },
      { name: 'status', type: 'string', title: 'Order Status', options: { list: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'] } },
      { name: 'createdAt', type: 'datetime', title: 'Created At' }
    ]
  };
  
  //Customer schema
  export const Customer = {
    name: 'customer',
    type: 'document',
    title: 'Customer',
    fields: [
      { name: 'firstName', type: 'string', title: 'First Name' },
      { name: 'lastName', type: 'string', title: 'Last Name' },
      { name: 'email', type: 'string', title: 'Email' },
      { name: 'phone', type: 'string', title: 'Phone Number' },
      { name: 'address', type: 'text', title: 'Address' }
    ]
  };

  //Shipment Schema
  export const Shipment = {
    name: 'shipment',
    type: 'document',
    title: 'Shipment',
    fields: [
      { 
        name: 'order', 
        type: 'reference', 
        to: [{ type: 'order' }], 
        title: 'Order Reference' 
      },
      { 
        name: 'trackingNumber', 
        type: 'string', 
        title: 'Tracking Number' 
      },
      { 
        name: 'carrier', 
        type: 'string', 
        title: 'Carrier', 
        options: { list: ['Leopard', 'M&P Express', 'TCS'] } 
      },
      { 
        name: 'status', 
        type: 'string', 
        title: 'Shipment Status', 
        options: { list: ['Pending', 'Shipped', 'In Transit', 'Delivered', 'Cancelled'] } 
      },
      { 
        name: 'shippedDate', 
        type: 'datetime', 
        title: 'Shipped Date' 
      },
      { 
        name: 'estimatedDelivery', 
        type: 'datetime', 
        title: 'Estimated Delivery Date' 
      },
      { 
        name: 'deliveryDate', 
        type: 'datetime', 
        title: 'Actual Delivery Date' 
      }
    ]
  };
  
  //Payment Schema
  export const Payment = {
    name: 'payment',
    type: 'document',
    title: 'Payment',
    fields: [
      { 
        name: 'order', 
        type: 'reference', 
        to: [{ type: 'order' }], 
        title: 'Order Reference' 
      },
      { 
        name: 'paymentMethod', 
        type: 'string', 
        title: 'Payment Method', 
        options: { list: ['Credit Card', 'JazzCash', 'EasyPaisa', 'Bank Transfer'] } 
      },
      { 
        name: 'transactionId', 
        type: 'string', 
        title: 'Transaction ID' 
      },
      { 
        name: 'amount', 
        type: 'number', 
        title: 'Payment Amount' 
      },
      { 
        name: 'status', 
        type: 'string', 
        title: 'Payment Status', 
        options: { list: ['Pending', 'Completed', 'Failed', 'Refunded'] } 
      },
      { 
        name: 'paymentDate', 
        type: 'datetime', 
        title: 'Payment Date' 
      }
    ]
  };
  
  
  