import Store from "../../utils/store";

export default function Dots() {
    const { menu } = Store();
    return (
        <div className={`${menu ? "rotate-135" : ""} transition-transform ease-out duration-150 relative w-3 h-3`}>
            <div className="absolute top-0 left-0 bg-white rounded-full h-1 w-1" />
            <div className="absolute top-0 right-0 bg-white rounded-full h-1 w-1" />
            <div className="absolute bottom-0 left-0 bg-white rounded-full h-1 w-1" />
            <div className="absolute bottom-0 right-0 bg-white rounded-full h-1 w-1" />
        </div>
  )
}