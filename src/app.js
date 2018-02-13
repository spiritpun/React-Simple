// JSX
const template = (
    <div>
        <h1>Pun</h1>
        <p>This is JSX from app.js with babel compiled.</p>
        <select>
            <option>item1</option>
            <option>item2</option>
            <option>item4</option>
            <option>item5</option>
            <option>item3</option>
            <option>item6</option>
            <option>item7</option>
            <option>item8</option>
            <option>item9</option>
            <option>item10</option>
        </select>
    </div>
);

// Create a templateTwo war JAX expression
// div
//      h1 -> Pun
//      p -> Age: 28
//      p -> Location: BKK
//  Render templateTwo instend of template

const user = {
    name: 'Pun Sankasem',
    age: 28,
    location: 'BKK'
};

const getLocation = (location) => {
    return location ? <p>Location: {location}</p> : '';
};

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age && <p>Age: 28</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
