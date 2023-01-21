import Header from "./components/Header";

function App() {

  const allFeedbacks = [
    {
      id: 1,
      rating: 10,
      description: 'Informative content, undoubtedly one of the best courses I have ever followed. Thanks!',
      author: {
        firstName: 'John',
        lastName: 'Doe'
      }
    },
    {
      id: 2,
      rating: 8,
      description: 'Good, mid size course for beginners and intermediate developers. Would like to know more about advanced courses.',
      author: {
        firstName: 'Jane',
        lastName: 'Doe'
      }
    },
    {
      id: 3,
      rating: 6,
      description: 'A little difficult for me as I am not very well versed with ES6+ features. I was expecting to learn those in this course but it is not included. Otherwise, a decent course.',
      author: {
        firstName: 'Ronald',
        lastName: 'McGill'
      }
    },
    {
      id: 4,
      rating: 7,
      description: 'Good first course to start your React JS journey with. Still expecting some advanced level content. However, I like the fact that it is practical course with demonstrations.',
      author: {
        firstName: 'Ben',
        lastName: 'Grover'
      }
    },
  ];

  return (
    <div className='container'>
      <Header headerTitle={'Any feedback for me..?'}/>
      
    </div>
  );
}

export default App;
