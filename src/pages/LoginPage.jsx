// Importer nødvendige biblioteker og komponenter
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Banner from "../components/Banner";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../Authentication/UserAuth";
import FormInput from "../components/Forminput";

// Definer et valideringsskema ved hjælp af "yup" for email- og password-felterne
const schema = yup
  .object({
    email: yup
      .string()
      .email("Din email skal have formen: ditnavn@mail.dk")
      .required("Email er påkrævet"),
    password: yup.string().required("Password er påkrævet"),
  })
  .required();

// Definer hovedkomponenten for login-siden
const Login = () => {
  // Brug "useUser" hook til at få adgang til brugeroplysninger og sætte brugerdata
  const { setUser } = useUser();
  // Brug "useNavigate" hook til at få adgang til navigationsfunktionen
  const navigate = useNavigate();

  // Brug "useForm" hook til at initialisere formularvalidering
  // og få adgang til forskellige formularrelaterede funktioner og tilstande
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  // Funktion, der udføres, når brugeren indsender formularen
  const onSubmit = (data) => {
    // Send en POST-anmodning til serveren med email og password
    fetch("https://dinmaegler.onrender.com/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: data.email,
        password: data.password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`${response.status} ${response.statusText}`);
        }
      })
      .then((data) => {
        // Hvis anmodningen er vellykket, gem brugerdata og naviger til hovedsiden
        setUser(data);
        navigate("/");
      })
      .catch((err) => {
        // Hvis der opstår en fejl, angiv fejlbeskeder på email- og password-felterne
        setError("email", {
          type: "custom",
          message: "Ugyldige login oplysninger. Prøv igen...",
        });
        setError("password", {
          type: "custom",
          message: "Ugyldige login oplysninger. Prøv igen...",
        });
      });
  };

  // Returner JSX (visuel repræsentation af login-siden)
  return (
    <>
      {/* Banner med titlen "Log ind" */}
      <Banner title="Log ind" />
      <div className="w-fit mx-auto shadow my-20 py-10 px-20">
        <h2 className="text-[30px] text-center font-medium">
          Log ind på din konto
        </h2>
        {/* Formular til email og password med validering */}
        <form
          className="py-10 flex flex-col gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormInput
            label="Email"
            placeholder="Email"
            errorMessage={errors.email?.message}
            register={register("email")}
          />
          <FormInput
            label="Password"
            type="password"
            placeholder="Password"
            errorMessage={errors.password?.message}
            register={register("password")}
          />
          {/* "Log ind" knap, der udløser onSubmit-funktionen */}
          <button className="bg-primary rounded-sm text-white py-[15px] font-medium" type="submit">
            Log ind
          </button>
        </form>
        <p className="text-paragraph mb-2">Log ind med</p>
        {/* Knapper til login med Google, Facebook og Twitter */}
        <div className="flex gap-4 mb-6">
          <button className="w-[170px] rounded-sm text-white text-center font-medium py-[15px] bg-[#DD4B39]">
            Google
          </button>
          <button className="w-[170px] rounded-sm text-white font-medium bg-[#3B5999]">
            Facebook
          </button>
          <button className="w-[170px] rounded-sm text-white font-medium bg-primary">
            Twitter
          </button>
        </div>
        {/* Link til registreringssiden, hvis brugeren ikke har en konto */}
        <p className="text-center">
          Har du ikke en konto?{" "}
          <Link className="text-[#2F80ED]" to="/opret">
            Opret bruger.
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
