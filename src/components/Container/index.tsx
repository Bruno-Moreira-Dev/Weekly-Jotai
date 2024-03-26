import { ReactNode } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";

interface IContainerProps {
    title: string;
    content: ReactNode;
    footer?: ReactNode;
}

export function Container({ title, content, footer }: IContainerProps) {
    return (
        <Card className="text-center my-2 max-h-min">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {content}
            </CardContent>
            {footer && (
                <CardFooter className="justify-center gap-2">
                    {footer}
                </CardFooter>
            )}
        </Card>
    )
}