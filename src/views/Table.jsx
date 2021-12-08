import { React } from "react";
import { Link } from "react-router-dom";
import CreateButton from "../components/CreateButton";

import ListTable from "../components/ListTable";

function Table() {
  return (
    <>
      <CreateButton />
      <ListTable />
      <div class="flex mx-auto justify-center">
        <Link to="./Login" class="btn btn-circle btn-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </Link>
      </div>
    </>
  );
}

export default Table;
