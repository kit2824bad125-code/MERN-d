import { useState } from "react";

function FormExample() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  function handleSubmit(event) {
    event.preventDefault(); 
    console.log(name);
    console.log(email);
  }

  return (
    <div>
      <h2>FORM EXAMPLE</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default FormExample;