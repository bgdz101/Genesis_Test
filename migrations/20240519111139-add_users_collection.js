module.exports = {
  async up(db, client) {
    // Check if the 'subscriptions' collection exists
    const colls = await db.listCollections({ name: "subscriptions" }).toArray();
    if (colls.length === 0) {
      // Only create the collection if it does not exist
      await db.createCollection('subscriptions', {
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: ["email", "status", "createdAt"],
            properties: {
              email: {
                bsonType: "string",
                description: "must be a string and is required"
              },
              status: {
                bsonType: "string",
                enum: ["subscribed", "unsubscribed"],
                description: "can only be one of the enum values and is required"
              },
              createdAt: {
                bsonType: "date",
                description: "must be a date and is required"
              }
            }
          }
        }
      });
    }
  },

  async down(db, client) {
    await db.collection('subscriptions').drop();
  }
};
