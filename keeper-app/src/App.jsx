/* eslint-disable no-unused-vars */
import React from "react";
import Header from './components/atoms/Header/Header';
import Footer from './components/atoms/Footer/Footer';
import Note from './components/molecules/Note/Note';
import notes from './notes';


function App() {
  return (
    <>
      <Header />
      {notes.map(note => (
        <Note
          key={note.key}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </>
  )
}

export default App
