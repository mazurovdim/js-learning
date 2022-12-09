function Product(name, price) { // Эмуляция классов старым способом
  this.name = name;
  this.price = price;

  if (price < 0) {
    throw RangeError('Нельзя создать продукт ' +
                      this.name + ' с отрицательной ценой');
  }
}

function Food(name, price) { // Наследование старым способом
  Product.call(this, name, price); // Вызов конструктора. Product - родитель для Food
  this.category = 'еда';  // Новое свойство в объекте Food 
}

Food.prototype = Object.create(Product.prototype); // Создается иерархия прототипов 

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'игрушка';
  this.discount = .7
}

Toy.prototype = Object.create(Product.prototype);
Toy.prototype.getPrice = function(){
    return  Math.round(this.price * 100 * this.discount) / 100
}

var cheese = new Food('фета', 5);
var robot = new Toy('робот', 40);

test('Сыр - это еда', () => {
    expect(cheese.category).toBe('еда')
})
test('Робот - это игрушка', () => {
    expect(robot.category).toBe('игрушка')
    expect(robot.getPrice()).toBe(28)
})