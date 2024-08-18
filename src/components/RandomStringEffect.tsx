import { useState, useEffect } from "react";

type Props = {
  duration: number;
  defaultStr?: string;
  size: number;
  onlyNum?: boolean;
  num?: boolean;
  className?: string;
};

const RandomTextEffect = ({
  size,
  duration,
  onlyNum,
  num,
  defaultStr,
  className,
}: Props) => {
  const [string, setString] = useState<string>("");

  useEffect(() => {
    if (defaultStr) size = defaultStr.length;
    let intervalId: number;

    const randomString = () => {
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (onlyNum) str = "0123456789";
      if (num) str += "0123456789";

      const length = str.length;

      intervalId = window.setInterval(() => {
        let pass = "";
        for (let i = 0; i < size; i++) {
          const random = Math.floor(Math.random() * length);
          pass += str[random];
        }
        setString(pass);
      }, 10);

      // Clear the interval after the specified duration
      setTimeout(() => {
        clearInterval(intervalId);
        if (defaultStr) setString(defaultStr);
      }, duration * 1000);
    };

    randomString();

    // Cleanup
    return () => {
      clearInterval(intervalId);
    };
  }, [size, duration, onlyNum, num]);

  return (
    <div className={`${className ? className : " text-4xl font-bold"}`}>
      {string}
    </div>
  );
};

export default RandomTextEffect;
