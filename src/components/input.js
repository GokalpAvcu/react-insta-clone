export default function Input({label, ...props}){
    return (
        <label className="block relative">
        <input
          type="text"
          required={true}
          className="bg-zinc-50 px-2 border rounded-sm outline-none text-xs focus:border-gray-400 w-full h-[38px] valid:pt-[10px] peer"
          {...props}
        />
        <small className="absolute top-1/2 left-[9px] cursor-text pointer-events-none text-xs text-gray-400 -translate-y-1/2  transition-all peer-valid:text-[10px] peer-valid:top-2.5 ">
          {label}        
        </small>
      </label>
    )
}