import './App.css';

const Title = (pros: { msg: string; age: number; titleColor?: string }) => {
  const { msg, age, titleColor = '' } = pros;
  return (
    <h1 className={`${titleColor} title`}>
      {msg} - age: {age}
    </h1>
  );
};

function App2() {
  const elements: any = [
    {
      name: 'angular',
      id: 1,
    },
    {
      name: 'react',
      id: 2,
    },
  ];
  return (
    <div className="App">
      {elements.map((el: any) => {
        const text = 'Me gusta ' + el.name;
        return <Title msg={text} titleColor="red" key={el.id} age={12}></Title>;
      })}

      {/* <Title msg="Hola 2 " titleColor="salmon" age={14}></Title> */}
    </div>
  );
}

//
const Sports = () => <p>Sports page</p>;
const Movies = () => <p>Movies page</p>;

const component = {
  Sports,
  Movies,
};

let ListNames = ({children, name}: any) => {
  return children(name)
}

function App() {

  return (
    <div className="App">
      <component.Movies></component.Movies>

      <ListNames></ListNames>
    </div>
  );
}

export default App;
