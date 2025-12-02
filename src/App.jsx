import { useContext, useState } from "react";
import { FormContext } from "./components/Form/FormContext";
import cn from "./utiles/cn";

const App = () => {
  const { state, dispatch } = useContext(FormContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [lastFormData, setLastFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (value.trim() !== "") {
      setLastFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT_START" });

    setTimeout(() => {
      dispatch({ type: "SUBMIT_SUCCESS", payload: lastFormData });
    }, 600);
  };

  return (
    <div
      className={cn(
        "min-h-screen flex items-center justify-center p-6 bg-linear-to-tr from-purple-600 via-pink-400 to-blue-400"
      )}
    >
      <div
        className={cn(
          "w-full max-w-md p-8 rounded-3xl shadow-lg bg-white/90 backdrop-blur-sm border border-white/30"
        )}
      >
        <h1 className={cn("text-3xl font-bold text-gray-800 text-center mb-8")}>
          Delayed Submit Form
        </h1>

        <form onSubmit={handleSubmit} className={cn("space-y-5")}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={cn(
              "w-full px-5 py-3 rounded-2xl border border-gray-300 shadow-inner focus:ring-4 focus:ring-purple-200 outline-none"
            )}
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={cn(
              "w-full px-5 py-3 rounded-2xl border border-gray-300 shadow-inner focus:ring-4 focus:ring-purple-200 outline-none"
            )}
          />

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            className={cn(
              "w-full px-5 py-3 rounded-2xl border border-gray-300 shadow-inner focus:ring-4 focus:ring-purple-200 outline-none"
            )}
          />

          <button
            type="submit"
            className={cn(
              "w-full py-3 rounded-2xl font-semibold text-white bg-linear-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 shadow-md hover:shadow-lg transition-all duration-200"
            )}
          >
            Submit
          </button>
        </form>

        <div className={cn("mt-8 text-center")}>
          {state.loading ? (
            <p className={cn("text-lg font-medium text-purple-600")}>
              Loading...
            </p>
          ) : (
            <div className="text-gray-700 text-lg space-y-1">
              <p>
                <span className="font-semibold">Name:</span>{" "}
                {state.submittedValue.name}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                {state.submittedValue.email}
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {state.submittedValue.phone}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default App;
