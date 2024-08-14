import { CATEGORY_LIST } from "../helper/constant";
import CategoryList from "./CategoryList";

export default function ListComponent() {
    
    return (
    <div >
      {
      CATEGORY_LIST.map((list)=> 
      <CategoryList key={list.name} name={list.name} path={list.path}/>
      )}
    </div>
  )
}
