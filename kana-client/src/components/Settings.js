import React from 'react'


const Settings = () =>{

  return (
      <form className="form-settings">
      
        <section className="light">

        <h2 className="setting-header">Syllabary</h2>

        <label>
          <input type="radio" name="light" checked/>
          <span className="design"></span>
          <span className="text">Hirigana</span>
        </label>

        <label>
          <input type="radio" name="light"/>
          <span className="design"></span>
          <span className="text">Katagana</span>
        </label>

      </section>

      <section className="light">

        <h2 className="setting-header">Total Questions</h2>

        <label>
          <input type="radio" name="question" checked/>
          <span className="design"></span>
          <span className="text">Five</span>
        </label>

        <label>
          <input type="radio" name="question"/>
          <span className="design"></span>
          <span className="text">Ten</span>
        </label>

        <label>
          <input type="radio" name="question"/>
          <span className="design"></span>
          <span className="text">Twenty</span>
        </label>

      </section>

      </form>
    )
}

export default Settings