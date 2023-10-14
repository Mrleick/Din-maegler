import { Link } from "react-router-dom";
import Button from "./Button";
function SearchForm() {
  return (
    <div className="bg-white max-w-[920px] w-full mx-auto px-[32px] py-[32px]">
      <p className="text-[20px] font-medium">
        Søg blandt 158 boliger til salg i 74 butikker
      </p>
      <hr className="w-[43px] border-2 mb-[20px]" />
      <div>
        <p className="mb-[4px]">Hvad skal din næste bolig indeholde</p>
        <input
          className="w-[728px] h-[48px] mr-[8px] p-[10px] border-[1px] border-shape1 rounded"
          id="search"
          type="search"
          placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende."
        />
        <Button>
          <Link className="px-[46px] text-[16px]" to="Properties">
            Søg
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default SearchForm;
