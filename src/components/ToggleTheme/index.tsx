import { useAtomValue, useSetAtom } from "jotai";
import { Container } from "../Container";
import { Switch } from "../ui/switch";
import { isDarkAtom, toggleTheme } from "@/atoms/theme";

export function ToggleTheme() {
    const isDark = useAtomValue(isDarkAtom);
    const changeTheme = useSetAtom(toggleTheme);

    return (
        <div>
            <Container
                title="Tema"
                content={
                    <Switch
                        checked={isDark}
                        onCheckedChange={changeTheme}
                    />
                }
            />
        </div>
    )
}