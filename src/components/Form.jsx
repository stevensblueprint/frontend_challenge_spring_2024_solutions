import blueprintLogo from '../assets/blueprint.png'

const Form = () => {

  const handleSubmission = () => {
    console.log("SUBMITTED")
  }

  return (
    <>
      <div className="flex flex-col mx-80 my-8 p-16 border-2 border-indigo-400 rounded-lg space-y-8">
        <h1 className="text-center text-2xl font-bold">Stevens Blueprint Frontend Assessment S2024</h1>
        
        <a href="https://sitblueprint.com" target="_blank" className="flex justify-center">
          <img src={blueprintLogo} className="logo w-32 h-auto" alt="Blueprint logo" />
        </a>

        <h2 className="text-center text-xl font-semibold">Christian & Shawn's Custom Form</h2>

        <h3 className="text-center">
          Please submit your information in the form below!
        </h3>

        <form onSubmit={handleSubmission} className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-left">Name</label>
            <input type="text" name="name" className="border p-2 rounded" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-left">Email</label>
            <input type="email" name="email" className="border p-2 rounded" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="graduationYear" className="text-left">Graduation Year</label>
            <div className="flex flex-col space-y-2">
              <label><input type="radio" name="graduationYear" value="2025" className="mr-2"/>2025</label>
              <label><input type="radio" name="graduationYear" value="2026" className="mr-2"/>2026</label>
              <label><input type="radio" name="graduationYear" value="2027" className="mr-2"/>2027</label>
              <label><input type="radio" name="graduationYear" value="2028" className="mr-2"/>2028</label>
            </div>
          </div>

          <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
            Submit
          </button>
        </form>

        <br />

        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-indigo-100">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Graduation Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* Replace with state variables */}
              <td className="border px-4 py-2">Name</td>
              <td className="border px-4 py-2">Email</td>
              <td className="border px-4 py-2">Graduation Year</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Form;
