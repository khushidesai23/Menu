import React, { useState } from 'react';
import './App.css';

function App() {
  const [counts, setCounts] = useState(Array(10).fill(0));
  const [foodNames] = useState([
    "Salad",
    "Soup",
    "Starter",
    "Indian Appetizers",
    "Pizza",
    "Pasta",
    "Main Course",
    "Rice Bowls",
    "Beverages",
    "Desserts"
  ]);

  const foodImages = [
    'https://www.recipetineats.com/wp-content/uploads/2021/08/Garden-Salad_47-SQ.jpg',
    'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/09/Vegetable-Soup-main.jpg',
    'https://5.imimg.com/data5/NK/UA/GLADMIN-29857013/starter-500x500.jpg',
    'https://i0.wp.com/homequirer.com/wp-content/uploads/2022/11/Best-Indian-Appetizers-scaled-1.jpg?fit=2560%2C1700&ssl=1',
    'https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSalvsaJWjWWgwE6RMKa5YwRETwAm3K7Weo5YIKKc-M7A&s',
    'https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg',
    'https://minuterice.com/wp-content/uploads/2022/03/Southwest-Barbeque-Salmon-and-White-Rice-035-16x9-1-1080x675.jpg',
    'https://www.tutorialspoint.com/food_and_beverage_services/images/non_alcoholic_beverages.jpg',
    'https://www.southernliving.com/thmb/HFXfirNv58YxjV2uWi4Ima6rkD4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2665601_ErinN_0213-2000-7b88f1a2e1bd40bba7070fc01476cf3d.jpg'
  ];

  const incrementLike = (index) => {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
  };

  const decrementDislike = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 0) {
      newCounts[index]--;
      setCounts(newCounts);
    }
  };

  return (
    <div className="App">
      <h1 className="title">Dishes</h1>
      <div className="photos">
        {foodImages.map((image, index) => (
          <div key={index} className="food-profile">
            <img src={image} alt={foodNames[index]} />
            <div className="reactions">
              <div className="actions">
                <button className="like" onClick={() => incrementLike(index)}>👍</button>
                <button className="dislike" onClick={() => decrementDislike(index)}>👎</button>
              </div>
              <span className="counts">{counts[index]}</span>
            </div>
            <h3 className="food-name">{foodNames[index]}</h3>
          </div>
        ))}
      </div>
    </div>
    
  );
}



export default App;
