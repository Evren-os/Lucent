import { motion } from "framer-motion"
import { useOptionsStore } from "../../../store/options"
import AppItem from "./app-item"

interface AppListProps {
  isRemoveMode: boolean
}

const AppList = ({ isRemoveMode }: AppListProps) => {
  const { drawerApps } = useOptionsStore()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="h-[352px] w-80 overflow-y-auto rounded-xl border-4 border-card-foreground/10 bg-card p-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 80 }}
        transition={{ ease: "linear", duration: 0.16 }}
        className="grid w-full grid-cols-4 gap-4"
      >
        {drawerApps.map((app, index) => (
          <AppItem
            app={app}
            isRemoveMode={isRemoveMode}
            key={`drawer-${app}-${index.toString().padStart(2, "0")}`}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default AppList
