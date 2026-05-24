const { GoogleGenerativeAI } = require('@google/generative-ai');

const API_KEY = 'AIzaSyCJISE4NrT273aPqohCQCDD1r8BT-_UlAw';
const genAI = new GoogleGenerativeAI(API_KEY);

async function test() {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent('who won ipl in 2025');
    console.log('Success:', result.response.text());
  } catch (error) {
    console.error('Error:', error.message);
  }
}
test();
