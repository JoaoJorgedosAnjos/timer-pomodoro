import { useEffect, useState } from "react";

export const Timer = (): JSX.Element => {
    const [timer, setTimer] = useState<number>(25 * 60);

    const [isCounting, setIsCounting] = useState<boolean>(false);
    const [isWorking, setIsWorking] = useState<boolean>(false);

    const minutes: number = Math.floor(timer / 60);
    const seconds: number = timer % 60;

    useEffect(() => {
        if (timer === 0) {
            alert("O tempo acabou, faça uma pausa de 5 minutos")
            return;
        } else {
            isCounting &&
                setTimeout(() => {
                    setTimer(timer - 1);
                }, 1000);
        }
    }, [timer, isCounting]);

    const handleStart = () => {
        setIsCounting(true);
    };
    const handleStop = () => {
        setIsCounting(false);
    };
    const handleReset = () => {
        setIsCounting(false);
        if(isWorking === false){
            setTimer(25 * 60);
        }else{
            setTimer(5 * 60);
        }
    };

    const handlePomodoro = () => {
        setIsCounting(false);
        setIsWorking(false);
        setTimer(25 * 60);
    };

    const handleBreak = () => {
        setIsCounting(false);
        setIsWorking(true);
        setTimer(5 * 60);
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
                    <button onClick={handleStop}>Pausar</button>
                ) : (
                    <button onClick={handleStart}>Começar</button>
                )}
                <button onClick={handleReset}>Resetar</button>
                {isWorking ? (
                    <button onClick={handlePomodoro}>Pomodoro</button>
                ) : (
                    <button onClick={handleBreak}>Intervalo</button>
                )}

            </div>
        </>
    );
}