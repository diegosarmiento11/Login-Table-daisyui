import { React } from "react";

function Button() {
  return (
    <>
      <div class="w-4/5 flex justify-end pt-10">
        <label
          for="my-modal-2"
          class="btn btn-primary modal-button bg-blue-600 hover:bg-blue-800 focus:outline-none"
        >
          Crear cliente
        </label>
        <input type="checkbox" id="my-modal-2" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box">
            <h1 className="text-2xl pb-6 font-bold">Crea un cliente</h1>
            <div class="form-control">
              <label class="label">
                <span class="label-text font-semibold">Nombre Completo</span>
              </label>
              <input
                type="text"
                placeholder="Nombre"
                class="input input-bordered input-info"
              />
              <label class="label">
                <span class="label-text font-semibold">Dirección de Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                class="input input-bordered input-info"
              />
              <label class="label">
                <span class="label-text font-semibold">Clave Secreta</span>
              </label>
              <input
                type="password"
                placeholder="Clave"
                class="input input-bordered input-info"
              />
              <label class="label">
                <span class="label-text font-semibold">Dirección física</span>
              </label>
              <input
                type="text"
                placeholder="Dirección"
                class="input input-bordered input-info"
              />
              <label class="label">
                <span class="label-text font-semibold">Compañía</span>
              </label>
              <input
                type="text"
                placeholder="Compañía"
                class="input input-bordered input-info"
              />
            </div>
            <div class="modal-action">
              <label
                for="my-modal-2"
                class="btn btn-primary bg-blue-600 hover:bg-blue-800 focus:outline-none"
              >
                Crear cliente
              </label>
              <label for="my-modal-2" class="btn btn-error">
                Cancelar
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
