import { React } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.jpeg";

function Login() {
  return (
    <>
      <div class="h-screen flex items-center justify-center pb-12 px-8 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <img class="mx-auto w-auto" src={Logo} alt="Workflow" />
            <h2 class="mt-6 text-center text-2xl font-bold text-gray-700">
              Inicia sesión en tu cuenta
            </h2>
          </div>
          <form class="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address"></label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Correo electrónico"
                />
              </div>
              <div>
                <label for="password"></label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Contraseña"
                />
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  for="remember-me"
                  class="ml-2 block text-sm text-gray-900"
                >
                  Recuérdame
                </label>
              </div>
              <div class="text-sm">
                <a
                  href="."
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Olvidaste tu contraseña?
                </a>
              </div>
            </div>
            <div>
              <Link
                to="/Table"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    class="h-5 w-5 text-blue-400 group-hover:text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Iniciar sesión
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;