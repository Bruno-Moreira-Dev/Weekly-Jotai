import { nextAtom, prevAtom, userIdAtom } from "@/atoms/user"
import { Button } from "@/components/ui/button";
import { useAtomValue, useSetAtom } from "jotai"

export function Controls() {
    const userId = useAtomValue(userIdAtom);
    const handlePrev = useSetAtom(prevAtom);
    const handleNext = useSetAtom(nextAtom);

    return (
        <div>
            <div>
                User Id: {userId}
            </div>
            <div className="flex gap-2 mt-2">
                <Button onClick={handlePrev}>Anterior</Button>
                <Button onClick={handleNext}>Próximo</Button>
            </div>
        </div>
    )
}