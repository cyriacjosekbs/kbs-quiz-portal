import React from 'react';

// Main App component for the quiz portal
const App = () => {
  // State to manage the current quiz link and other dynamic content
  // In a real application, you might fetch these from a database or a simple configuration file.
  const currentQuizLink = 'https://forms.gle/your-quiz-link-here';
const leaderboardLink = 'https://docs.google.com/spreadsheets/d/your-leaderboard-link-here/edit';
const quizSchedule = [
  { week: 1, topic: 'Marketing Fundamentals', date: 'July 8, 2025' },
  { week: 2, topic: 'Brand Management', date: 'July 15, 2025' },
  { week: 3, topic: 'Digital Marketing', date: 'July 22, 2025' },
  { week: 4, topic: 'Consumer Behavior', date: 'July 29, 2025' },
];
// ... (other code)
const rules = [
  'Each quiz will be timed. Ensure you have a stable internet connection.',
  'All questions must be answered individually. Any form of cheating will lead to disqualification from the league.',
  'The quiz will be accessible for a limited time window each week.',
  'Your final score will contribute to your overall league ranking.',
  'Decisions of the Marketing Club Chairperson are final.',
];
  // Placeholder for Firebase setup if you decide to add dynamic content later
  // const [db, setDb] = useState(null);
  // const [auth, setAuth] = useState(null);
  // const [userId, setUserId] = useState(null);
  // const [isAuthReady, setIsAuthReady] = useState(false);

  // useEffect(() => {
  //   // Firebase initialization and authentication
  //   const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
  //   const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};

  //   if (Object.keys(firebaseConfig).length > 0) {
  //     import('firebase/app')
  //       .then(({ initializeApp }) => {
  //         const app = initializeApp(firebaseConfig);
  //         return Promise.all([
  //           import('firebase/auth'),
  //           import('firebase/firestore')
  //         ]).then(([{ getAuth, signInWithCustomToken, signInAnonymously, onAuthStateChanged }, { getFirestore }]) => {
  //           const authInstance = getAuth(app);
  //           const dbInstance = getFirestore(app);
  //           setAuth(authInstance);
  //           setDb(dbInstance);

  //           onAuthStateChanged(authInstance, async (user) => {
  //             if (user) {
  //               setUserId(user.uid);
  //             } else {
  //               // Sign in anonymously if no initial token is provided
  //               if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
  //                 try {
  //                   await signInWithCustomToken(authInstance, __initial_auth_token);
  //                   setUserId(authInstance.currentUser?.uid || crypto.randomUUID());
  //                 } catch (error) {
  //                   console.error("Error signing in with custom token:", error);
  //                   await signInAnonymously(authInstance);
  //                   setUserId(authInstance.currentUser?.uid || crypto.randomUUID());
  //                 }
  //               } else {
  //                 await signInAnonymously(authInstance);
  //                 setUserId(authInstance.currentUser?.uid || crypto.randomUUID());
  //               }
  //             }
  //             setIsAuthReady(true);
  //           });
  //         });
  //       })
  //       .catch(error => console.error("Error loading Firebase modules:", error));
  //   } else {
  //     // If no firebase config, set auth ready to true to proceed without database
  //     setIsAuthReady(true);
  //   }
  // }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans text-gray-800 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-8 md:p-12 space-y-8 border border-blue-200">

        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-2 leading-tight">
            Kochi Business School
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4">
            Marketing Club Quiz League
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome, future marketing leaders! Prepare to test your knowledge and climb the ranks in our weekly competitive quiz league.
          </p>
        </header>

        {/* Current Quiz Section */}
        <section className="bg-blue-50 p-6 rounded-xl shadow-inner border border-blue-100">
          <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
            <svg className="w-7 h-7 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd"></path>
            </svg>
            This Week's Challenge!
          </h3>
          <p className="text-gray-700 mb-6">
            The latest quiz is live! Click the button below to participate. Remember to read the rules carefully before you begin.
          </p>
          <a
            href={currentQuizLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-indigo-700 transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"></path>
            </svg>
            Start Quiz Now!
          </a>
          <p className="text-sm text-gray-500 mt-4">
            (This link will open in a new tab. Please ensure you are logged into your KBS Google account.)
          </p>
        </section>

        {/* Information Sections: Rules, Leaderboard, Schedule */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Rules Section */}
          <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-700 mb-4 flex items-center">
              <svg className="w-7 h-7 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
              </svg>
              Important Rules
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </section>

          {/* Leaderboard Section */}
          <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-700 mb-4 flex items-center">
              <svg className="w-7 h-7 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zm0 4a1 1 0 000 2h11a1 1 0 100-2H3zm0 4a1 1 0 000 2h11a1 1 0 100-2H3zm0 4a1 1 0 000 2h11a1 1 0 100-2H3z" clipRule="evenodd"></path>
              </svg>
              League Leaderboard
            </h3>
            <p className="text-gray-700 mb-4">
              See how you stack up against your peers! The leaderboard is updated weekly after each quiz.
            </p>
            <a
              href={leaderboardLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
              </svg>
              View Leaderboard
            </a>
          </section>
        </div>

        {/* Schedule Section */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-700 mb-4 flex items-center">
            <svg className="w-7 h-7 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
            </svg>
            Quiz Schedule
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-inner">
              <thead>
                <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Week</th>
                  <th className="py-3 px-6 text-left">Topic</th>
                  <th className="py-3 px-6 text-left">Date</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm font-light">
                {quizSchedule.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-6 text-left whitespace-nowrap">{item.week}</td>
                    <td className="py-3 px-6 text-left">{item.topic}</td>
                    <td className="py-3 px-6 text-left">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="text-center text-gray-500 text-sm mt-8 pt-6 border-t border-gray-200">
          <p>&copy; {new Date().getFullYear()} Kochi Business School Marketing Club. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
