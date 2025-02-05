import { useAppStore } from "~/store/app-store";
import Button from "../../ui/button";
import Input from "../../ui/input";
import NewTabHeader from "./shared/newtab-header";

const DockOptions = () => {
  const { addDockApp, updateDockApp, dockApps, resetDockApp, removeDockApp } =
    useAppStore();

  const inputClass =
    "h-1 rounded-none bg-inherit px-0 text-inherit focus:outline-none";

  return (
    <div className="space-y-6">
      <NewTabHeader
        rightButtons={
          <>
            <Button
              variant="secondary"
              size="icon"
              iconSize={20}
              icon="material-symbols:device-reset-rounded"
              onClick={resetDockApp}
            />
            <Button
              variant="secondary"
              size="icon"
              iconSize={20}
              icon="ic:round-plus"
              onClick={() =>
                addDockApp({
                  name: "", // Default value, update as needed.
                  url: "", // Default value, update as needed.
                  icon: "ic:round-plus", // Using the plus icon as default.
                })
              }
            />
          </>
        }
      />
      <div className="h-full space-y-5">
        {dockApps.map((app, index) => (
          <div
            key={`app-by-${index}`}
            className="inline-flex items-center gap-2 w-full"
          >
            <Button
              variant="secondary"
              icon={app.icon}
              size="icon"
              iconSize={24}
              className="hover:bg-background active:scale-100"
            />
            <div className="w-[68.2%]">
              <Input
                id={`app-name-${index}`}
                outline="ghost"
                value={app.name}
                onInput={(e) =>
                  updateDockApp(index.toString(), {
                    ...app,
                    name: e.currentTarget.value,
                  })
                }
                className={inputClass}
              />
              <Input
                id={`app-url-${index}`}
                outline="ghost"
                value={app.url}
                onInput={(e) =>
                  updateDockApp(index.toString(), {
                    ...app,
                    url: e.currentTarget.value,
                  })
                }
                className={inputClass}
              />
            </div>
            <Button
              icon="mdi:trash-outline"
              variant="destructive"
              size="icon"
              className="size-8"
              onClick={() => removeDockApp(app.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DockOptions;
