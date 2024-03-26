import { userAtom } from "@/atoms/user"
import { Container } from "@/components/Container"
import { useAtom } from "jotai"
import { Controls } from "../Controls";

export function UserInfo() {
    const [user] = useAtom(userAtom);

    return (
        <Container
            title={user.name}
            content={<img src={user.image} />}
            footer={<Controls />}
        />
    )
}