/*
=====Exercise: Give Sibling Elements a Unique Key Attribute =====

The code editor has an array with some front end frameworks and a stateless functional component named Frameworks(). Frameworks() needs to map the array to an unordered list, much like in the last challenge. Finish writing the map callback to return an li element for each framework in the frontEndFrameworks array. This time, make sure to give each li a key attribute, set to a unique value. The li elements should also contain text from frontEndFrameworks.

Normally, you want to make the key something that uniquely identifies the element being rendered. As a last resort the array index may be used, but typically you should try to use a unique identification.

*/

const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
  ];
  
  function Frameworks() {
    const renderFrameworks = frontEndFrameworks.map((item) => 
    <li key={item+1}>{item}</li>)
    return (
      <div>
        <h1>Popular Front End JavaScript Frameworks</h1>
        <ul>
          {renderFrameworks}
        </ul>
      </div>
    );
  };
  