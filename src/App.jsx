import { useState } from "react";
import "./App.css";
import { Board } from "./components";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'confetti-react';

const App = () => {
  const { width, height } = useWindowSize()
    const [isExploding, setIsExploding] = useState(false);
    return (
        <>
            {isExploding && (
                <Confetti
                height={height}
                width={width}
                gravity={0.2}
                />
            )}
            <h1 className="title">TIC TAC TOE</h1>
            <Board confetti={setIsExploding}/>
        </>
    );
};
export default App;
