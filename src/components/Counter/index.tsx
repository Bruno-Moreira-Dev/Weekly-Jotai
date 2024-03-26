import { useAtomValue, useSetAtom } from "jotai";
import { Container } from "../Container";
import { counterAtom, decrementCounter, incrementCounter } from "@/atoms/counter";
import { Button } from "../ui/button";

export function Counter() {
    const count = useAtomValue(counterAtom);
    const increment = useSetAtom(incrementCounter);
    const decrement = useSetAtom(decrementCounter);

    return (
        <div>
            <Container 
                title="Contador"
                content={<h1>{count}</h1>}
                footer={
                    <>
                        <Button onClick={decrement}>-</Button>
                        <Button onClick={increment}>+</Button>
                    </>
                }
            />
        </div>
    )
}