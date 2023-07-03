"use client";
import Image from "next/image";
import logo from "/public/logo.svg";
import { useFormik } from "formik";

export default function Home() {
  // A custom validation function. This must return an object
  // which keys are symmetrical to our values/initialValues
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Requis";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Doit comporter 15 caractères ou moins";
    }

    if (!values.lastName) {
      errors.lastName = "Requis";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Doit comporter 20 caractères ou moins";
    }

    if (!values.email) {
      errors.email = "Requis";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Adresse e-mail invalide";
    }
    return errors;
  };
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      lastName: "",
      firstName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {/* Headline Section */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-16 w-auto"
            src={logo}
            alt="logo copy-feather"
          />

          <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Inscrivez-vous pour devenir membre exclusif
          </h1>
        </div>
        {/* Form Section*/}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nom
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  autoComplete="text"
                  placeholder="Entrez votre nom..."
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-xs text-gray-500 ml-2 mt-[-1]">
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Prénom
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  autoComplete="text"
                  placeholder="Entrez votre prénom..."
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-xs text-gray-500 ml-2 mt-[-1]">
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Adresse email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  autoComplete="email"
                  placeholder="Entrez votre adresse email..."
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-xs text-gray-500 ml-2 mt-[-1]">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
            </div>
            {/* Submit */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-slate-600 px-3 py-1.5 text-m font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
              >
                Devenir membre exclusif
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-sm text-gray-500">
            Nous nous soumettons à la reglementation RGPD de la protection des
            données et de confidentialité.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
