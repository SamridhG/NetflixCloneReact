import { useCategoryListQuery } from "../Services/Api/module/MovieList"

interface useCategoryProp{
    endPoint:string
}
function useCategory({endPoint}:useCategoryProp) {
const {data:categoryList}=useCategoryListQuery(endPoint)
  return{
     data:categoryList?.results
  }
}

export default useCategory
