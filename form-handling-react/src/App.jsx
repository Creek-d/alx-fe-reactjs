import RegistrationForm from "./components/RegistrationForm.jsx";
import FormikForm from "./components/formikForm.jsx";

function App() {
  return (
    <div>
      <h1>React Form Handling</h1>
      <h2>Controlled Components Form</h2>
      <RegistrationForm />

      <hr />

      <h2>Formik Form</h2>
      <FormikForm />
    </div>
  );
}

export default App;
