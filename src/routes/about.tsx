export function AboutRoute() {
  return (
    <main className="rounded-lg bg-gray-50 p-6 font-sans shadow-md">
      <h1 className="mb-6 text-4xl font-extrabold text-gray-800">
        About Task Management App
      </h1>
      <p className="mb-8 text-xl leading-relaxed text-gray-700">
        Welcome to the Task Management App! This simple React-based application
        allows you to easily manage and track your tasks. Stay on top of your
        work by viewing a list of tasks along with their completion status.
      </p>

      <h2 className="mb-4 text-3xl font-semibold text-gray-800">Features</h2>
      <ul className="mb-8 list-disc space-y-2 pl-5">
        <li>Display a list of tasks with completion status</li>
        <li>Structured using React components for easy maintainability</li>
        <li>Styled with Tailwind CSS for a clean, responsive design</li>
      </ul>

      <h2 className="mb-4 text-3xl font-semibold text-gray-800">
        Technologies Used
      </h2>
      <ul className="mb-8 list-disc space-y-2 pl-5">
        <li>
          <strong>React</strong> for building the user interface
        </li>
        <li>
          <strong>TypeScript</strong> for type safety and better developer
          experience
        </li>
        <li>
          <strong>Tailwind CSS</strong> for utility-first styling
        </li>
      </ul>

      <h2 className="mb-4 text-3xl font-semibold text-gray-800">
        Code Formatting
      </h2>
      <p className="mb-6 text-lg text-gray-700">
        To maintain consistent code style, this project uses:
      </p>
      <ul className="mb-8 list-disc space-y-2 pl-5">
        <li>
          <strong>Prettier</strong> for automatic code formatting
        </li>
        <li>
          <strong>ESLint</strong> for linting and ensuring code quality
        </li>
      </ul>

      <h2 className="mb-4 text-3xl font-semibold text-gray-800">License</h2>
      <p className="text-lg text-gray-700">
        This project is open-source and available under the{" "}
        <strong>MIT License</strong>.
      </p>
    </main>
  );
}
