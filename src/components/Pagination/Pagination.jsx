import { useState } from "react";

export default function Pagination({onChangePage}) {
  const [actualPage, setActualPage] = useState(1);

  const changePage = (newActualPage) => {
    setActualPage(newActualPage)
    onChangePage(newActualPage)

  }

  return (
    <div>

      {actualPage >1 &&<button onClick={ ()=> changePage(actualPage - 1)}>{"<"}</button>}
      {actualPage}
      <button onClick={ ()=> changePage(actualPage + 1)}>{">"}</button>

    </div>
  );
}
