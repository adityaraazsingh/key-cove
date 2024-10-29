import { TbCircleKey } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="flex w-10/12 bg-white h-12 items-center justify-center m-auto rounded-3xl mt-5">
        
      <TbCircleKey className="text-blue-900 size-auto text-4xl"/>
      <p className="text-blue-950 size-auto text-2xl font-extrabold">
        KeyCove
        </p>
    </div>
  )
}

export default Navbar
