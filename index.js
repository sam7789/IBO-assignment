const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

// 1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

/* 
sample Output: 
{
    TV: 10,
    AC: 5,
    FAN: 10
}
*/
const getUniqueProductCount = (listOfProducts) => {
  let productCount = {};
  for (let i = 0; i < listOfProducts.length; i++) {
    if (productCount[listOfProducts[i].productName]) {
      productCount[listOfProducts[i].productName] += 1;
    } else {
      productCount[listOfProducts[i].productName] = 1;
    }
  }
  return productCount;
};

console.log(getUniqueProductCount(listOfProducts));

// you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

/* Sample Output: 
[
    {
        productName: "TV",
        quantity: 20
    },
    {
        productName: "AC",
        quantity: 10
    }
    {
        productName: "FAN",
        quantity: 10
    }
]
*/
const getUniquePrducts = (listOfProducts) => {
  return listOfProducts.reduce((acc, curr) => {
    let product = acc.find(
      (product) => product.productName === curr.productName
    );
    if (product) {
      product.quantity += curr.quantity;
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
};

console.log(getUniquePrducts(listOfProducts));
