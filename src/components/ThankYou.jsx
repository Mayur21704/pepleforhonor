export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-md max-w-lg w-full p-10 text-center">

        <h1 className="text-3xl font-semibold text-purple-700 mb-4">
          Thank You!
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          Your submission has been received successfully.
        </p>

        <p className="text-gray-500 mb-6">
          Our People for Honor team will follow up with you shortly.
        </p>

        <a
          href="/"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
