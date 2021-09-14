window.addEventListener('error', err => {
  console.error('error', err.message);
});

let userParsingResult;

try {
  const user = JSON.parse('{"name":"John", "age":17}');
  console.log('User data: ', user);
  userParsingResult = 'success';
} catch (e) {
  userParsingResult = 'error';
  console.error(e);
} finally {
  console.log(`User parsing finished with ${userParsingResult}`);
}

let productParsingResult;

try {
  const product = JSON.parse('{"car":"bmv", "price":20000');
  console.log('Product data: ', product);
  productParsingResult = 'success';
} catch (e) {
  productParsingResult = 'error';
} finally {
  console.log(`Product parsing finished with ${productParsingResult}`);
}
