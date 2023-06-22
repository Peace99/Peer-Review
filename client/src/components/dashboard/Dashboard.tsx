import { useQuery } from "react-query";
import { Article } from "../../models/article.model";
import styles from "./dashboard.module.scss";
import React from "react";
import App from "../../App";


export function Dashboard() {
  // const {} = useQuery({})

  interface BoxProps {
    color: string;
    size: number;
  }

  const Box: React.FC<BoxProps> = ({ color, size }) => {
    const boxStyle: React.CSSProperties = {
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      margin: "10px",
    };

    return <div style={boxStyle}></div>;
  };

  const BoxContainer: React.FC = () => {
    const boxes: BoxProps[] = [
      { color: "red", size: 50 },
      { color: "blue", size: 80 },
      { color: "green", size: 120 },
    ];

    return (
      <div>
        {boxes.map((box, index) => (
          <Box key={index} color={box.color} size={box.size} />
        ))}
      </div>
    );
  };

  const App: React.FC = () => {
    return (
      <div className="App">
        <BoxContainer />
      </div>
    );
  };

  return <div className={styles.manuscripts}></div>;
}
