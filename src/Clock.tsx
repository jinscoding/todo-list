// Clock
import { useState } from "react";

const Clock :  React.FC = () => {
    const [time, settime] = useState(new Date());

    setInterval(()=>{
        settime(new Date());
    }, 1000);
    
    return (
        <div>
            현재 시간 : {time.toLocaleTimeString()}
        </div>
    )
}

export default Clock;