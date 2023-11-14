import React from 'react';

function App() {
  // Create an HTML section with 'Computer Vision' as the title, a form with a input field to input an image url or text to generate a image, and two buttons, one for 'Analye' and other for 'Generate'
  return (
    <div className="App">
      <header className="App-header">
        <h1>Computer Vision</h1>
        <form>
          <input type="text" placeholder="Image URL" />
          <input type="text" placeholder="Text" />
          <button type="submit">Analyze</button>
          <button type="submit">Generate</button>
        </form>
      </header>
    </div>
  );
}

export default App;
