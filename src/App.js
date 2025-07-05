import React from 'react';

function App() {
  // Static data for the quiz portal. These values can be updated directly here
  // or fetched dynamically if a backend (like Firebase Firestore) were integrated.
  const currentQuizLink = 'https://forms.gle/your-quiz-link-here'; // Placeholder Google Form link
  const leaderboardLink = 'https://docs.google.com/spreadsheets/d/your-leaderboard-link-here/edit'; // Placeholder Google Sheet link

  const quizSchedule = [
    { week: 1, topic: 'Marketing Fundamentals', date: 'July 8, 2025' },
    { week: 2, topic: 'Brand Management', date: 'July 15, 2025' },
    { week: 3, topic: 'Digital Marketing', date: 'July 22, 2025' },
    { week: 4, topic: 'Consumer Behavior', date: 'July 29, 2025' },
    { week: 5, topic: 'Marketing Strategy', date: 'August 5, 2025' },
  ];

  const rules = [
    'Each quiz will be timed. Ensure you have a stable internet connection.',
    'All questions must be answered individually. Any form of cheating will lead to disqualification from the league.',
    'The quiz will be accessible for a limited time window each week.',
    'Your final score will contribute to your overall league ranking.',
    'Decisions of the Marketing Club Chairperson are final.',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white font-inter flex flex-col items-center p-4 sm:p-6 md:p-8">
      {/* Header Section */}
      <header className="w-full max-w-4xl text-center mb-8 sm:mb-10 p-4 bg-white bg-opacity-10 rounded-xl shadow-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-tight">
          Kochi Business School
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-300">
          Marketing Club Quiz League
        </h2>
        <p className="text-sm sm:text-base mt-2">
          Sharpen your marketing acumen and compete for glory!
        </p>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-4xl flex flex-col lg:flex-row gap-6 mb-8">
        {/* Left Column: Quiz Actions */}
        <section className="flex-1 bg-white bg-opacity-10 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-200">Current Quiz</h3>
          <p className="text-lg sm:text-xl mb-6">Ready for the next challenge?</p>
          <a
            href={currentQuizLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-lg transform transition duration-300 hover:scale-105 mb-4"
          >
            Start Quiz Now!
          </a>
          <a
            href={leaderboardLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full shadow-lg transform transition duration-300 hover:scale-105"
          >
            View Leaderboard
          </a>
        </section>

        {/* Right Column: Important Rules */}
        <section className="flex-1 bg-white bg-opacity-10 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-200">Important Rules</h3>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
            {rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </section>
      </main>

      {/* Quiz Schedule Section */}
      <section className="w-full max-w-4xl bg-white bg-opacity-10 p-6 rounded-xl shadow-lg mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-200 text-center">Quiz Schedule</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white bg-opacity-5 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-800 bg-opacity-50">
                <th className="py-3 px-4 text-left text-sm sm:text-base font-semibold">Week</th>
                <th className="py-3 px-4 text-left text-sm sm:text-base font-semibold">Topic</th>
                <th className="py-3 px-4 text-left text-sm sm:text-base font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              {quizSchedule.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-opacity-10' : 'bg-opacity-5'}>
                  <td className="py-3 px-4 text-sm sm:text-base">{item.week}</td>
                  <td className="py-3 px-4 text-sm sm:text-base">{item.topic}</td>
                  <td className="py-3 px-4 text-sm sm:text-base">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full max-w-4xl text-center mt-auto p-4 text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Kochi Business School Marketing Club. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
