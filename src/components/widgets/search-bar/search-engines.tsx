import { Icon } from "@iconify/react/dist/iconify.js"
import clsx from "clsx"
import { searchProviders } from "../../../lib/variables"
import { useOptionsStore } from "../../../store/options"

const SearchEngines = () => {
  const { selectedEngine, setSelectedEngine } = useOptionsStore()

  return (
    <div className="flex flex-wrap gap-3">
      {searchProviders.map(({ name, icon }) => (
        <button
          type="button"
          key={name}
          className="inline-flex items-center gap-2 rounded-xl bg-card p-1 pr-4 font-medium text-card-foreground text-sm transition-colors hover:bg-card-hover"
          onClick={() => setSelectedEngine(name)}
        >
          <span
            className={clsx(
              "inline-flex size-9 items-center justify-center rounded-lg bg-background text-sm",
              selectedEngine === name && "bg-foreground text-background",
            )}
          >
            <Icon icon={icon} fontSize={16} />
          </span>
          {name}
        </button>
      ))}
    </div>
  )
}

export default SearchEngines
