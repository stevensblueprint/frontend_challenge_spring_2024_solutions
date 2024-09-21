const Form = () => {
  return (
    <>
      <form action={() => console.log("SUBMITTED")}>
          <label for="name">Name</label>
          <input type="text" name="name"/>

          <label for="email">Email</label>
          <input type="text" name="email" />

          <label for="graduationYear">Graduation Year</label>
          <input type="radio" name="graduationYear" value="2025"/> 2025
          <input type="radio" name="graduationYear" value="2026"/> 2026
          <input type="radio" name="graduationYear" value="2027"/> 2027
          <input type="radio" name="graduationYear" value="2028"/> 2028

          <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Form