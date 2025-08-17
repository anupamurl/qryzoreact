const mongoose = require('mongoose');

// Test MongoDB connection
async function testConnection() {
  try {
    await mongoose.connect('mongodb://localhost:27017/qryzo');
    console.log('✅ MongoDB connection successful');
    
    // Test basic operations
    const testSchema = new mongoose.Schema({
      name: String,
      email: String,
      createdAt: { type: Date, default: Date.now }
    });
    
    const TestModel = mongoose.model('Test', testSchema);
    
    // Create a test document
    const testDoc = new TestModel({
      name: 'Test User',
      email: 'test@example.com'
    });
    
    await testDoc.save();
    console.log('✅ Test document created');
    
    // Find the document
    const found = await TestModel.findOne({ email: 'test@example.com' });
    console.log('✅ Test document found:', found.name);
    
    // Clean up
    await TestModel.deleteOne({ email: 'test@example.com' });
    console.log('✅ Test document cleaned up');
    
    await mongoose.connection.close();
    console.log('✅ MongoDB connection closed');
    
  } catch (error) {
    console.error('❌ MongoDB test failed:', error.message);
    process.exit(1);
  }
}

testConnection();