type ToggleProps = {
  activated: boolean
  onClick: () => void
}

export default function Toggle({ activated, ...props }: ToggleProps) {
  return (
    <div
      className={`transition-all flex w-9 h-5 rounded-xl ${
        !activated ? 'bg-darkGrey justify-start' : 'bg-yellow justify-end'
      } p-1 cursor-pointer`}
      {...props}
    >
      <span className="block h-full aspect-square rounded-full bg-grey" />
    </div>
  )
}
