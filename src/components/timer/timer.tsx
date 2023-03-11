import { useEffect, useState } from "react";

export const Timer = ():JSX.Element => {
    const [totalTimeInSeconds, setTotalTimesInSeconds] = useState<number>(0.1 * 60);

    const minutes: number = Math.floor(totalTimeInSeconds / 60);
    const seconds: number = totalTimeInSeconds % 60;

    useEffect(() => {
        if (totalTimeInSeconds === 0) {
            alert("O tempo acabou, faça uma pausa de 5 minutos")
            return;
        } else {
            setTimeout(() => {
                setTotalTimesInSeconds(totalTimeInSeconds - 1);
            }, 1000);
        }
    }, [totalTimeInSeconds]);

    return (
        <div>
            <span>{minutes.toString().padStart(2, "0")}</span>
            <span>:</span>
            <span>{seconds.toString().padStart(2, "0")}</span>
        </div>
    );
}