import React from 'react';

function App() {
  // Static data for the quiz portal.
  const currentQuizLink = 'https://forms.gle/your-quiz-link-here'; // Placeholder Google Form link

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white font-inter flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Main Content Area - Centered */}
      <main className="w-full max-w-2xl flex flex-col items-center text-center bg-white bg-opacity-10 p-8 sm:p-10 md:p-12 rounded-3xl shadow-2xl backdrop-filter backdrop-blur-sm border border-white border-opacity-20 animate-fade-in">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-tight leading-tight text-shadow-lg">
            Kochi Business School
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-300 text-shadow-md">
            Marketing Club Quiz League
          </h2>
        </header>

        {/* Start Quiz Button */}
        <a
          href={currentQuizLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white text-xl sm:text-2xl font-bold rounded-full shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-75 animate-bounce-once"
        >
          Start Quiz Now!
        </a>
      </main>

      {/* Tailwind CSS Custom Animation (for animate-fade-in and animate-bounce-once) */}
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes bounceOnce {
          0%, 100% {
            transform: translateY(0);
          }
          20% {
            transform: translateY(-5px);
          }
          40% {
            transform: translateY(0);
          }
        }
        .animate-bounce-once {
          animation: bounceOnce 1.5s ease-out 0.5s 1; /* 0.5s delay, runs once */
        }

        /* Basic text shadow for better readability on gradients */
        .text-shadow-lg {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        .text-shadow-md {
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
        }
        `}
      </style>
    </div>
  );
}

export default App;
