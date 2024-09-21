import blueprintLogo from '../assets/blueprint.png'

const Form = () => {

  const handleSubmission = () => {
    console.log("SUBMITTED")
  }

  return (
    <>
      <div className="flex flex-col items-center rounded border-indigo-400">
        <h1>Stevens Blueprint Frontend Assessment S2024</h1>

        <div className='logo'>
          <a href="https://sitblueprint.com" target="_blank">
            <img src={blueprintLogo} className="logo" alt="Vite logo" />
          </a>
      </div>

        <h2>Christian & Shawn's Custom Form</h2>

        <h3>
          Please submit your information in the form, 
          so that it can be displayed below!
        </h3>

        <form action={handleSubmission()}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"/>

            <label htmlFor="email">Email</label>
            <input type="text" name="email" />

            <label htmlFor="graduationYear">Graduation Year</label>
            <input type="radio" name="graduationYear" value="2025"/> 2025
            <input type="radio" name="graduationYear" value="2026"/> 2026
            <input type="radio" name="graduationYear" value="2027"/> 2027
            <input type="radio" name="graduationYear" value="2028"/> 2028

            <button type="submit">Submit</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Graduation Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* Replace with state variables */}
              <td>Name</td>
              <td>Email</td>
              <td>Graduation Year</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Form