import { useState } from "react";
import styles from "./App.module.scss";
import { Container } from "./components/Container/Container";
import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";
import useSound from "use-sound";
import sound from "/sound.mp3";

function App() {
    const [time, setTime] = useState<number>(1800);
    const [timerGo, setTimerGo] = useState<boolean>(false);
    const [playSound] = useSound(sound);

    const startTimer = (startTime: number) => {
        if (!timerGo) {
            setTimerGo(true);
            const interval = setInterval(() => {
                setTime(t => t - 1);
            }, 1000);
            setTimeout(() => {
                playSound();
                playSound();
                playSound();
                setTimerGo(false);
                clearInterval(interval);
                setTimeout(() => {
                    window.location.reload();
                }, 4900);
            }, startTime);
        }
    };

    const convertTime = (seconds: number) => {
        const minute = Math.floor(seconds / 60);
        const newSeconds = seconds - minute * 60;
        return `${minute < 10 ? "0" + minute : minute}:${newSeconds < 10 ? "0" + newSeconds : newSeconds}`;
    };

    return (
        <Container>
            <h1 className={styles.title}>Таймер</h1>
            <div className={styles.inputWrapper}>
                <div className={styles.circle}>
                    <Input value={convertTime(time)} />
                    <Button
                        className={styles.button}
                        onClick={() => {
                            if (!timerGo) {
                                startTimer(time * 1000);
                            } else {
                                window.location.reload();
                            }
                        }}
                    >
                        {timerGo ? "Остановить" : "Старт"}
                    </Button>
                </div>
                <div className={styles.buttonWrapper}>
                    <Button
                        onClick={() => {
                            if (!timerGo) {
                                setTime(t => (t == 3600 ? t : t + 300));
                            }
                        }}
                    >
                        +
                    </Button>
                    <Button
                        onClick={() => {
                            if (!timerGo) {
                                setTime(t => (t == 0 ? t : t - 300));
                            }
                        }}
                    >
                        -
                    </Button>
                </div>
            </div>
        </Container>
    );
}

export default App;
