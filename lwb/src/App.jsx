import { useState } from "react";

export default function App() {
  const [mode, setMode] = useState("clock");

  return (
    <main className="p-6 min-h-screen bg-gradient-to-br from-gray-500 via-gray-500 to-gray-900 flex items-center justify-center font-pretendard">
        <div className="w-full max-w-2xl">
          <div className="mb-8 text-center">
            <p className="mb-2 text-white">
              5주차 프엔 과제
            </p>

            <h2 className="text-4xl font-extrabold text-white mb-3">
              실시간 시계 & 카운트다운 타이머
            </h2>

            <p className="text-white">
              실시간 시계와 카운트다운 타이머를 구현하는 과제
            </p>

            <div className="flex items-center justify-center mt-8">
              <div className="bg-white p-2 rounded-2xl flex gap-4">
                <button 
                  onClick={() => setMode("clock")}
                  className={`px-6 py-4 rounded-xl font-bold transition ${
                    mode === "clock"
                      ? "bg-blue-600 text-white font-bold"
                      : "text-gray-500 hover:text-black"
                    }`}>
                  시계 보기
                  </button>

                  <button 
                  onClick={() => setMode("timer")}
                  className={`px-6 py-4 rounded-xl font-bold transition ${
                    mode === "timer"
                      ? "bg-blue-600 text-white font-bold"
                      : "text-gray-500 hover:text-black"
                    }`}>
                  타이머 보기
                </button>
                
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}
