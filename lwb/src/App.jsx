import { useState, useEffect } from "react";

export default function App() {
  const [mode, setMode] = useState("clock");
  const [now, setNow] = useState(new Date());
  const [count, setCount] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (mode !== "timer") {
      return;
    }

    const countDown = setInterval(() => {
      setCount((sec) => {
        if (sec <= 0) {
          return 0;
        }

        return sec - 1;
      });
    }, 1000);

    return () => {
      clearInterval(countDown);
    };
  }, [mode]);

  const timeString = now.toLocaleTimeString();

  return (
    <main className="p-6 min-h-screen bg-gradient-to-br from-gray-500 via-gray-500 to-gray-900 flex items-center justify-center font-pretendard">
        <div className="w-full max-w-2xl">
          <div className="mb-8 text-center">
            <p className="mb-2 text-white">
              5주차 프엔 과제
            </p>

            <h1 className="text-4xl font-bold text-white mb-3">
              실시간 시계 & 카운트다운 타이머
            </h1>

            <p className="mb-2 text-white">
              실시간 시계와 카운트다운 타이머를 구현하는 과제
            </p>

            <div className="flex items-center justify-center mt-6">
              <div className="bg-white p-2 rounded-2xl flex gap-4">
                <button 
                  onClick={() => setMode("clock")}
                  className={`px-6 py-4 rounded-xl transition ${
                    mode === "clock"
                      ? "bg-gray-500 text-white font-bold"
                      : "text-gray-500 hover:text-black"
                    }`}>
                  시계 보기
                  </button>

                  <button 
                  onClick={() => setMode("timer")}
                  className={`px-6 py-4 rounded-xl transition ${
                    mode === "timer"
                      ? "bg-gray-500 text-white font-bold"
                      : "text-gray-500 hover:text-black"
                    }`}>
                  타이머 보기
                </button>
              </div>
            </div>
            {mode === "clock" && (
              <div className="bg-white rounded-2xl p-10 mt-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gray-200 flex items-center justify-center text-3xl">
                    🕐
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-left mb-1">현재 시각</h3>
                    <p className="text-gray-500">1초마다 시간이 업데이트됩니다.</p>                   
                  </div>
                </div>

                <div className="bg-gray-200 rounded-2xl py-14 text-center">
                  <p className="text-4xl font-bold text-gray-600">
                    {timeString}
                  </p>
                </div>
              </div>
            )}
            
            {mode === "timer" && (
              <div className="bg-white rounded-2xl p-10 mt-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gray-200 flex items-center justify-center text-3xl">
                    💣
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-left mb-1">카운트다운</h3>
                    <p className="text-gray-500">10초부터 0초까지 감소합니다.</p>                   
                  </div>
                </div>

                <div className="bg-gray-200 rounded-2xl py-14 text-center">
                  <p className="text-4xl font-bold text-gray-600">
                    {count === 0 ? "💥 시간 종료!" : `${count}초`}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
    </main>
  )
}
