import { React } from "react";

function ListTable() {
  return (
    <div class="py-10 w-5/6 mx-auto">
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Clave</th>
              <th>Dirección</th>
              <th>Compañía</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Isabel herrera</td>
              <td>diegosarmientoq1245@gmail.com</td>
              <td>22</td>
              <td>Cra 50 # 103b</td>
              <td>Robinfood</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Diego sarmiento</td>
              <td>diegosarmientoq1245@gmail.com</td>
              <td>21</td>
              <td>Cra 50 # 103b</td>
              <td>Robinfood</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Cristian mendoza</td>
              <td>diegosarmientoq1245@gmail.com</td>
              <td>24</td>
              <td>Cra 50 # 103b</td>
              <td>Robinfood</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Dieguito maradona</td>
              <td>diegosarmientoq1245@gmail.com</td>
              <td>28</td>
              <td>Cra 50 # 103b</td>
              <td>Robinfood</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListTable;
