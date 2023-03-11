import { useEffect, useState } from "react";

export const Timer = (): JSX.Element => {
    const [totalTimeInSeconds, setTotalTimesInSeconds] = useState<number>(1 * 60);
    const [isCounting, setIsCounting] = useState<boolean>(false);

    const minutes: number = Math.floor(totalTimeInSeconds / 60);
    const seconds: number = totalTimeInSeconds % 60;

    useEffect(() => {
        if (totalTimeInSeconds === 0) {
            alert("O tempo acabou, faça uma pausa de 5 minutos")
            return;
        } else {
            isCounting &&
            setTimeout(() => {
                setTotalTimesInSeconds(totalTimeInSeconds - 1);
            }, 1000);
        }
    }, [totalTimeInSeconds, isCounting]);

    const handleStart = () => {
        setIsCounting(true);
    };
    const handleStop = () => {
        setIsCounting(false);
    };
    const handleReset = () => {
        setIsCounting(false);
        setTotalTimesInSeconds(5);
    };

    return (
        <>
            <div>
                <span>{minutes.toString().padStart(2, "0")}</span>
                <span>:</span>
                <span>{seconds.toString().padStart(2, "0")}</span>
            </div>
            <div>
                {isCounting ? (
                    <button onClick={handleStop}>Stop</button>
                ) : (
                    <button onClick={handleStart}>Start</button>
                )}
                <button onClick={handleReset}>Reset</button>
            </div>
        </>
    );
}