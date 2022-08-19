
import {Outlet} from "react-router-dom" //divin çocuklarınıda yüklememizi sağlar
export default function AuthLayout(){
  return (
    <div className="h-full w-full flex flex-wrap overflow-auto items-center gap-x-2  justify-center">
      <Outlet/>
    </div>
  )
}